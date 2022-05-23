const Joke = require("../models/joke.model");

module.exports.testResponse = (req,res)=>{
    res.json({message: "whoop there it is"});
}

module.exports.findAllJokes = (req,res)=>{
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
}

module.exports.addNewJoke = (req,res)=>{
    Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
}

module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
    }

module.exports.updateJoke = (req,res)=>{
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
}

module.exports.getRandomJoke = (req,res)=>{
    Joke.aggregate(
        [ { $sample: { size: 1 } } ]
    )
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"no good", err}))
}