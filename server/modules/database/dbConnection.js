import mongoose from "mongoose";
import logger from '../../utils/logger';

export default async function dbConnection(mode) {

  const dbConnector = async (mode) => {
    console.log("Start dbConnector");

    // DB Config
    let workingDBKeys;
    switch (mode) {
      case "Docker-Google-Prod":
        workingDBKeys = require("../../config/keys").mongoURIDockerGoogleProd;
        break;
      case "Docker-Google-Dev":
        workingDBKeys = require("../../config/keys").mongoURIDockerGoogleDev;
        break;
      case "Docker-Heroku-Dev":
        workingDBKeys = require("../../config/keys").mongoURIDockerHerokuDev;
        break;
      case "Docker-Local-Dev":
        workingDBKeys = require("../../config/keys").mongoURIDockerLocalDev;
        break;
      case "Prod":
        workingDBKeys = require("../../config/keys").mongoURIProd;
        break;
      default:
        workingDBKeys = require("../../config/keys").mongoURILocalTest;
        break;
    }

    logger.info(`workingDBKeys: ${workingDBKeys}`);
    console.log(`workingDBKeys: ${workingDBKeys}`);
    await mongoose.connect(workingDBKeys, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
      .then(() => {
        logger.info(`MongoDB successfully connected in ${mode} mode`);
        console.log(`MongoDB successfully connected in ${mode} mode`);
      })
      .catch(err => console.log("Failed to connect to DB: ",err));
  }

  await dbConnector(mode);
}
