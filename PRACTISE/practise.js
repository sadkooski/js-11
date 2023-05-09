// const array1 = [6, 2, 1, 8, 10];
// const array2 = [1, 1, 11, 2, 3];

// function sumArray(array) {
//   let highiestNumber = 0;
//   let lowestNumber = 0;

//   array.forEach((number) => {
//     if (number > highiestNumber) {
//       highiestNumber = number;
//       lowestNumber = number;
//     }
//     if (number < lowestNumber) {
//       lowestNumber = number;
//     }
//   });
//   // console.log(highiestNumber);
//   // console.log(lowestNumber);
// }

// console.log(sumArray(array1));

const s = 'The quick brown fox jumps over the lazy dog!';
let newArray = [];

function removeExclamationMarks(s) {
  const chars = s.split('');

  chars.forEach((element) => {
    if (element !== '!') {
      newArray.push(element);
    }
  });
}

removeExclamationMarks(s);
