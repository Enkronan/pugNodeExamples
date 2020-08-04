const pug = require('pug'),
    fs = require('fs')

let data = {
    title: "PRactical Node.js",
    author: {
        twitter: 'Enkronan',
        name: "Robin"
    },
    tags: ['express', 'node', 'javascript']
}

data.body = process.argv[2]

//fs.readFile('email-example.pug', 'utf-8', (error, source) => {
//    let template = pug.compile(source)
//    let html = template(data)
//    console.log(html)
//})

pug.renderFile('email-example.pug', data, (error,html) => {
    console.log(html)
})