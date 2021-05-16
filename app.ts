function add(n1: number, n2: number, showResult: boolean) {
    if(showResult) {
        console.log(n1+n2);
    } else {
        return n1+n2;
    }
    
}

const num1 = 5;
const num2 = 5.9;
const printResult = true;
const output = "Output";


const val = add(num1, num2, printResult);
console.log(val);