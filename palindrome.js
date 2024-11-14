function checkPalindrome() {
    const number = document.getElementById("numberInput").value;
    const sum = getDigitSum(number);

    if (isPalindrome(sum)) {
        document.getElementById("result").innerText = `Цифрүүдийн нийлбэр болох ${sum} нь палиндром мөн.`;
    } else {
        document.getElementById("result").innerText = `Цифрүүдийн нийлбэр болох ${sum} нь палиндром биш.`;
    }
}

function getDigitSum(num) {
    return String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

function isPalindrome(num) {
    const str = String(num);
    return str === str.split('').reverse().join('');
}
