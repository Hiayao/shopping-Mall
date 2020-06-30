//模块化
// export default 只能导出一次
// export 可以导出多次

export default {

// 做浏览记录
addViews(item){
//判断本地有没有最近浏览的数组
if(!localStorage.views){
    let see = []
    see.push(item)
    localStorage.setItem('views', JSON.stringify(see))
} else{
    let see = JSON.parse(localStorage.views)
    see.push(item)
    localStorage.setItem('views', JSON.stringify(see))
}
}
}