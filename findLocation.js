function findLocation() {
    const apartmentNumber = parseInt(document.getElementById("apartmentNumber").value);
    
    if (isNaN(apartmentNumber) || apartmentNumber < 1 || apartmentNumber > 108) {
        document.getElementById("locationResult").innerText = "Тоот 1-ээс 108 хооронд байх ёстой.";
        return;
    }

    const apartmentsPerEntrance = 9 * 4; 
    const apartmentsPerFloor = 4; 

    const entrance = Math.ceil(apartmentNumber / apartmentsPerEntrance);

    const positionInEntrance = apartmentNumber - (entrance - 1) * apartmentsPerEntrance;

    const floor = Math.ceil(positionInEntrance / apartmentsPerFloor);

    const door = positionInEntrance - (floor - 1) * apartmentsPerFloor;

    document.getElementById("locationResult").innerText = 
        `Тоот ${apartmentNumber} нь ${entrance}-р орцны ${floor}-р давхарын ${door}-р хаалга байна.`;
}
