const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('images', __dirname + '/images');

app.get("/", (request, response) => {
    response.send(index.html);
});

app.get("/cars", (req, res) => {
    res.render("cars");
});

app.get("/cats", (req, res) => {
    res.render("cats");
});

app.get("/cats", (req, res) => {
    var cats_array = [
        {source: "../images/cat1.jpg", name: "cuddles"},
        {source: "../images/cat2.jpg", name: "leo"},
        {source: "../images/cat3.jpg", name: "kitty"}
    ];
    response.render('cats', {cats: cats_array});
})

app.get("/cats/cuddles", (req, res) => {
    var cat_array = [
    {
        source: "../images/cat1.jpg",
        name: "Cuddles",
        food: "Spaghetti",
        age: 3,
        SleepSpots: ["Under the bed", "In someone else house"]
    }
    ];
    res.render("details", { cat: cat_array });
});
  
app.get("/cats/leo", (req, res) => {
    var cat_array = [
    {
        source: "../images/cat2.jpg",
        name: "Leo",
        food: "Tuna",
        age: 4,
        SleepSpots: ["In cars", "Under the night sky", "In the bedroom"]
    }
    ];
    res.render("details", { cat: cat_array });
});
  
app.get("/cats/kitty", (req, res) => {
    var cat_array = [
    {
        source: "../images/cat3.jpg",
        name: "Kitty",
        food: "Everything",
        age: 5,
        SleepSpots: ["The couch", "The floor", "Under blankets"]
    }
    ];
    res.render("details", { cat: cat_array });
});



app.get("/cars/new", (req, res) => {
    res.render("form");
});

//app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
