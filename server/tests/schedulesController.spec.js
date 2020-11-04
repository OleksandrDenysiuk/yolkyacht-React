import schedulesController from"../controllers/schedulesController";

function Ship () { this.agregate = () => {}}

describe('Schedules Controller tests:', () => {

  describe('getSchedules', () => {

    it('should not allow empty departurePortId on POST', () => {


      const req = {
        body: {
          departurePortId: '',
          destinationPortId: '002'
        }
      }

      const res = {
        status: () => {},
        send: () => {},
        json: () => {}
      }
      const statusSpy = jest.spyOn(res, 'status');
      const jsonSpy = jest.spyOn(res, 'json');

      const controller = schedulesController(Ship);
      controller.getSchedules(req, res);
      expect(statusSpy).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({departurePortId:'Departure Port is required'});
    })

    it('should not allow empty destinationPortId on POST', () => {

      const req = {
        body: {
          departurePortId: '001',
          destinationPortId: ''
        }
      }

      const res = {
        status: () => {},
        send: () => {},
        json: () => {}
      }
      const statusSpy = jest.spyOn(res, 'status');
      const jsonSpy = jest.spyOn(res, 'json');

      const controller = schedulesController(Ship);
      controller.getSchedules(req, res);
      expect(statusSpy).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({destinationPortId:'Destination Port is required'});
    })

    it('should not allow empty both departurePortId and destinationPortId on POST', () => {

      const req = {
        body: {
          departurePortId: '',
          destinationPortId: ''
        }
      }

      const res = {
        status: () => {},
        send: () => {},
        json: () => {}
      }
      const statusSpy = jest.spyOn(res, 'status');
      const jsonSpy = jest.spyOn(res, 'json');

      const controller = schedulesController(Ship);
      controller.getSchedules(req, res);
      expect(statusSpy).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({departurePortId:'Departure Port is required', destinationPortId:'Destination Port is required'});
    })

  })

})

