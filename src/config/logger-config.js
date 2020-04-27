import winston from "winston";
const logs = {};
const buildLoggerByName = (loggerName) => {
  const log = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: loggerName + ".log" }),
    ],
  });
  logs[loggerName] = log;
  return log;
};

const getLogger = (loggerName) => {
  if (logs[loggerName]) return logs[loggerName];
  else return buildLoggerByName(loggerName);
};
export default getLogger;
