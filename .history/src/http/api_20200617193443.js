// 用来封装所有的请求
import service from './index'

export default {
    // 获取首页数据(get)
    recommend(){
        // console.log(res.data)
        return service.get('/recommend')
    },

    // 搜索关键词(get)
    search(){
        return service.get('/search')
    },

    // 分类查询(get)
    // 参数:id:默认分类的id
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 查询获取购物车数据(get)
    getCard(){
        return service.get('/getCard')
    },

    // 购物车加减商品(post)
    // 参数:count: 购物车数量
    //     id: 商品id
    //     mallPrice: 价格
    editCart(){
        return service.post('/editCart',{
            id,
            mallPrice
        })
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },

    // 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },
}