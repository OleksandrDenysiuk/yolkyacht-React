import express from "express";
import portController from '../../controllers/portsController';

// @route POST api/ports/
// @desc gel lists of available Ports
// @access Public

const router = express.Router();

export default function portRoutes(Port) {
  const portRouter = express.Router();

  const controller = portController(Port);

  portRouter.get("/", controller.get);

  return portRouter;
}

