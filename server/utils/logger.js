import Logger from "logdna";
import { logDNAIntegrationKey } from "../config/keys";

const mode = process.env.NODE_ENV || 'Dev';
const hostName = mode === 'production' ? 'Heroku' : 'Laptop';

const logger = Logger.createLogger(logDNAIntegrationKey, {hostname: hostName, app: 'Allied Yacht'});

export default logger;
