const file  = Bun.file("data.txt");

const data = await file.text();

const lines = data.split("\n");

const charDigits: any = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

let sum =  0;

lines.forEach((line) => {
    const newLine = getDigits(line);
    const digits = [];
    for(let i = 0; i < newLine.length; i++){
        if(!isNaN(parseInt(newLine[i]))){
            digits.push(newLine[i]);
        }
    }
    const num = parseInt(digits[0] + "" + digits.at(-1));
    sum += num;
});
console.log(sum)

function getDigits(line: string){
    Object.keys(charDigits).forEach((digit) => {
        line = line.replaceAll(digit, digit[0] + charDigits[digit] + digit.at(-1))
    });
    return line;
}
