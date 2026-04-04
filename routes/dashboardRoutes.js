const r=require("express").Router();
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const {summary}=require("../controllers/dashboardController");

r.get("/",auth,role("admin","analyst"),summary);
module.exports=r;
