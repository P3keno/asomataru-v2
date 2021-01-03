const User = require("../../models/userModel");
let data = User.findOne({userID: message.author.id});

if(!data) {
    await User.create({userID: message.author.id})
}

module.exports = { data };