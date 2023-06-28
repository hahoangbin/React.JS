import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants";   

function logger(log, type = 'log') {
    console.console.log('import class', TYPE_WARN);
}

export default logger