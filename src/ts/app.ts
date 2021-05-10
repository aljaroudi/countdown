const container = document.getElementById('countdown')

const makeCard = (title: string, value: number) => {
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
    const titles = ['seconds', 'minutes', 'hours', 'days', 'weeks'].reverse()
    // reverse the values to display weeks before seconds
    values.reverse();

    for (let i = 0; i < values.length; i++) {
        // Only add values greater than 0
        if (values[i]) container.insertAdjacentHTML("beforeend", makeCard(titles[i], values[i]))
    }
}


const getVals = (target: Date, since: Date = new Date()) => {
    // the absolute value of the difference in seconds
    const delta: number = Math.abs(target.getTime() - since.getTime()) / 1000

    const date = (new Date(delta * 1000) + '').slice(16, 24);

    // console.log(date)

    // const day = Math.floor(delta / (60 * 60 * 24))
    // console.log(day + ' days')

    // seconds to weeks
    const weeks = Math.floor(delta / (60 * 60 * 24 * 7))

    const days = Math.floor((delta % (60 * 60 * 24 * 7)) / (60 * 60 * 24))

    const hours = Math.floor((delta % (60 * 60 * 24)) / (60 * 60 * 24))

    const minutes = Math.floor((delta % (60 * 60)) / 60)

    const seconds = Math.floor((delta % 60))


    setVals([seconds, minutes, hours, days, weeks])
}

setInterval(() => getVals(new Date('May 23, 2021 14:30:00')), 1000)
