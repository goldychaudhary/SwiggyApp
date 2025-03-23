import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers",()=>{

    const result = sum(5,5)
    //Assertion without this nothing to test
    expect(result).toBe(10)
})