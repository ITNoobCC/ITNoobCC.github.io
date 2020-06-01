var cat = require("./js/validation.js");
var assert = require("assert");
describe("One", () =>{
    it('Вызов функции, вернет', () => {
        assert.deepEqual(cat.meow(),'Meow');
    });
});