const fs = require("fs")
const path = require('path')
const datafile = path.join(path.dirname(__filename), 'data.json')
const data = JSON.parse(fs.readFileSync(datafile, "utf-8"))

function convert(key) {
  if (typeof key === "number") {
    return data.val2name[key.toString()];
  } else if (!Number.isNaN(parseInt(key))) {
    return data.val2name[key];
  }
  key = key.toUpperCase();
  var val = data.name2val[key];
  if (typeof(val) === 'undefined') {
    val = data.name2val["KEYCODE_" + key];
    if(val === undefined){
      return undefined
    }
  }
  return parseInt(val);
}


module.exports = convert