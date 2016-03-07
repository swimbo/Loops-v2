var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// // example:
// rat
// cat
// butterfly
// marmot
// ocelot

// Solution:

// for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}

// md rat cat butterfly marmot
for(var i = 0; i < animals.length - 1; i++){
  console.log(animals[i]);
}

// md rat butterfly ocelot
for(var i = 0; i <= animals.length; i += 2){
  console.log(animals[i]);
}
// md ocelot marmot butterfly cat rat
for(var i = animals.length; i > -1; i--){
  console.log(animals[i]);
}
// md rat cat cat butterfly butterfly marmot marmot ocelot
for(var i = 0; i <= animals.length; i++){
  if( i > 0 && i < animals.length - 1){
    console.log(animals[i])
    console.log(animals[i])
}
  else{
    console.log(animals[i])
  }
}
