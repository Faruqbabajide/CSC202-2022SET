/* import logger from './tools.js' 
logger("Welcome! We are now having fun with modularity");*/

import log, {appName, dummyFunction} from './tools'; 
log("Welcome to Chapter 10! The application name is " + appName + ". There is a function that returns " + 
dummyFunction()); 