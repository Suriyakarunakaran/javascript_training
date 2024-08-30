const number = prompt('Enter the number of terms: ');
let t1 = 0, t2 = 1, t3;
for (let i = 1; i <= number; i++) {
    console.log(t1);
    t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
}