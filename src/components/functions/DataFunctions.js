


export const getFormedDate = (item) => {
    let date = new Date() 
    if (item) {
        date = new Date(item) 
    }
    const todayDate = date.toISOString()
    return todayDate.slice(0, 10)
}


