const Broma = require("../modelos/modeloBroma");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

module.exports.findAllJokes = (req, res) => {
    Broma.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "couldn't Fetch all jokes , Try Again", error: err}));
};

module.exports.findJokeById = (req, res) => {
    Broma.findById(req.params.id)
        .then(joke => res.json({joke: joke}))
        .catch(err => res.json({message: `couldn't Fetch joke ${req.params.id} , Try Again`, error: err}));
};

module.exports.findJokeRandomly = (req, res) => {
    Broma.countDocuments({})
        .then((count) => {
            Broma.findOne({}).skip(getRandomIntInclusive(0, count - 1))
                .then(joke => res.json({joke: joke}))
        })
        .catch(err => res.json({message: "Couldn't fetch a random joke for you , Try Againss", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Broma.create(req.body)
        .then(joke => res.json({joke: joke}))
        .catch(err => res.json({message: "Couldn't create joke , Try Again", error: err}));
};

module.exports.updateExistingJoke = (req, res) => {
    Broma.updateOne({_id: req.params.id}, req.body, {new: true})
        .then(updatedjoke => res.json({joke: updatedjoke}))
        .catch(err => res.json({message: "Couldn't update joke , Try Again", error: err}));
};

module.exports.deleteExistingJoke = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Couldn't delete joke , Try Again", error: err}));
};