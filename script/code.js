console.log('coding');

//  categories 

// create categories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
    .catch((error) => console.log(error));
}

// {
//     {
//         "id": 1,
//         "category": "Cat",
//         "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//     }
// }

// display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {
        console.log(item);
        // create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerHTML =item.category;

        // add button to category container
        categoryContainer.append(button);
        
    });
};




loadCategories();