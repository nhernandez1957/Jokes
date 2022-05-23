const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    //types and stuff
    setup: {
        type:String,
        required: [true, "A setup is requied, duh."],
        minlength: [10, "Minimum length for a setup is 10 characters."]},
    punchline: {
        type:String,
        required: [true, "A good setupd requires a puchline."],
        minlength: [3, "Minimum length for a punchline is 3 characters."]}
}, {timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;