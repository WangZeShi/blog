/**
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
import ajax from './ajax'

// export function reqLogin (username,password){
//    return ajax('/login',{username,password},'POST')
// }

export const xinxi = () => ajax('http://www.dzxunxi.top/api/motto.php','get')

export const article = () => ajax("http://www.dzxunxi.top/api/article.php","get")

export const latestarticles = () => ajax("http://www.dzxunxi.top/api/LatestArticles.php","get")

export const hotarticle = () => ajax("http://www.dzxunxi.top/api/hotarticle.php","get")

export const showarticle = (id) => ajax("http://www.dzxunxi.top/api/showarticle.php?id="+id,"get")
