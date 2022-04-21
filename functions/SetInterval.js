module.exports = function SetInterval(msDelay) {
  let delayState = null;

  if(msDelay === 0){
    return 1000;
  }

  if(msDelay === null || msDelay === undefined) {
    console.log("SetInterval: msDelay must be a number.");
    process.exit(400);
  } else {
    return delayState + msDelay;
  }
};