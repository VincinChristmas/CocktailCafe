document.querySelector('.getCocktail').addEventListener('click', getDrink) 
console.log("button clicked")



function getDrink() {
    let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res => res.json())
.then(data => {
    console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
})
.catch(err => {
    console.log('error', err);
});
}
