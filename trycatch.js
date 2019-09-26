//Spelling, syntax, forgetting

//Tax system
const taxAmount = 0.14975;
let price = 0;

price = 22.99;
console.log(price+price*taxAmount)

try{
  taxAmount = 0.10;
}
catch(error){
  console.log(error.message)
  console.log("Prices are still calculated with tax amount: "+taxAmount)
}
finally{
  price = 19.99
  console.log(price + price * taxAmount)
}

console.log("So that's the prices !")



const refrigerator = {
  "🍕": { quantity: 20 },
  "🥐": { quantity: 20 },
  "🥟": { quantity: 20 },
  "🍦": { quantity: 20 },
  "🍺": { quantity: 20 },
  "🍌":{quantity:20}
}

//Soft ice cream dumplings 1 icecreams for 5 dumplings

const softIceDumplings = () => {
  refrigerator["🍦"].quantity -= 1
  refrigerator["🥟"].quantity -= 5
  console.log("🥟🍦 done ! ")
}

softIceDumplings()
console.log(refrigerator)


const softIceDumplingsWithShrimp = () => {
  for (const ingredient of ["🥟","🍦","🍤"]){
    try{
      refrigerator[ingredient].quantity > 0
    }
    catch(e){
      return new Error ("Ingredient is missing in the fridge")
    }
  }
  refrigerator["🍦"].quantity -= 1
  refrigerator["🥟"].quantity -= 5
  refrigerator["🍤"].quantity -= 1

  return "🥟🍦🍤 done ! "
}
console.log(softIceDumplingsWithShrimp())
console.log(refrigerator)

const slowDumpling = () => {
  setTimeout( () => {
    refrigerator["🍤"].quantity -= 1
  },2000)
}

try{
  slowDumpling()
}
catch(e){
  console.log(e.message)
}