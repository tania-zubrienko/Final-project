
const getDatesArray = (start, end) => {
    const dates = new Array()
    let currentDate = new Date(start)
    let endDate = new Date(end)

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return dates

}
export default getDatesArray