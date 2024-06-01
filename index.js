const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
  //add
const add= (num1,num2) => {
    return num1+num2;
}
app.get("/add", (req,res)=>{
    try{
    const num1= parseFloat(req.query.num1);
    const num2=parseFloat(req.query.num2);
    if(isNaN(num1)) {
        logger.error("num1 is incorrectly defined");
        throw new Error("num1 incorrectly defined");
    }
    if(isNaN(num2)) {
        logger.error("num2 is incorrectly defined");
        throw new Error("num2 incorrectly defined");
    }
    
    logger.info('Parameters '+num1+' and '+num2+' received for addition');
    const result = add(num1,num2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

//sub
const subtraction= (num1,num2) => {
  return num1-num2;
}
app.get("/subtraction", (req,res)=>{
  try{
  const num1= parseFloat(req.query.num1);
  const num2=parseFloat(req.query.num2);
  if(isNaN(num1)) {
      logger.error("num1 is incorrectly defined");
      throw new Error("num1 incorrectly defined");
  }
  if(isNaN(num2)) {
      logger.error("num2 is incorrectly defined");
      throw new Error("num2 incorrectly defined");
  }
  
  logger.info('Parameters '+num1+' and '+num2+' received for subtraction');
  const result = subtraction(num1,num2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
//multiplication
const multiply= (num1,num2) => {
  return num1*num2;
}
app.get("/multiply", (req,res)=>{
  try{
  const num1= parseFloat(req.query.num1);
  const num2=parseFloat(req.query.num2);
  if(isNaN(num1)) {
      logger.error("num1 is incorrectly defined");
      throw new Error("num1 incorrectly defined");
  }
  if(isNaN(num2)) {
      logger.error("num2 is incorrectly defined");
      throw new Error("num2 incorrectly defined");
  }
  
  logger.info('Parameters '+num1+' and '+num2+' received for multiplication');
  const result = multiply(num1,num2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
//division
const division= (num1,num2) => {
  return num1/num2;
}
app.get("/division", (req,res)=>{
  try{
  const num1= parseFloat(req.query.num1);
  const num2=parseFloat(req.query.num2);
  if(isNaN(num1)) {
      logger.error("num1 is incorrectly defined");
      throw new Error("num1 incorrectly defined");
  }
  if(isNaN(num2)) {
      logger.error("num2 is incorrectly defined");
      throw new Error("num2 incorrectly defined");
  }
  
  logger.info('Parameters '+num1+' and '+num2+' received for division');
  const result = division(num1,num2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port"+port);
})

