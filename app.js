const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

let items = [];
let work = [];

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    let day = date();
    
    res.render("list", { listTitle: day, itemList: items });

});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    if (req.body.button === 'Work') {
        work.push(item);
        // console.log(re)
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work", itemList: work });
});

app.get("/about", function(req,res){
    res.render("about");
})


app.listen(3000, function (req, res) {
    console.log("App is running on port 3000");
})