/* 
- generics. call signatures 등 이때까지 배운 것을 활용하여 아래 함수를 구현하세요.
- last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
- prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
*/

type Las = <T>(arr: T[]) => T
type Pre = <T>(arr:T[], item:T) => T[]

const last: Las = (arr) => {
    return arr[arr.length-1]
}

const prepend: Pre = (arr, item) => {
    arr.unshift(item)
    return arr
}

const ex = [1,2,3,4,5]
const ex2 = 1

console.log(last(ex))
console.log(prepend(ex,ex2))