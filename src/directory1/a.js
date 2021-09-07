const { Route } = require("atomiq");

module.exports = {
  default: class RouteA extends Route {
    constructor(app) {
      super(app);
    }
    get(req, res) { // GET /d1/a
      res.send("RouteA.get");
    }
    get_a(req, res) { // GET /d1/a/a
      res.send("RouteA.get_a");
    }
  }
}