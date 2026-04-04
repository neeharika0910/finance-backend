const r=require("express").Router();
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const c=require("../controllers/userController");

r.get("/",auth,role("admin"),c.getUsers);
r.post("/",auth,role("admin"),c.createUser);
r.put("/:id",auth,role("admin"),c.updateUser);
r.delete("/:id",auth,role("admin"),c.deleteUser);

module.exports=r;
