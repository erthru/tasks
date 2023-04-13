function get(req, res) {
  if (req.session.userId) {
    res.redirect("/dashboard");
    return;
  }

  res.render("pages/login");
}

async function post(req, res) {
  try {
    req.session.userId = 1;

    await new Promise(function (resolve, reject) {
      req.session.save(function (err) {
        if (err) {
          reject(err);
        }
        
        resolve();
      });
    });

    res.redirect("/dashboard");
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  get,
  post,
};
