const r=require("express").Router();
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const c=require("../controllers/recordController");

r.post("/",auth,role("admin"),c.create);
r.get("/",auth,role("admin","analyst","viewer"),c.get);
r.put("/:id",auth,role("admin"),c.update);
r.delete("/:id",auth,role("admin"),c.delete);

module.exports=r;
