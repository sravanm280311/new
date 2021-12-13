// ARRAY FOR
// const birds = ["crow", "hen", "parrot"];
// for (let bird of birds) {
//   console.log(bird);
// }

// ARRAY MAP
// function double(num) {
//   return num * 2;
// }
// let number = [2, 4, 7];
// let doubled = number.map(double);
// console.log(doubled);

// Filter

// function islong(city) {
//   return city.length > 8;
// }

// const city = ["liverpool", "manchester", "london", "tonten"];
// const longer = city.filter(islong);
// console.log(longer);
// let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// let myarray = myData.split(",");
// myarray[0];
// let myNewString = myarray.join(",");
// console.log(myNewString);
// let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// dogNames.toString();
// console.log(dogNames);

// Ternary operator
function getfee(ismember) {
  return ismember ? "rs.100" : "rs.300";
}
console.log(getfee(true));
console.log(getfee(false));
console.log(getfee(null));
