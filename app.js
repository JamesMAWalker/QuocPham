var bodyParser = require('body-parser'),
    express    = require('express'),
    app        = express();

// APP Configuation Settings
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/product", (req, res) => {
    res.render("product");
});




// Listener
app.listen("5000", () => {
    console.log("Quoc is listening!");
    
})