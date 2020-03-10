const { JSDOM } = require('jsdom')
const fs = require('fs')

const html = fs.readFileSync('./KeyEvent.html', 'utf-8')
const dom = new JSDOM(html)
const document = dom.window.document

const apinames = document.querySelectorAll('.api-name')
var items = []
for(var apiname of apinames){
    items.push(apiname.parentElement)
}

const data = {
    nv: [],
    name2val:{},
    val2name: {}
}

for(var i = 0; i < items.length; i++){
    var item = items[i]
    var name = item.querySelector('.api-name').textContent
    var pArray = item.querySelectorAll('p')
    var str = pArray[pArray.length - 1].textContent
    var matched = str.match(/ *([0-9].*)\n/)
    if(matched != null){
        var val = matched[1]
        console.log(i, name, val)
        data.nv.push({name, val})
        data.name2val[name] = val
        data.val2name[val] = name

    }else{
        console.log(`unmatched!`,i, str)
    }
}

var dataStr = JSON.stringify(data)
fs.writeFileSync('./data.json',dataStr,'utf-8')
