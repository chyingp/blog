const defaultStatus = 200;
const defaultCode = 10001;
const defaultMessage = 'server error';

class CustomerError extends Error {
  constructor (message, {code = defaultCode, status = defaultStatus} = {}) {
    super(message);
    this.name = 'CustomerError';
    this.status = status;
    this.code = code;    
    // Object.assign(this, props);
  }
}

function run () {
  const err = new CustomerError('fuck you');
  throw err;  
}

run();