//模块化
// export default 只能导出一次
// export 可以导出多次

// import Vue from 'vue'

export default {

addView(item){
//判断本地有没有最近浏览的数组
if(!localStorage.views){
    let see = []
    see.push(item)
    localStorage.setItem('views', JSON.stringify(see))
} else{
    let see = localStorage.views
    see.push(item)
    localStorage.setItem('views', JSON.stringify(see))
}
}
}