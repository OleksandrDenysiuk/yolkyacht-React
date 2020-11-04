import express from "express";
import schedulesController from '../../controllers/schedulesController';

// @route POST api/schedules/
// @desc get the schedule basing on departurePortId and destinationPortId
// @access Public

export default function shipRoutes(Route) {
  const scheduleRouter = express.Router();

  const controller = schedulesController(Route);

  scheduleRouter.post("/", controller.getSchedules);

  return scheduleRouter;
}

