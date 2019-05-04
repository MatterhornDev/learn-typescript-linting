export type CustomType = number

export function foo(x: CustomType, y: CustomType): string {
  const z = x ** y
  return `${x} ** ${y} = ${z}`
}
