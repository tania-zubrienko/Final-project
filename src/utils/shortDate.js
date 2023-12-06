const shortDate = date => {
    
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month].join('/')
}


export default shortDate