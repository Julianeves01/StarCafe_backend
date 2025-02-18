const Produto = require('../models/');
const ListaMenu = require('../models/listaMenu');
const PedidoLista = require('../models/pedidoLista');
const { v4: uuidv4 } = require('uuid');

const listaMenu = new ListaMenu();
const pedidoLista = new PedidoLista();

const produto1 = new Produto('Latte', 5.00, "grande");
const produto2 = new Produto('Cappuccino', 4.50, "pequeno");
const produto3 = new Produto('cookies', 6.00, "em preparação");
const produto4 = new Produto('Expresso', 3.00, "medio");
const produto5 = new Produto('Bolo de Iogurte', 2.50, "grande", "feito");

listaMenu.addProduto(produto1);
listaMenu.addProduto(produto2);
listaMenu.addProduto(produto3);
listaMenu.addProduto(produto4);
listaMenu.addProduto(produto5);

const pedidoController = {
    createOrder: (req, res) => {
        try {
            const { itens } = req.body;
            if (!itens || !Array.isArray(itens) || itens.length === 0) {
                return res.status(400).json({ message: 'Pedido inválido' });
            }
            const pedidoItens = [];
            let statusPedido = "pendente";
            for (const nomeItem of itens) {
                const produto = listaMenu
                    .getMenu()
                    .find((item) => item.nome === nomeItem);
                if (!produto) {
                    return res
                        .status(400)
                        .json({ error: `Item '${nomeItem}' não encontrado no menu😢` });
                }
                pedidoItens.push(produto); // Define o status do pedido com base no status dos produtos
                if (produto.status === "feito") {
                    statusPedido = "feito";
                } else if (
                    produto.status === "em preparação" &&
                    statusPedido !== "feito"
                ) {
                    statusPedido = "em preparação";
                }
            }
            const pedido = {
                id: uuidv4(),
                itens: pedidoItens,
                status: statusPedido,
            };
            pedidoLista.addPedido(pedido);
            res.status(201).json({
                message: "Pedido realizado com sucesso!",
                pedido: {
                    id: pedido.id,
                    itens: pedido.itens.map((item) => ({
                        nome: item.nome,
                        preco: item.preco,
                        status: item.status,
                    })),
                },
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getMenu: (req, res) => {
        res.json(listaMenu.getMenu());
    },
    getOrderById: (req, res) => {
        try {
            const pedido = pedidoLista.getPedidoById(req.params.id);
            res.json(pedido);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },
    deleteOrder: (req, res) => {
        try {
            const pedidoId = req.params.id;
            const pedido = pedidoLista.getPedidoById(pedidoId);
            if (pedido.status !== "pendente") {
                return res.status(403).json({
                    error:
                        "O pedido não pode ser cancelado! ele já foi preparado ou está em outro status.",
                });
            }
            pedidoLista.deletePedido(pedidoId);
            res.json({ message: "Pedido cancelado com sucesso!😁" });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },
};
module.exports = pedidoController;
