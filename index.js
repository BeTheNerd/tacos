const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'};


const tacos = [taco, taco1, taco2]





// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"

const changeName = (id, name) => {
  let newTacos = tacos.map(taco => {
    if (taco.id == id) {
    return  taco = {...taco,name:'changed'}  
    } 
    else {
    return  taco
    }
  })
  return newTacos

}

console.log(changeName(2))


// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically) WORKS!!

const tellTaco = ({name, about}) => `This taco is a ${name} and it's ${about}`

console.log(tellTaco(taco2))



// write a function that takes an tacoOBJ and return formatted price with

// .00  FINISHED!

const readTacoHtml = (arr) => {
    tocoHtml = arr.map((item) => {
      console.log([`${item.name} $${item.price}.00 ${item.about}`]);
    });
  };
  
  console.log(readTacoHtml(tacos));
  

// create a new array where all of the prices is formatted with .00 FINISHED!!

const newFormat = () => (
  taco.price.toFixed(2)
);

console.log(newFormat(taco2))


// write a function that takes an array and logs each item in the array

// hint forEach FINISHED!

  const logTacos = (arr) => {
    tocoSet = arr.map((item) => {
      console.log(item);
    });
  };
    
  logTacos(tacos);
    




// use the find method to return the object with id:1

const findTacos = (id) => {
  return tacos.find(taco => taco.id == id )
}

console.log(findTacos(2))


// return a new array with all prices greater than 19

const expensiveTaco = () => {
  let expensiveTacos = tacos.filter(taco => taco.price > 19 )
  return expensiveTacos
}

console.log(expensiveTaco())



// return a new array with a 'about' key where it is a combo of 

// name price and about FINISHED

const aboutTaco = () => {
  return tacos.map((taco) => {
    return  {...taco, about: `${taco.name}, $${taco.price}, ${taco.about}`};
  });
};

console.log(aboutTaco());



///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) ????

const readTacoHtml = (arr) => {
  tocoHtml = arr.map((item) => {
    console.log([`${item.name} $${item.price}. ${item.about}`]);
  });
};

console.log(readTacoHtml(tacos));

// Update (update a taco) 

const updateTaco = (taco) => {
  let newName = 'Torchy'
return {id: taco.id, name: newName, price: taco.price, about: taco.about}}

const newTacoName = updateTaco(taco1)
console.log(newTacoName)



// Remove (delete a taco) FINISHED!!

const deleteTaco = (id) => tacos.filter
((t) => t.id !== id)

console.log(deleteTaco(1))

// Create (add a taco) FINISHED!

// const newtaco = {id:4, name:'texan', price:600, about:'it has meat'}

const createTaco = (taco) => {
  let moreTacos = tacos
  moreTacos.push(taco)
  return moreTacos
}

console.log(createTaco(newtaco))
console.log(tacos)




// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own