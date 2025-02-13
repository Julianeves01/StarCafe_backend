const StarCafe = require("../models/starCafe");

class listarCafe {
    constructor() {
        this.cafes = [];
        this.proximoId = 1;
    }
    adicionarCafe(nome, valor, descricao) {
        const cafe = new StarCafe(this.proximoId++, nome, valor, descricao);
        this.cafes.push(cafe); // Corrigido de novoCafe para cafe
        return cafe;
    }
    listarCafes() {
        return this.cafes;
    }
    buscarCafePorId(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }
    removerCafe(id) {
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1) {
            return this.cafes.splice(index, 1)[0];
        }
    return null;
    }
}

module.exports = new listarCafe();