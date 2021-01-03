const User = require("../../models/userModel");
let data = User.findOne({userID: message.author.id});

const userData = async => {
    if(!data) {
        await User.create({userID: message.author.id})
    }
}


module.exports = { userData };