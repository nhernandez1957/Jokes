const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(),express.urlencoded({extended:true}));//for POST
const cors = require("cors");
app.use(cors());

// app.get("/api/test",(req,res)=>{
//     res.json({message: "test response here"})
// })
require("./server/config/mongoose.config");
require("./server/routes/joke.routes")(app);

app.listen(port,()=>console.log(`running on port ${port}, we still out here!`));