const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const PORT = process.env.PORT || 8000;

// Public Static Path
const static_path = path.join(__dirname,"../Public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


//Set view engine
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));
// console.log(static_path);

//Register partials
hbs.registerPartials(partials_path);



//Template Engine Path
app.get("/", (req,res)=>{
    res.render("index")
});
app.get("/about", (req,res)=>{
    res.render("about")

});
app.get("/weather", (req,res)=>{
    res.render("weather")

});
app.get("/contact", (req,res)=>{
    res.render("contact")

});
app.get("*", (req,res)=>{
    res.render("404_error_page")

});

app.listen(PORT, ()=>{
    console.log(`listning at port: ${PORT}`)
});