const mongoose = require('mongoose');
const url = 'mongodb+srv://Phattou:tintin123123@cluster0.umzxk6v.mongodb.net/EBOOK-BACKEND?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name: String,
    age: String,
    email: String,
    description: String,
    address: String,
    phone: String,
    avatar: String,
    status: String,
    password: String
},{
    collection: 'author'
});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;

