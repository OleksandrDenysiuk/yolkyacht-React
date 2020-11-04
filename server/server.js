import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import logger from './utils/logger';
import testDataLoader from "./modules/testdata/testDataLoader";
import dbConnection from "./modules/database/dbConnection";
import path from "path";
import User from "./models/User";
import Port from "./models/Port";
import Route from './models/Route';
import QuoteRequest from './models/QuoteRequest';
import userRoutes from "./routes/api/userRouter";
import portRoutes from  "./routes/api/portRouter";
import shipRoutes from "./routes/api/scheduleRouter";
import emailRoutes from './routes/api/emailRouter';
import sendGridMailer from './modules/mailer/sendGridMailer';


logger.info('Starting Allied Yacht application...');
console.log('Starting Allied Yacht application...');
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
logger.info(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
logger.info('Server. process.env: ', process.env);
console.log('Server. process.env: ', process.env);
console.log(`Server. process.env.NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Server. process.env.PORT: ${process.env.PORT}`);
const runningMode = process.env.NODE_ENV || 'Dev';
console.log("runningMode: ",runningMode);
dbConnection(runningMode)
  .then(async () => {
    if( runningMode === 'Dev' || runningMode === 'Docker-Local-Dev' || runningMode === 'Docker-Heroku-Dev' ) {
      await testDataLoader();
    } else {
      logger.info("Do not load test data as it's Prod mode");
      console.log("Do not load test data as it's Prod mode");
    }
  });

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Initialize routes
const userRouter = userRoutes(User);
const portRouter = portRoutes(Port);
const scheduleRouter = shipRoutes(Route);
// construct application mailer
const sendgridApiKey = require("./config/sendgrid.env.js").SENDGRID_API_KEY;
const mailer = sendGridMailer(sendgridApiKey);
const emailRouter = emailRoutes(mailer, QuoteRequest);

app.use("/api/users", userRouter);
app.use("/api/ports", portRouter);
app.use("/api/schedules", scheduleRouter);
app.use("/api/emails", emailRouter);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

/*app.use(express.static(path.join(__dirname, "../client-web", "build")));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client-web/build')));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../client-web/build/' });
  })
}


//build mode
app.get('*', (req, res) => {
  res.sendFile('index.html', '../client-web/public/');
})
*/
if( runningMode === "Docker-Google-Dev" || runningMode === "Docker-Google-Prod" || runningMode === "Docker-Local-Dev" || runningMode === "Prod" ) {
  app.use(express.static(__dirname + '/public'));
  app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/public'});
  })
} else {
  app.use(express.static(path.join(__dirname, "../client-web", "build")));
}

app.server = app.listen(port, () => console.log(`Server up and running on port ${port} !`));

export default app;
