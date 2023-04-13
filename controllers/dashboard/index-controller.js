function get(req, res) {
  if (!req.session.userId) {
    res.redirect("/");
    return;
  }

  res.render("pages/dashboard/index", { title: "Dashboard", path: req.path });
}

module.exports = {
  get,
};
