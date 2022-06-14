const EventEmitter  = require('events');
const emitter = new EventEmitter();

const Logger= require('./logger');
const logger= new logger();
 
//register a listner himanshu
emitter.on('messagelogged',(arg)=>{
    console.log('Listener called', arg);
});

logger.log('message');



