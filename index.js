console.log('Finding legitimately with streams');

import { range } from "rxjs";
import { map } from "rxjs/operators";

const isEven = function(n) {
  return n % 2 === 0;
};
const isDivisibleByThree = function(n) {
  return n % 3 === 0;
};
const isDivisibleByTwoAndThree = function(n) {
  return isDivisibleByThree(n) && isEven(n);
};
const input$ = range(1, 100);

input$
  .pipe(
    map(v => {
      if (isDivisibleByTwoAndThree(v))
        return `The number ${v} is divisible by two and three`;
      if (isDivisibleByThree(v))
        return `The number ${v} is divisible by three`;
      if (isEven(v))
        return `The number ${v} is even`;
      return `The number ${v} is odd`;
    })
  )
  .subscribe(output => console.log(output));


console.log('');
console.log('');
console.log('-------------------');
console.log('Output via pattern recognition (AKA: cheating)');

let patterns = ['is odd', 'is even', 'is divisible by three', 'is even', 'is odd', 'is divisible by two and three'];
for (var i = 1; i <= 100; i++) {
  if (i > 6) console.log(`The number ${i} ${patterns[((i % 6) - 1) >= 0 ? (i % 6) - 1 : 5]}`);
  else console.log(`The number ${i} ${patterns[i - 1]}`);
}