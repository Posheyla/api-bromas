const mongoose = require("mongoose");

const BromaSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Joke Setup is required"],
            minlength: [10, "Joke Setup must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "Joke Punchline is required"],
            minlength: [10, "Joke Punchline must be at least 3 characters long"]
        }
    }, {timestamps: true}
);

const Broma = mongoose.model("Broma", BromaSchema);

module.exports = Broma;