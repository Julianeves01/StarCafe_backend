class ListaMenu {
    constructor() {
        this.menu = [];
    }
    addProduto(produto) {
    if (!produto.id) {
        throw new Error("Produto sem ID");
    }
        this.menu.push(produto);
    }
    getMenu() {
        return this.menu;
    }
}

module.exports = ListaMenu;