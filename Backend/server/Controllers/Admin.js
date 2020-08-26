const User = require("../Models/User");


//Block a User
exports.block = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(500).json({
        error: err
      });
    }
    user.blocked = user.blocked ? 'false' : 'true';
    await User.findByIdAndUpdate(req.params.id, { blocked: user.blocked });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
}

// update online status
exports.online = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(500).json({
        error: err
      });
    }
    user.online = user.online ? 'false' : 'true';
    await User.findByIdAndUpdate(req.params.id, { online: user.online });
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
}

// Display all online users
exports.active_users = async (req, res, next) => {
  try {
    const users = await User.find({ online: true });
    // console.log(users);
    if (!users) {
      return res.status(500).json({
        error: err
      });
    }
    // user = users.length;
    // console.log(user);
    res.status(200).json({activeuser: users.length});
  }
  catch (err) {
    return res.status(500).json({
      error: err
    });
  }
}

//Display all the registered users
exports.all_users = (req, res, next) => {
  User.find()
    .select("id name  email image blocked")
    .exec()
    .then(docs => {
      const response = {
        users: docs.map(doc => {
          return {
            id:doc._id,
            name: doc.name,
            email: doc.email,
            image: doc.image,
            blocked: doc.blocked
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.total_users = async (req, res, next) => {
  User.find()
  .select("name  email image")
  .exec()
  .then(docs => {
    const response = {
      users: docs.map(doc => {
        return {
          name: doc.name,
          email: doc.email,
          image: doc.image
        };
      })
    };
    console.log(response);
    total=response.users.length;
    console.log(total)
    res.status(200).json({total: total});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};
