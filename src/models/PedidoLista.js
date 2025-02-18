class PedidoLista {
    constructor() {
        this.pedidos = [];
    }
    addPedido(pedido) {
    if (!pedido.id) {
        throw new Error("Pedido sem ID");
    }
        this.pedidos.push(pedido);
        return pedido;
    }
    getPedidoById(id) {
        const pedido = this.pedidos.find((pedido) => pedido.id === id);
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        return pedido;
    }
    deletePedido (id) {
        const pedido = this.getPedidoById(id);
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        if (pedido.status !== "pendente") {
            throw new Error("Pedido não pode ser deletado, pois ja esta em outro status! ");
        }
        this.pedidos = this.pedidos.filter((pedido) => pedido.id !== id);
    }
}

module.exports = PedidoLista;