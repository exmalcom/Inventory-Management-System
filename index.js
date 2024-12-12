const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const itemsRoute = require('./server/routes/inventoryRoutes');

const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Execute routes
app.use('/', itemsRoute);

app.listen(3000, () => {
    console.log("Serving on port 3000...");
});
