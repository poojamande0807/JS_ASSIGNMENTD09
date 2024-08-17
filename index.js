
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

async function getCategoriesData() {
  try {
    const response = await fetch(`${BASE_URL}filter.php?c=Seafood`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}


async function getIngredientData() {
  try {
    const response = await fetch(`${BASE_URL}filter.php?i=chicken_breast`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

document
  .getElementById("get-category-data")
  .addEventListener("click", getCategoriesData);

document
  .getElementById("get-ingredient-data")
  .addEventListener("click", getIngredientData);
