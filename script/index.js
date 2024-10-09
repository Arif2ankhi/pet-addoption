  const allButtons = async() =>{
  const res =await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
  const pett = await res.json();
  displayButton(pett.categories)
}
const displayButton = (pets) => {
  pets.forEach(pet => {
    const btnSection = document.getElementById('btnPet')
    const newButton = document.createElement('div')
    newButton.innerHTML =`
    <button id="btn-${pet?.category || 'defaultCategory'}" onclick="categoryName('${pet?.category || 'defaultCategory'}')" 
    class="btn category-btn">
    
    <img class="w-8" src="${pet.category_icon}" alt="">
    ${pet.category}
</button>
    `
    btnSection.append(newButton)
  
  });
}

const categoryName = (categoryname) => {
                                                                                                                                                                   
  document.getElementById('spinning').classList.remove('hidden')
  document.getElementById('card-container').classList.add('hidden')
  document.getElementById('aa').classList.add('hidden')


  
    removeBtnBg()
    const activeBtn = document.getElementById(`btn-${categoryname}`); 
    activeBtn.classList.add('active')
    
    

  setTimeout(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryname}`)
    .then((res) => res.json())
    .then((pett) => displayCards(pett.data))
    .catch((error) => console.log(error)) 
    document.getElementById('spinning').classList.add('hidden')
    document.getElementById('card-container').classList.remove('hidden')
    document.getElementById('aa').classList.remove('hidden')
 
  },1500);
}
const removeBtnBg =() =>{
  const btns = document.getElementsByClassName('category-btn')
  for(let btn of btns){
  btn.classList.remove('active')
   }
}

const showAnimal = async () => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
  const pett = await response.json();
  displayCards(pett.pets);  // Pass the 'pets' array to displayCards
}

const displayCards = (cards) => {
const cardContainer = document.getElementById('card-container')
cardContainer.innerHTML =''
if(cards.length == 0){
  cardContainer.classList.remove('grid')
  cardContainer.innerHTML =`
  <div class=" min-h-[300px] flex flex-col gap-5 justify-center items-center">
  <img src="./images/error.webp" alt="">
  <h2 class="font-bold text-xl text-center">No Information Available</h2>
  <p class="text-[gray] w-2/3 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
  </div>
  `
}else{
  cardContainer.classList.add('grid')
}
  cards.forEach((card) => {
    const {breed,petId,category,date_of_birth,price,image,gender,vaccinated_status,pet_name,}=card;
       const div = document.createElement("div")    
       div.innerHTML =`
       <div class="card  border border-[#0E7A81] ">
         <figure class="lg:px-6 px-4 pt-2 lg:pt-8">
           <img class="w-full rounded-lg" src=${image}  />
         </figure>
         <div class="p-2 lg:p-5 space-y-4 lg:space-y-5">
           <h3 class="text-[20px] font-bold text-[#868282]">${pet_name?pet_name: 'Not available'}      
           <p class="text-start text-base font-normal text-[#868282]">
             <i class="fa-regular fa-table mr-2"></i> Breed:${breed}
           </p>
           <p class="text-start text-base font-normal text-[#868282]">
             <i class="fa-solid fa-calendar-days mr-2"></i> Birth: ${date_of_birth?date_of_birth: 'Not Available'}
           </p>
           <p class="text-start text-base font-normal text-[#868282]">
             <i class="fa-solid fa-venus mr-2"></i> Gender: ${gender?gender: "Not Available"}
           </p>
           <p class="text-start text-base font-normal text-[#868282]">
             <i class="fa-solid fa-dollar-sign mr-2"></i> Price: ${price?price: ""}
           </p>
           <hr class="w-full" />
           <div class="card-actions grid grid-cols-3 gap-2 mt-2">
             <button onclick="createNewPart('${image}')" class="btn bg-white border-[#0E7A8126] outline-1">
               <i class="fa-solid fa-thumbs-up text-2xl text-[#0E7A81]"></i>
             </button>
             <button onclick="Congratulations('${petId}')" class="btn border-[#0E7A8126] btn-adopt bg-white text-[18px] font-bold text-[#0E7A81] p-1">Adopt</button>
             <button onclick="createModal('${petId}')" class="btn border-[#0E7A8126] bg-white text-[18px] font-bold text-[#0E7A81] p-1">Details</button>
             <div></div>
           </div>
         </div>
       </div>
       `
       cardContainer.appendChild(div)
  });
}

const createNewPart = (imagee) => {
  const createNEWSection = document.getElementById('newSection')
  const div = document.createElement('div')
  div.innerHTML=`
  <img class="rounded-md" src="${imagee}" alt="" />
  ` 
  createNEWSection.append(div)
}
// ---------------------------------------------------------------------
const createModal = async(petId)=>{
  console.log(petId)
      const res = await fetch (`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
      const data = await res.json()
      MODAL(data.petData)
}
// create a modal
const MODAL = (details) =>{
  const {breed,petId,category,date_of_birth,price,image,gender,pet_details,vaccinated_status,pet_name,}= details;
  const modalContainer = document.getElementById('modal-Container')
  modalContainer.innerHTML=`
  <dialog id="my_modal_1" class="modal">
  <div class="modal-box">
   <figure class="p-2 ">
           <img class="w-full rounded-lg" src=${image}  />
         </figure>
    <div class="p-2 ">
      <h3 class="text-[20px] font-bold text-text-[#868282]">${pet_name?pet_name: 'Not Available'}      
      <div class="flex space-x-9">
          <div>
                <p class="text-start text-base font-normal text-[#868282]">
                  <i class="fa-regular fa-table mr-2"></i> Breed:${breed}
                </p>
               
                <p class="text-start text-base font-normal text-[#868282]">
                  <i class="fa-solid fa-venus mr-2"></i> Gender: ${gender?gender: "Not Available"}
                </p>
                <p class="text-start text-base font-normal text-[#868282]">
                  <i class="fa-solid fa-syringe mr-2"></i> Vaccinated: ${vaccinated_status?vaccinated_status: "Not Available"}
                </p>
               
          </div>
        <div>
            <p class="text-start text-base font-normal text-[#868282]">
                  <i class="fa-solid fa-calendar-days mr-2"></i> Birth: ${date_of_birth?date_of_birth: 'Not Available'}
            </p>
             <p class="text-start text-base font-normal text-[#868282]">
                  <i class="fa-solid fa-dollar-sign mr-2"></i> Price: ${price?price: "Not Available"}
            </p>
        </div>
      </div>
      <hr/>
      <h1 class="font-bold mt-3">Details Information</h1>
      <p>${pet_details}</p>
    <div id="modalBtn" class="text-center  mt-2 mx-auto ">
      <form method="dialog">
        <div><button class="text-red-300 border-2 border-solid border-[#0E7A81] rounded-lg w-full text-2xl font-bold py-3">Close</button></div>
      </form>
    </div>
  </div>
  </dialog>
  `
my_modal_1.showModal()
}
// create congratulations Button
const Congratulations = (petId) =>{
  my_modal_2.showModal()
  const countContainer = document.getElementById('count');
  let count = 3;
  const intervalId = setInterval(() => {
    count--;
    countContainer.innerHTML = count;
    if( count <= 0){
      clearInterval(intervalId);
      my_modal_2.close()
      const adoptBtn = document.getElementsByClassName('btn-adopt');
      for(const btn of adoptBtn){
       btn.innerHTML = "Adopted";
       btn.setAttribute('disabled', true)
      }  
    }
  }, 1000);
  


}
const sortPrice =async() =>{
  const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
  const data = await response.json();
  displaySort(data.pets)
  pets = data.pets 
}
const displaySort = (pets) => {
  console.log(pets)
  const sortedPets = pets.sort((x,y)=> y.price - x.price);
  displayCards(sortedPets)

}
showAnimal()
// btnAllSection()
allButtons()
