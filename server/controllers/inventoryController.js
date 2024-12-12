const mongoose = require('mongoose');
const Item = require('../../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/ims-db',)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log("Error connecting to MongoDB", err)
    })


module.exports.items = async (req, res) => {
    const items = await Item.find({});
    res.render('index', { items });
};

module.exports.addItemForm = (req, res) => {
    res.render('add-item');
};

module.exports.addItem = async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.redirect('/');
};

module.exports.viewItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('view-item', { item });
};

module.exports.updateItemForm = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('update-item', { item });
};

module.exports.updateItem = async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
};

module.exports.deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

module.exports.searchItems = async (req, res) => {
    const { query } = req.query;
    const items = await Item.find({ name: new RegExp(query, 'i') });
    res.render('index', { items, query });
};

module.exports.filterItems = async (req, res) => {
    const { category } = req.query;

    // Build the filter object
    let filter = {};
    if (category) {
        filter.category = category;
    }

    const items = await Item.find(filter);
    res.render('index', { items, category });
};
