//1，Promise 是一个构造函数，因此可以使用 new 创建
//2. Promise内部有 reject（失败之后的回调） 和 resolve（成功之后的回调） 2个函数
//3. Promise 构造函数的Prototype 属性上，有一个 .then() 方法
//4. Promise 表示一个异步操作
//5. 异步操作结果只有两种状态：
//  5.1 异步执行成功，resolve将结果返回调用者
//  5.2 异步执行失败
//  5.3 Promise的实例是异步，内部拿到操作结果 无法使用return 返回给调用者；只能使用回调函数的形式返回
//6. 使用 Promise 的.then方法，【预先】指定 成功（resolve）和 失败（reject） 回调函数

//注意：new 出来的 Promise ,知识【形式上】的一个异步操作
//var promise = new Promise()

/*
var promise = new Promise(function () {
    //内部是具体的异步操作
})*/

const fs = require('fs')

//每 new 一个 Promise 实例，就会立即执行这个异步操作中的代码
/*var promise = new Promise(function () {
    fs.readFile('./files/2.txt','utf-8',(err,dataStr) =>{
        if(err) throw err
        console.log((dataStr))
    })
})*/

//初衷：返回指定路径的内容
function getFileByPath(fpath) {
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath,'utf-8',(err,dataStr) =>{
            /*if(err) throw err
            console.log((dataStr))*/

            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}

getFileByPath('./files/2.txt')
    .then(function (data) {
    console.log(data + '-----')
},function (err) {
    console.log(err.message)
})