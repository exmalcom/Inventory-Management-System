const mongoose = require('mongoose');
const Item = require('../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/ims-db',)
    .then(() => {
        console.log("Successfully connected to MongoDB")
    })
    .catch(err => {
        console.log("Error connecting to MongoDB", err)
    })

const seedDb = async() => {
    // await Item.deleteMany({});
    // const items = new Item({
    //     name: 'Infinix Zero 5G 2023',
    //     category: 'Mobile',
    //     quantity: 10,
    //     price: 12.00,
    //     description: 'Best for mid-range gaming',
    // });
    // await items.save();
    
    const items = [
        {
            name: 'Samsung Galaxy S23 Ultra',
            category: 'mobile',
            quantity: 25,
            price: 12.00,
            description: 'Flagship smartphone with a stunning camera and performance.',
        },
        {
            name: 'Lenovo Ideapad 3',
            category: 'laptop',
            quantity: 15,
            price: 7.50,
            description: 'Affordable laptop for everyday tasks and light productivity.',
        },
        {
            name: 'Apple MacBook Pro 14-inch',
            category: 'laptop',
            quantity: 10,
            price: 20.00,
            description: 'High-end laptop designed for professionals and creatives.',
        },
        {
            name: 'Sony WH-1000XM5',
            category: 'accessories',
            quantity: 50,
            price: 4.00,
            description: 'Premium noise-canceling wireless headphones.',
        },
        {
            name: 'Canon EOS 90D',
            category: 'camera',
            quantity: 8,
            price: 12.00,
            description: 'Advanced DSLR camera with exceptional image quality.',
        },
        {
            name: 'Google Pixel Watch',
            category: 'wearable',
            quantity: 20,
            price: 3.50,
            description: 'Smartwatch with Google Fit integration for fitness ecosystem and health tracking features.',
        },
        {
            name: 'Dell XPS 13',
            category: 'laptop',
            quantity: 18,
            price: 14.00,
            description: 'Compact and lightweight laptop with a vibrant display.',
        },
        {
            name: 'HP LaserJet Pro M404dn',
            category: 'printer',
            quantity: 12,
            price: 2.50,
            description: 'Reliable monochrome printer for offices and homes.',
        },
        {
            name: 'Bose SoundLink Revolve',
            category: 'accessories',
            quantity: 35,
            price: 2.00,
            description: 'Portable Bluetooth speaker with 360-degree sound.',
        },
        {
            name: 'OnePlus 11 5G',
            category: 'mobile',
            quantity: 40,
            price: 8.00,
            description: 'Powerful smartphone with smooth performance and fast charging.',
        }
    ];

    await Item.insertMany(items);
};

seedDb().then(() => {
    mongoose.connection.close();
})
