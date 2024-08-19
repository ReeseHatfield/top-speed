
let topSpeed = 0.0


const getSpeedElem = () => {
    return document.getElementById("ui-speed-val")
}

const getSpeed = () => {
    curSpeed = getSpeedElem().innerText
    
    return parseFloat(curSpeed)
}

const updateSpeed = () => {
    const curSpeed = getSpeed()

    if (curSpeed > topSpeed) {
        topSpeed = curSpeed

        const topSpeedElem = document.getElementById("ui-top-speed-val")
        if (topSpeedElem) {
            topSpeedElem.innerText = topSpeed
        } else {
            getSpeedElem().insertAdjacentHTML(
                "afterend",
                `<span id="ui-top-speed-val" class="ui-stat-val">${topSpeed}</span>`
            )
        }
    }
}
const tickSpeed = 100

setInterval(updateSpeed, tickSpeed)