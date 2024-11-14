function performAction() {
    const inputNumber = document.getElementById("inputNumber").value;
    const number = parseFloat(inputNumber);

    if (isNaN(number)) {
        document.getElementById("actionresult").innerText = "Тоогоо зөв оруулна уу.";
        return;
    }

    const currentHour = new Date().getHours();
    let result;

    if (currentHour >= 0 && currentHour < 12) {
        result = Math.pow(number, 2);
        document.getElementById("actionresult").innerText = `Өглөө байна. ${number}-ийн 2 зэрэг нь: ${result}`;
    } 
    
    else {
        result = Math.sqrt(number);
        document.getElementById("actionresult").innerText = `Орой байна. ${number}-ийн язгуур нь: ${result}`;
    }
}
