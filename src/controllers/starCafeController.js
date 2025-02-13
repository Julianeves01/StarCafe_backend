const listarCafe = require("../models/starCafeList");

const inicializarCafes = () => { 
    listarCafe.adicionarCafe("Cappuccino", 8.00, "Cappuccino");
    listarCafe.adicionarCafe("Macchiato", 9.00, "Macchiato");
};

const listarCafes = (req, res) => {
    const cafes = listarCafe.listarCafes();
    res.json(cafes);
};

const adicionarCafe = (req, res) => {
    const { nome, valor, descricao } = req.body;
    const cafe = listarCafe.adicionarCafe(nome, valor, descricao);
    res.json(cafe);
};

const buscarCafePorId = (req, res) => {
    const { id } = req.params;
    const cafe = listarCafe.buscarCafePorId(parseInt(id, 10));
    if (cafe) {
        res.json(cafe);
    } else {
        res.status(404).json({ mensagem: "Café não encontrado!" });
    }
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = listarCafe.removerCafe(parseInt(id, 10));
    if (cafeRemovido) {
        res.json(cafeRemovido);
    } else {
        res.status(404).json({ mensagem: "Ops, café não encontrado!" });
    }
};

inicializarCafes();

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafePorId,
    removerCafe
};