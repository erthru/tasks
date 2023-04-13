async function get(req, res) {
  await new Promise(function (resolve, reject) {
    req.session.destroy(function (err) {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });

  res.redirect("/");
}

module.exports = {
  get,
};
