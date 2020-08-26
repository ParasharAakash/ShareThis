const User = require("../Models/User");

// Add to friend List
exports.add_Friend = async (req, res, next) => {
  try {
    const from = await User.findById(req.userData.id)
    const to = await User.findById(req.params.id)

    if (!from || !to) {
      return res.status(404).json({
        message: "No User Exists"
      });
    }

    //Check if both are friends previously or not
    const found = from.friendList.includes(req.params.id)
    if (found) {
      return res.status(403).json({
        message: "Friend exists"
    })
  }

    from.friendList.push({friendId : req.params.id})
    to.friendList.push({friendId : req.userData.id})

    await User.findByIdAndUpdate(req.userData.id, {
      friendList: from.friendList
    })
    await User.findByIdAndUpdate(req.params.id, {
      friendList: to.friendList
    })
    res.status(200).json({ msg: "Added to friendlist" })
  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
}

// Get Friend List
exports.Friends = async (req, res, next) => {
  try {
    const populate = [{ path: "friendList.friendId", select: 'id email name image'}];    
    // console.log(req.userData.id);
    const user = await User.findById(req.userData.id).populate(populate);
    
    console.log(user);

    if (!user) {
      return res.status(404).json({
        message: "No User Exists"
      });
    }
    res.status(200).json({friendlist: user.friendList})
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}