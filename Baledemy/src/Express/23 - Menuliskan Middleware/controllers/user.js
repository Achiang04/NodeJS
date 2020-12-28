let users = [
  { id: 1, name: "asep", email: "asep@yahoo.com" },
  { id: 2, name: "bambang", email: "bambang@gmail.com" },
];

module.exports = {
  get: function (req, res) {
    if (users.length > 0) {
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        data: users,
      });
    } else {
      res.json({
        status: false,
        message: "Data users kosong",
      });
    }
  },
  post: function (req, res) {
    // console.log(req.body);
    users.push(req.body);
    res.json({
      status: true,
      method: req.method,
      url: req.url,
      message: "data users berhasil ditambahkan",
      data: users,
    });
  },
  put: function (req, res) {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.email = req.body.email;

        return user;
      }
    });
    res.json({
      status: true,
      method: req.method,
      url: req.url,
      message: "data users berhasil di edit",
      data: users,
    });
  },
  delete: function (req, res) {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);
    res.json({
      status: true,
      method: req.method,
      url: req.url,
      message: "data users berhasil dihapus",
      data: users,
    });
  },
};
