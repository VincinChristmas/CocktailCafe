



document.querySelector('.theCocktailButtonTop').addEventListener('click', getDrink)

function getDrink() {
    //let drink = document.querySelector('').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(res => res.json()) 
.then(data => {
    console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
}) 
.catch(err => {
    console.log(`error ${err}`)
})
}



