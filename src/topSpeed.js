
let topSpeed = 0.0


const getSpeedElem = () => {
    return document.getElementById("ui-speed-val")
}

const getSpeed = () => {
    const curSpeed = getSpeedElem().innerText

    const speedNum = parseFloat(curSpeed)

    return speedNum.toFixed(1)
}

const updateSpeed = () => {
    const curSpeed = getSpeed()

    if (curSpeed < topSpeed) {
        return
    }

    topSpeed = curSpeed

    const topSpeedElem = document.getElementById("ui-top-speed-val")
    if (topSpeedElem) {
        topSpeedElem.innerText = topSpeed
        return
    }
    
}

const createTopSpeedElem = () => {
    const speedElem = getSpeedElem();
    const topSpeedElem = document.createElement("span");

    topSpeedElem.id = "ui-top-speed-val";
    topSpeedElem.className = "ui-stat-val";
    topSpeedElem.innerText = topSpeed;
    speedElem.after(topSpeedElem);
};

const tickSpeed = 100

createTopSpeedElem()
setInterval(updateSpeed, tickSpeed)