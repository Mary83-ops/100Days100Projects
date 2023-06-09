const mealBtn = document.getElementById("get-meal");
const meal_el = document.getElementById("meal");

mealBtn.addEventListener('click', () => {

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0]);
    })
    .catch(error => {
        console.log('Error:', error);
    });
});

function createMeal(meal) {
    const ingredients = [];
    for(let i=1; i<=20; i++) {
        if(meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    meal_el.innerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				<p><strong>Category:</strong> ${meal.strCategory}</p>
				<p><strong>Area:</strong> ${meal.strArea}</p>
				<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
	
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>
	`;
	
	meal_container.innerHTML = newInnerHTML;
}