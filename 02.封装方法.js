//需求：封装一个方法   读取指定路径文件内容

const fs = require('fs')
const path = require('path')

function getFileByPath(fpath,succCb,errCb) {
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return errCb(err)
        succCb(dataStr)
    })
}

/*
getFileByPath(path.join(__dirname,'./files/1.txt'),function (data) {
    console.log((data + '哇,成功了！'))
},function (err) {
    console.log('失败的结果，使用errCb处理：' + err.message)
})*/

//需求：连续读取 文件1、2、3
//回调地狱
//使用ES6中的 Promise，来解决 回调地狱的问题
//问：Promise 的本质是干什么？ 解决回调地狱   （代码量不一定减少）
getFileByPath(path.join(__dirname,'./files/1.txt'),function (data) {
    console.log(data)

    getFileByPath(path.join(__dirname,'./files/2.txt'),function (data) {
        console.log(data)

        getFileByPath(path.join(__dirname,'./files/3.txt'),function (data) {
            console.log(data)
        })
    })
})
