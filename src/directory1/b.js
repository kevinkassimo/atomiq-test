const { Route } = require("atomiq");

module.exports = {
  default: class RouteB extends Route {
    constructor(app) {
      super(app);
    }
    get(req, res) { // GET /d1/b
      res.send("RouteB.get");
    }
    get_b(req, res) { // GET /d1/b/b
      res.send("RouteB.get_b");
    }
  }
}