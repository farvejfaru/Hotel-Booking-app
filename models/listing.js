const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
            "https://images.unsplash.com/photo-1716667282954-156026ff671c?q=80&w=2252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: function(v) {
            if (v === "") {
                return "https://images.unsplash.com/photo-1716667282954-156026ff671c?q=80&w=2252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            }
            // If v is an object with a url property, use that
            if (typeof v === 'object' && v.url) {
                return v.url;
            }
            // Otherwise return v as is
            return v;
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;