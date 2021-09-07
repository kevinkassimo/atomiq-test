const { Route } = require("atomiq");
const express = require("express");

const app = express();
app.set("express", express);

// Atomiq converts methods into path handlers, by replacing _ with / and $ with :
class MyRoute extends Route {
  constructor(app) {
    super(app);
  }
  get_path_a(req, res) { // GET /path/a
    res.send("get_path_a");
  }
  get_variable_$a(req, res) { // GET /variable/:a
    console.log("Params", req.params)
    res.send(`get_variable_${req.params.a}`);
  }
}

app.use('/', new MyRoute(app).router);
app.listen(8080);