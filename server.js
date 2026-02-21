const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// يخدم ملفات الموقع كلها
app.use(express.static(path.join(__dirname,"public")));

/* ===== API Orders ===== */

app.post("/orders",(req,res)=>{
console.log(req.body);

res.json({
message:"Order received ✅"
});

});

/* السيرفر يشتغل */
app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});