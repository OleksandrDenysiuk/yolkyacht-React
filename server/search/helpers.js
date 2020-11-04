export const searchScheduleFromOneShipShip = (shipSchedule, departurePortId, destinationPortId) => {
  const schedules = [];
  shipSchedule.forEach(function(item, i) {
    if( item.departurePortId.toString() === departurePortId ) {
      const restOfShip = shipSchedule.slice(i); // If end is omitted, slice extracts to the end of the sequence.
      const possibleNewSchedule = searchScheduleFromCurrentToDestinationPort(restOfShip, departurePortId, destinationPortId);
      if( possibleNewSchedule && possibleNewSchedule.length > 0 ) {
        schedules.push(possibleNewSchedule);
      }
    }
  });
  return schedules;
}

const searchScheduleFromCurrentToDestinationPort = (shipSchedule, departurePortId, destinationPortId) => {
  for( let i=0 ; i<shipSchedule.length ; i++) {
    if (shipSchedule[i].destinationPortId.toString() === departurePortId) return null;
    if (shipSchedule[i].destinationPortId.toString() === destinationPortId) {
      return shipSchedule.slice(0, i+1);
    }
  }
  return null;
}

/*const partitionShipsOnStart = (ships, departurePortId) => {
  return ships.reduce(([pass, fail], elem) => {
    return elem.departurePortId.toString() === departurePortId ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}*/
