function get(req, res) {
  if (!req.session.userId) {
    res.redirect("/");
    return;
  }

  res.render("pages/dashboard/tasks", { title: "Tasks", path: req.path });
}

module.exports = {
  get,
};
