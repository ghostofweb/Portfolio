var total = 0;
var a = [4,6,2,12];
a.forEach(x => {
   total += x;
});

console.log(total);

const reducer = (acc,current) => acc + current;
console.log(a.reduce(reducer));