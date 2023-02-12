const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));

//check is useExists?
function useExists(req, res, next) {
  const { useId } = req.params;
  const foundUse = uses.find((use) => use.id === Number(useId));
  if (foundUse) {
    //locals starts as an emtpy obeject and here we populate it
    res.locals.use = foundUse;
    return next();
  }
  next({ status: 404, message: `Use id not found: ${useId}` });
}

//get
function list(req, res, next) {
  const { urlId } = req.params;
  const data = uses.filter(
    urlId ? (uses) => uses.urlId === Number(urlId) : () => true
  );
  res.json({ data: data });
}

//get with id
function read(req, res, next) {
  res.json({ data: res.locals.use });
}

//delete with id
function destroy(req, res, next) {
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  if (index > -1) {
    uses.splice(index, 1);
  }
  res.sendStatus(204);
}

module.exports = {
  list,
  read: [useExists, read],
  delete: destroy,
};
