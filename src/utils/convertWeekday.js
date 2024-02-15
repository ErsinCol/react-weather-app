export function convertWeekday(date){
    return new Date(date * 1000).toLocaleDateString("en", {weekday: "long"}).slice(0,3)
}