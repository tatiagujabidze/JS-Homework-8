// Exercise 1

function expo(number, quality, callback) {
    if (quality === 0) {
      return callback(1);
    }
    
    if (quality === 1) {
      return callback(number);
    }
    
    return expo(number, quality - 1, function(result) {
      return callback(result * number);
    });
  }
  
  expo(7, 2, function(result) {
    console.log(result); 
  });
  

// Exercise 3

function deepCopyObject(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject(new Error('Invalid argument: expected an object.'));
      } else {
        try {
          const copiedObj = JSON.parse(JSON.stringify(obj));
          resolve(copiedObj);
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  const originalObj = {
    name: 'Tatia',
    age: 32,
    address: {
      street: 'Broadway',
      city: 'New York',
    },
  };
  
  deepCopyObject(originalObj)
    .then(copiedObj => {
      console.log('Copied object:', copiedObj);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  