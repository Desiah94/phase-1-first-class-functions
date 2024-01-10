function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // Example usage
  function myCallback() {
    console.log("Callback function is called!");
  }
  
  receivesAFunction(myCallback);

  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("Named function is returned!");
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Anonymous function is returned!");
    }
  }
  
  // Example usage
  const myFunction = returnsAnAnonymousFunction();
  myFunction();