export default function portsController(Port) {

  function get(req, res) {
    Port.find()
      .then(ports => {
        console.log(`Number of ports found is ${ports.length}`);
        return res.status(200).json(ports);
      })
  }

  return { get };

}
