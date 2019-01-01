exports.homePage = (req, res) => {
  console.log("Homepage loading...");
  res.render("hello", { name: req.name, title: "Jimbo" });
};
