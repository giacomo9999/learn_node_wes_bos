exports.homePage = (req, res) => {
  console.log("Homepage loading...");
  res.render("hello", { name: req.name, title: "Jimbo" });
};

exports.addStore = (req, res) => {
  res.render("editStore", { title: "Add Store" });
};

exports.createStore = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};
