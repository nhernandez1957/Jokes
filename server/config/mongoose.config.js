const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/JokerAPI",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("sensational:)"))
    .catch(err=>console.log("not sensational:(", err))