const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));

// crudl: create, read, update, destroy, list

function urlExists(req, res, next) {
  const { urlId } = req.params;
  const foundUrl = urls.find((url) => Number(urlId) === url.id);
  // console.log("this in my found url", foundUrl)
  if (foundUrl) {
    res.locals.url = foundUrl;
    return next();
  }
  next({ status: 404, message: `Url id not found: ${urlId}` });
}

function hasHref(req, res, next) {
  const { data: { href } = {} } = req.body;
  if (href) {
    return next();
  }
  next({ status: 400, message: "A 'href' property is required." });
}

//post, needs body
function create(req, res, next) {
  const { data: { href } = {} } = req.body;
  const newUrl = { href, id: urls.length + 1 };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}

// get with an id
function read(req, res, next) {
  res.json({ data: res.locals.url });
}

// put with an id(need a request body req.body)
function update(req, res, next) {
  const url = res.locals.url;
  const { data: { href } = {} } = req.body;

  //   updates the url
  url.href = href;
  res.json({ data: url });
}

// get
function list(req, res, next) {
  res.json({ data: urls });
}

//
module.exports = {
  create: [hasHref, create],
  read: [urlExists, read],
  update: [urlExists, hasHref, update],
  list,
  urlExists,
};
