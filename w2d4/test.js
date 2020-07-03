"use strict"
describe("String Filter",()=>{

    it("Filter \'This house is not nice!\' by [not] is This house is nice!",()=>{
        assert.equal("This house is not nice!".filter("not"),"This house is nice!"); 
    });
    it("Filter \'This house is not nice!\' by [not,house] is This is nice!",()=>{
        assert.equal("This house is not nice!".filter("not","house"),"This is nice!")
    });

});

describe("Bubble Sort Array",()=>{
    it("Sort [4,9,0, 3,-2,1] by bubbleSort is [-2,0,1,3,4,9]",()=>{
        assert.deepEqual([9,4,0, 3,-2,1].bubbleSort(),[-2,0,1,3,4,9]);
    });
    it("Sort [-4,5,2,-2] by bubbleSort is [-4,-2,2,5]",()=>{
        assert.deepEqual([-4,5,2,-2].bubbleSort(),[-4,-2,2,5]);
    });
});

describe("Person Teacher Inheritance",()=>{
    it("Simple Teacher Test",()=>{
        assert.equal(new Teacher("EL MAACHI",23).teach("WAP"),"EL MAACHI is now teaching WAP");
    });

});
