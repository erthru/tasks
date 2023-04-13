function get(req, res) {
  if (req.session.userId) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/login");
  }
}

module.exports = {
  get,
};
