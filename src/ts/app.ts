
const container = document.getElementById('countdown')
/**
 *
 *
 * @param {string} title unit of the value
 * @param {number} value value
 * @return {string} HTML Element: div
 */
const makeCard = (title: string, value: number): string => {
    return `
    <div>
        <h3 class="value">${value.toFixed(0)}</h3>
        <h3 class="title">${title}</h3>
    </div>
    `
}

/**
 *
 *
 * @param {number[]} values countdown values
 */
function setVals(values: number[]) {

    container.innerHTML = ''

    // define titles for the values
    const titles = ['seconds', 'minutes', 'hours', 'days'].reverse()
    // reverse the values to display weeks before seconds
    values.reverse();

    for (let i = 0; i < values.length; i++) {
        // Only add values greater than 0
        container.insertAdjacentHTML("beforeend", makeCard(titles[i], values[i]))
    }
}

/**
 *
 *
 * @param {Date} target the date to count down to
 * @param {Date} [since=new Date()] date to compare with, now by default
 * @return {number[]}  the values in order: weeks, days, hr, min, sec
 */
const getVals = (target: Date, since: Date = new Date()): number[] => {
    // the absolute value of the difference in seconds
    const delta: number = Math.abs(target.getTime() - since.getTime()) / 1000

    // const weeks = Math.floor(delta / (60 * 60 * 24 * 7))

    // const days = Math.floor((delta % (60 * 60 * 24 * 7)) / (60 * 60 * 24))

    const days = Math.floor(delta / (60 * 60 * 24))

    const hours = Math.floor((delta % (60 * 60 * 24)) / (60 * 60))

    const minutes = Math.floor((delta % (60 * 60)) / 60)

    const seconds = Math.floor((delta % 60))

    return [seconds, minutes, hours, days]
}

// create a target Date, Pacific Time
const target = new Date('May 23, 2021 14:30:00 GMT-0700')

// Set it for the first time
setVals(getVals(target))

// Set it again every 1000ms (1s)
setInterval(() => setVals(getVals(target)), 1000)


if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
}