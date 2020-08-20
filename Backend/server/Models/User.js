const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: [true, 'email cannot be blank.'],
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: [true, 'password cannot be blank.']
    },
    name: {
        type: String,
        required: [true, 'UserName cannot be blank.']
    },
    image:{
        type : String
    },
    friendlist:{
        type:[],
        default: " " /*[string]*/
    },
    sharedfile:
    {
        type:[],
        default: " "
    },
    receivedfile:
    {
        type:[],
        default: " "
    },
    blocked: {
        type: Boolean,
         default: false
        },
        online: {
            type: Boolean,
            default: false
        },
        verified: {
            type: Boolean,
            default: false
        },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
