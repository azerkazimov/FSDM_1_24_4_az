const vehicle = {
  move() {
    console.log("moving");
  },
  stop() {
    console.log("stopped");
  },
};

const ship = {
    name: 'Aurora',
    hasWheels: false,
    liftAnchorDown(){
        console.log('lifting anchor down');
    },
    liftAnchorUp(){
        console.log('lifting anchor up');
    },
    __proto__:vehicle
}




ship.move()

for (let prop in ship){
    // console.log(prop); // all methods with inheritanse
    if(ship.hasOwnProperty(prop)){
        console.log(prop); // just ship methods
    }
}

// or for get own properties can use Object.keys
console.log(Object.keys(ship));

