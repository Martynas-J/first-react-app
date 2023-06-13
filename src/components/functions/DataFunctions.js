


export const getTodayDateHandler = () => {
    const date = new Date()
    const todayDate = date.toISOString()
    return todayDate.slice(0, 10)
}


