import express from "express";
const router = express.Router();
import usersController from "../../controllers/usersController";

export default function userRoutes(User) {
    const userRouter = express.Router();

    const controller = usersController(User);

    // @route POST api/users/register
    // @desc Register user
    // @access Public
    userRouter.post("/register", controller.postRegister);

    // @route POST api/users/login
    // @desc Login user and return JWT token
    // @access Public
    userRouter.post("/login", controller.postLogin);

    return userRouter;
}
