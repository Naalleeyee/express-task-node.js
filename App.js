// [ 2 ]
const express = require("express");
let app = express();
let port = 8000;
app.use(express.json());

// app.get("/home", (req,res)=>{
//     res.send("gettig this port")
// });
// app.post("/look", (req,res)=>{
//     res.send("hey do feeling relax")
// });
// app.put("/eye", (req,res)=>{
//     res.send("thsi time is going")
// });
// app.delete("/legs", (req,res)=>{
//     res.send("bad situestion making you hangry to success")
// });

// [ 3 ]
// app.get("/search",(req,res) =>{
//     res.status(200).json({
//         message : "found user"
//     })
// });

// [ 4 ]
// app.post("/search",(req,res) =>{
//     res.status(200).json({
//         message : "body containg"
//     })
// });

// [ 5 ]
// app.post("/home", (req,res) =>{ 
// if(req.body.username === "" && req.body.password ===""){
//     res.status(200).json({message:"username or password can't be empty"})
// }
// else{

//     res.status(200).json({message:"user created"})
// }
// });

// [ 6 ]
// app.put("/put", (req, res) => {
//     res.status(201).json({
//       message: "username has been updated successfully",
//     });
//   });

// [ 7 ]
// app.delete("/about", (req, res) => {
//     if (req.body.id === "") {
//       res.status(404).json({
//         message: "id cannot be empty",
//       });
//     } else {
//       res.status(201).json({
//         message: "user deleted",
//       });
//     }
//   });  
// app.listen(port);
