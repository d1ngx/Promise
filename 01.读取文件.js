//需求：封装一个方法   读取指定路径文件内容

const fs = require('fs')
const path = require('path')

//普通方式
/*
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr) => {
    if(err) throw err
    console.log(dataStr)
})*/

//目的：给定路径，返回内容
//规定callback2个参数，返回结果位于第2个位置
function getFileByPath(fpath,callback) {
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return callback(err)
        //return dataStr
        callback(null,dataStr)                   //回调为什么这么写？
    })
}

/*
var result = getFileByPath(path.join(__dirname,'./files/1.txt'))
console.log(result)*/
getFileByPath(path.join(__dirname,'./files/12.txt'),(err,dataStr) =>{
    if(err) return console.log(err.message)
    console.log(dataStr)
})