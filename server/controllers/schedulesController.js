import validateShip from "../validation/ship";
import { searchScheduleFromOneShipShip } from "../search/helpers";


export default function schedulesController(Route) {

  function getSchedules(req, res) {
    // Ship data validation
    const { errors, isValid } = validateShip(req.body);
    // Check validation
    if (!isValid) {
      res.status(400);
      res.json(errors);
      return res;
    }
    const shipData = req.body;
    Route.aggregate([
      {
        $lookup:
          {
            from: "ports",
            localField: "departurePortId",
            foreignField: "_id",
            as: "departurePort"
          }
      },
      {
        $lookup:
          {
            from: "ports",
            localField: "destinationPortId",
            foreignField: "_id",
            as: "destinationPort"
          }
      }
    ])
      .then(routes => {
        const startRoutesSortedByArrivalTime = [...routes].sort(comparatorByArrivalOnDateString);
        const schedules = searchScheduleFromOneShipShip(startRoutesSortedByArrivalTime, shipData.departurePortId, shipData.destinationPortId);
        const filteredByMonthSchedules = parseInt(shipData.month) == shipData.month ? filterScheduleByMonth(schedules, parseInt(shipData.month)) : schedules;
        const sortedByStartRouteSchedules = sortRoutesByDates(filteredByMonthSchedules);
        return res.status(200).json(sortedByStartRouteSchedules);
      })
  }

  const filterScheduleByMonth = (schedules, month) => {
    return schedules.filter(function(routes) {
      const arrivalMonth = new Date(routes[routes.length - 1].arrivalOn).getMonth();
      return arrivalMonth === month;
    })
  }

  const sortRoutesByDates = (routes) => {
    const schedulesWithSortedRoutes = routes.map(route => [...route].sort(comparatorByDepartureOnDateString));
    return [...schedulesWithSortedRoutes].sort(comparatorByFirstDepartureOnDateString);
  }

  const comparatorByDepartureOnDateString = (route1, route2) => {
    return new Date(route1.departureOn) - new Date(route2.departureOn);
  }

  const comparatorByArrivalOnDateString = (route1, route2) => {
    return new Date(route1.arrivalOn) - new Date(route2.arrivalOn);
  }

  const comparatorByFirstDepartureOnDateString = (route1, route2) => {
    return new Date(route1[0].departureOn) - new Date(route2[0].departureOn);
  }

  return { getSchedules }
}
