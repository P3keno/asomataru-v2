const User = require("../../models/userModel.js");

const createnewUser = () => 
{
    const account = 
    {
        userID: message.author.id
    };
    const newUser = new User({
        account,
    });
    newUser.save();
};

let userProfile = await User.findOne({"account.userID": message.author.id});

if(!userProfile) {
    userProfile = await createnewUser();
} 

module.exports = { userProfile, createnewUser };
/*const userData = async(message) => {
    let data = await User.findOne({userID: message.author.id});
    if(!data) {
        await User.create({userID: message.author.id})
    }
}


module.exports = { userData };
*/