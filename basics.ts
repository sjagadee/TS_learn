function add(n1: number, n2: number, showResult: boolean, output: string) {
    if(showResult) {
        const result = n1+n2;
        console.log(output+result);
    } else {
        return n1+n2;
    }
    
}

const num1 = 5;
const num2 = 5.9;
const printResult = true;
const output = "Output";


const val = add(num1, num2, printResult, output);
console.log(val);