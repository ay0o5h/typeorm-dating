import * as express from "express";
import UserController from "../controller/user.controller";
import HomeController from "../controller/home.controller";
import otp from "../middleware/otp";
import auth from "../middleware/auth";


const route = express.Router();

/// Not Auth
route.post("/register", UserController.register);
route.post("/otp", otp, UserController.checkOtp);
route.post("/login", UserController.login);

route.post("/forget/password", UserController.forget);
route.post("/verify/password", UserController.verifyPassword);


//  Need Auth
route.use(auth);

route.get("/check", UserController.check);
route.get("/passion", HomeController.getAll);
route.post("/passion", HomeController.addPassion);

export default route;
