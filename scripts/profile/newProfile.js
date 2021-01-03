const User = require("../../models/userModel.js");

const userData = async(message) => {
    let data = User.findOne({userID: message.author.id});
    if(!data) {
        await User.create({userID: message.author.id})
    }
}


module.exports = { userData };