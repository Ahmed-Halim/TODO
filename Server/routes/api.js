var express = require("express");
var router = express.Router();

router.get("/todo", function (req, res, next) {
  data = [
    {
      id: 1,
      title: "Grab some Pizza",
      completed: true,
    },
    {
      id: 2,
      title: "Do your workout",
      completed: true,
    },
    {
      id: 3,
      title: "Hangout with friends",
      completed: false,
    },
  ];
  res.send(data);
});

router.get("/:name", function (req, res, next) {
  res.send({ message: `Hello ${req.params.name} From Server` });
});

module.exports = router;
