export default ()=>{
    let d=new Date()

    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day= d.getDate()

    let hours = d.getHours()
    let mind = d.getMinutes()

    return `${year}年${month}月${day}日 ${hours}:${mind}`
}