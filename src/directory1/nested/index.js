const { Route } = require("atomiq");

module.exports = {
  default: class RouteANested extends Route {
    constructor(app) {
      super(app);
    }
    get(req, res) { // GET /d1/nested
      res.send("RouteANested.get");
    }
  }
}