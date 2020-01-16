/**
 * 能发送异步ajax请求的函数模块
 */
import axios from 'axios'
import {message} from 'antd'

export default function ajax (url,data={},type='GET'){

    return new Promise((resolve,rejict) => {
        let promise
        // 执行异步ajax请求
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        //如果成功了，调用resolve(value)
        promise.then(response => {
            resolve(response)
            // 如果失败了，不调用reject(reason),而是提示异常信息
        }).catch(error => {
            message.error('请求出错'+error.message)
        })
    })
    
    
    
}


//请求登陆接口
// ajax('http://jx.xuzhixiang.top/ap/api/login.php',{username:'admin001',password:'admin@12138'},'POST').then()