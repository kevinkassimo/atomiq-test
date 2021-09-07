const { Route } = require("atomiq");

module.exports = {
  default: class RouteC extends Route {
    constructor(app) {
      super(app);
    }
    get(req, res) { // GET /d1/c
      res.send("RouteC.get");
    }
    get_C(req, res) { // GET /d1/c/c
      res.send("RouteC.get_c");
    }
  }
}