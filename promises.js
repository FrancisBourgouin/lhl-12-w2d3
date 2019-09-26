const francisPromiseOfFalafels = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let coin = Math.round(Math.random())
      if(coin === 1){
        resolve("YAAAAAY FALAFELS")
      }
      else{
        reject("FRANCIS IS A LIAR WE JUDGE HIM BOOOOO")
      }
    },1000)
  })
}

const griffinsPromiseOfPizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let coin = Math.round(Math.random())
      if (true) {
        resolve("YAAAAAY PIZZA")
      }
      else {
        reject("GRIFFIN IS A LIAR WE JUDGE HIM BOOOOO")
      }
    }, 500)
  })
}

// console.log(francisPromiseOfFalafels())


francisPromiseOfFalafels()
  .then(reaction => console.log(reaction))
  .catch(reaction => griffinsPromiseOfPizza())
  .then(reaction => console.log(reaction))
  .catch(() => console.log("nofood"))
  .finally(() => console.log("That rollercoaster of emotions is finally done."))

// Promise.all([griffinsPromiseOfPizza(), francisPromiseOfFalafels()])
//   .then(values => {
//     console.log(values)
//   })
//   .catch(errors => {
//     console.log(errors)
//   })