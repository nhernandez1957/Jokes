const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = app => {
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/jokes/random", JokeController.getRandomJoke);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.addNewJoke);
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
    app.patch("/api/jokes/update/:_id", JokeController.updateJoke);
}