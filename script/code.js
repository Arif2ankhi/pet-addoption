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

// Pets 
const loadPets = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=> displayPets(data.pets))
    .catch((error) => console.log(error));
};

const loadCategoryPets= (id) => {
    alert(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res)=>res.json())
    .then((data)=>console.log(data.category))
    .catch((error) => console.log(error));
}

// Const cardDemo = {
//     {
//         petId: 8,
//         breed: "Beagle",
//         category: "Dog",
//         date_of_birth: "2023-03-22",
//         price: 1200,
//         image: "https://i.ibb.co.com/MCDfNqN/pet-8.jpg",
//         pet_details: "Born on March 22, 2023, this female Beagle is curious and loves outdoor adventures. Fully vaccinated, she enjoys playing with children and exploring new places. Priced at $1200, she's a perfect fit for families looking for a playful and affectionate dog.",
//         vaccinated_status: "Fully",
//         pet_name: "Luna"
//     }

    
// }

const displayPets = (pets) =>{
    const petsContainer = document.getElementById('pets')
    
    pets.forEach(pet =>{
        console.log(pet);
        const card = document.createElement('div');
        card.classList = "card card-compact border-2 p-4";
        card.innerHTML= `
        <figure class="h-[200px]">
         <img
      src=${pet.image}
      class="h-full w-full object-cover rounded-md"
      alt="Shoes" />
    </figure>
    <div class="px-0 py-2">
        <h2 class="font-bold text-2xl">${pet.pet_name}</h2>
        <div class="gap-5"
        <p class="text-gray-500"><i class="fa-regular fa-table"></i> Breed: ${pet.breed}</p>
        <p class="text-gray-500"><i class="fa-solid fa-cake-candles"></i>
         Birth : ${pet.date_of_birth?pet.date_of_birth:'Date of Birth not available'}</p>
         <p class="text-gray-500"><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</p>
         <p class="text-gray-500"><i class="fa-regular fa-dollar-sign"></i> Price: ${pet.price}</p>
         <div class="divider"></div>

        <div class="card-action justify between item center space-x-12">
        <i class="fa-regular fa-thumbs-up"></i>
        <button  class="btn">Adopt</button>
        <button class="class="btn bg-[#FFFFFF] text-[#0E7A81]" onclick="loadDetails(${pet.petId})">Details</button>

         </div>
            
  </div>
        `;
        petsContainer.append(card);

    })

};


{/* <button  class="btn bg-[#FFFFFF] text-[#0E7A81]">Details</button></button> */}



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
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML =
        `
        <button onclick="loadCategoryPets(${item.id})"class="btn">
        ${item.category}
        </button>
        `;
        // button.classList = 'btn';
        // button.innerHTML =item.category;
      


        // add button to category container
        categoryContainer.append(buttonContainer);
        
    });
};




loadCategories();
loadPets();

