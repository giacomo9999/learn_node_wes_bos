exports.myMiddleware = (req, res, next) => {
  req.name = "Jim";
  if (req.name==="Jim"){
      throw Error('That is a stupid name.');
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render("index");
};
