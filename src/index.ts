import { CustomType, foo } from './foo'
import { bar } from './bar'

const a: CustomType = 10
const b: CustomType[] = [1, 3, 5, 7, 9]
const x: CustomType = 2
const y: CustomType = 8

console.log(foo(x, y))
console.log(bar(a, b))