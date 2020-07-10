import '@babel/polyfill'

let a = [10, 11, 12]

let arr = a.map(n => n + 1)
console.log('ARR=' + arr)
console.log('includes=' + (a.includes(10)))
function f (...args) {
  console.log('...ARGS=' + args)
}
function f1 (ms1=1000,ms2=2000) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('down')
    }, ms1)
    window.setTimeout(() => {
      reject('fail')
    }, ms2)
  })
}

async function f2 () {
  let resource = await f1()
  return resource
}

f(a, 5, 6)
f1(3000).then(data => {
  console.log('f1-finish=' + data)
}).catch(data=>{
  console.log('f1-finish=' + data)
})
f2(1000).then(data => {
  console.log('f2-finish='+data)
})