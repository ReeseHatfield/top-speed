
let topSpeed = 0.0


const getSpeedElem = () => {
    return document.getElementById("ui-speed-val")
}

const getSpeed = () => {
    const speedElem = getSpeedElem();
    if (!speedElem) {
        console.error("Speed element not found!");
        return 0; 
    }

    const curSpeed = speedElem.innerText;
    const speedNum = parseFloat(curSpeed);
    return speedNum
};


const humanizeSpeed = (num) => {
    let str = num.toString()

    if(!str.includes(".")){
        str = str.concat(".0")
    }

    return str
}

const createSpeedElem = () => {
    topSpeedElem = document.createElement("span");
    topSpeedElem.id = "ui-top-speed-val";
    topSpeedElem.className = "ui-stat-val";
    topSpeedElem.textContent = humanizeSpeed(topSpeed);
}

const updateSpeed = () => {
    const curSpeed = getSpeed();

    if (curSpeed < topSpeed) {
        return;
    }

    topSpeed = curSpeed;

    let topSpeedElem = document.getElementById("ui-top-speed-val");

    if (!topSpeedElem) {
        topSpeedElem = createSpeedElem()

        const speedElem = getSpeedElem();
        speedElem.parentNode.insertBefore(topSpeedElem, speedElem.nextSibling);
    }

    topSpeedElem.innerText = humanizeSpeed(topSpeed);

};

const tickSpeed = 100

setInterval(updateSpeed, tickSpeed)
