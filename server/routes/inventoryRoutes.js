const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', inventoryController.items);
router.get('/add-item', inventoryController.addItemForm);
router.post('/add-item', inventoryController.addItem);
router.get('/view-item/:id', inventoryController.viewItem);
router.get('/update-item/:id', inventoryController.updateItemForm);
router.post('/update-item/:id', inventoryController.updateItem);
router.delete('/delete-item/:id', inventoryController.deleteItem);
router.get('/search', inventoryController.searchItems);
router.get('/filter', inventoryController.filterItems);

module.exports = router;
