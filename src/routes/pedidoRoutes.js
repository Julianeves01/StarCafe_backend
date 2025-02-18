const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get("/menu", pedidoController.getMenu);
router.post("/order", pedidoController.createOrder);
router.get("/order/:id", pedidoController.getOrderById);
router.delete("/order/:id", pedidoController.deleteOrder);

module.exports = router;