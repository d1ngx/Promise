const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath,'utf-8',(err,dataStr) =>{

            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}

//注意：通过 .then 指定回调函数，成功的回调函数必须传，失败的可以省略
//错误示范
/*
getFileByPath('./files/1.txt')
    .then(function (data) {
        console.log(data + '-----')

        getFileByPath('./files/2.txt')
            .then(function (data) {
                console.log(data + '-----')

                getFileByPath('./files/3.txt')
                    .then(function (data) {
                        console.log(data + '-----')
                    })
            })
    })*/

//上一个 .then 中，返回新的 promise 实例，可以继续用下一个 .then 处理


//需求一：如果不想让前一个 Promise 失败阻止后续操作，可以为每一个 Promise 指定失败回调
getFileByPath('./files/1.txt')
    .then(function (data) {
    console.log(data)

    return getFileByPath('./files/22.txt')
})
    .then(function (data) {
    console.log(data)

    return getFileByPath('./files/3.txt')
})
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log('这是自己的处理方式：' + err.message)
    })

console.log('OK')

//需求二：一旦有报错，立即终止 .then 执行