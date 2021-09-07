const path = require("path");

const { DirectoryRouteLoader } = require("atomiq");
const express = require("express");

const app = express();
app.set("express", express);

const loader = new DirectoryRouteLoader(app);

loader.load(path.resolve(__dirname , "./directory1"), "/d1");
loader.load(path.resolve(__dirname , "./directory2"), "/d2");

app.use('/', loader.router);

app.listen(8080);