import * as Operation from "./module"
// import {multiplication, subtracts} from "./module"
// import add from "./module"
// import add as addTwo from "./module"
// import MonirulDefault from "./module"
// import MonirulDefault, {subtracts, division} from "./module"
// import MonirulDefault, {subtracts, add as addTwo} from "./module"


const add = (input: number, input2:number) : number => {
    return input + input2
}

console.log(Operation.add(12, 34));