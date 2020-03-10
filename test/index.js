const expect = require("chai").expect
const keycode = require("../index.js")
describe("convert bewteen key and value ", function(){

    it("66", function(){
        expect(keycode(66)).to.be.equal('KEYCODE_ENTER')
    })    
    it("'66'", function(){
        expect(keycode('66')).to.be.equal('KEYCODE_ENTER')
    }) 
    it("999", function(){
        expect(keycode('999')).to.be.equal(undefined)
    }) 
    
    it("search", function(){
        expect(keycode('search')).to.be.equal('84')
    })

    it("keycode_search", function(){
        expect(keycode('keycode_search')).to.be.equal('84')
    })

    it("KEYCODE_SEARCH", function(){
        expect(keycode('KEYCODE_SEARCH')).to.be.equal('84')
    })

})