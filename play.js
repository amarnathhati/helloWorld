// let name='Amar';
// let age =24;
// let hasHobbies=true;

// function intro(userName,userAge,hobbies){
//     return('Name is ' + userName + ',age is ' +userAge +',has hobbies: ' + hobbies);
// }
// console.log(intro(name,age,hasHobbies));

// let a=56,b=78;
// function product(entry1,entry2){
//     return(entry1*entry2);
// }

// console.log(product(a,b));

// const product = (a,b) => {
//     return a*b;
// } 
// console.log(product(4,3));


// const arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

// const newArr = arr.map(item => {
//   if (item === ' ') {
//     return 'empty string';
//   } else{
//     return item;
//   }
// });
// console.log(newArr);
// const hobbies=['sports','cooking'];
// console.log(hobbies.map(hobby=> 'Hobby: ' + hobby));
// console.log(hobbies);
// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }
// console.log('a');

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function printSequence() {
//   console.log('b');
//   await delay(3000);
//   console.log('c');
//   console.log('d');
// }

printSequence().then(() => {
  console.log('e');
});
