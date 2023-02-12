const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));

//only need two gets and delete
//check is useExists?

//
function list(req, res, next) {
  const { urlId } = req.params;
  const data = uses.filter(
    urlId ? (uses) => uses.urlId === Number(urlId) : () => true
  );

  res.json({data: data})
}

//
function read(req, res, next) {
    
}

//
function destory(req, res, next) {}

module.exports = {
  list,
  read,
  destory,
};
