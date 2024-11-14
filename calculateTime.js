function calculateTime() {
    const distance = parseFloat(document.getElementById("distanceInput").value);
    const wolfSpeed = 25; 
    const rabbitSpeed = 18; 

    if (isNaN(distance) || distance <= 0) {
        document.getElementById("timeResult").innerText = "Зайг зөв оруулна уу.";
        return;
    }

    const relativeSpeed = wolfSpeed - rabbitSpeed; 
    const timeInHours = distance / relativeSpeed;
    const minutes = Math.floor(timeInHours * 60);
    const seconds = Math.floor((timeInHours * 60 - minutes) * 60);

    document.getElementById("timeResult").innerText = 
        `Чоно туулайг ${minutes} минут ${seconds} секундийн дараа гүйцэх болно.`;
}
