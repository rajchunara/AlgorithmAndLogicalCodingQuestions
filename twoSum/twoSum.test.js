const twoSum = require('./twoSum');


describe('test twoSum problem of leetCode',()=>{

    it('input 1 ',()=>{
        expect(twoSum([3,2,4],6)).toEqual([1,2])
    })

    it('input 2 ',()=>{
        expect(twoSum([2,7,11,15],9)).toEqual([0,1])
    })

    it('input 3 ',()=>{
        expect(twoSum([3,3],6)).toEqual([0,1])
    })
})