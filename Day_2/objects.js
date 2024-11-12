//Objects

let obj = {
    0: 10, "A": 'a', 0: 20,
    arr: [10, 20, 30, {40: '40', 50:'50', nestedArray: ['B', 'C','D', {}] }]
  }
  
  //collection Key value pairs
  obj["A"] = 30
  
  // log(obj)
  
  // log(Object.keys(obj))
  // log(Object.entries(obj))
  
  var obj1 = obj
  obj1.arr[3].nestedArray[0] ='Bee'
  log(obj1)