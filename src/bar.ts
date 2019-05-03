import { CustomType } from './foo'

export function bar (a: CustomType, b: CustomType[]): CustomType {
  return b.reduce((c, v) => c+=v, a)
}