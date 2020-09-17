const express = require("express");
const apiRoutes = require("./routes/api")
const htmlRoutes = require("./routes/view")

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);

app.listen(port, () => console.log("App listening on Port" + port))