let promiseToCleanTheRoom = new promise(function(resolve, reject){
  // cleaning the room

  let isClean = true;

  if(isClean){
    resolve();
  }else{
    reject();
  }
});

promiseToCleanTheRoom.then(function(fromResolve){
  console.log('the room is' + fromResolve);
}).catch(function(fromReject){
  console.log('the room is' + fromReject);
})
