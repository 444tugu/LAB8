function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function arrayLCM(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), 1);
}

function findLCM() {
    const input = document.getElementById("numberArray").value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));

    if (numbers.some(isNaN) || numbers.length !== 5) {
        document.getElementById("lcmResult").innerText = 
            "5 тоог зөв оруулна уу (таслалаар тусгаарлан бичнэ үү)";
        return;
    }

    const result = arrayLCM(numbers);
    document.getElementById("lcmResult").innerText = 
        `Хамгийн бага ерөнхий хуваагдагч: ${result}`;
}
