const fetchFridgeContent = (makeRecipe) => {
  const refrigerator = {
    "🍕": { quantity: 20 },
    "🥐": { quantity: 20 },
    "🥟": { quantity: 20 },
    "🍦": { quantity: 20 },
    "🍺": { quantity: 20 },
    "🍌": { quantity: 20 }
  }

  setTimeout( () => makeRecipe(refrigerator), 1500)
}

const cocktailShrimps = (fridgeContent) => {
  if(fridgeContent.hasOwnProperty("🍤")){
    console.log("Cocktail shrimps time !")
  }
  else{
    console.log("So sad, so very very sad.")
  }
}

fetchFridgeContent(cocktailShrimps)