

const api_url ='https://fakestoreapiserver.reactbd.com/amazonproducts'; 

let userData = []; 

fetch(api_url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    userData = data;  
    // console.log(userData);
    ShowCards(userData); 
  })
  .catch(error => {
    console.error(error);
  });

function ShowCards(cards) {
    const mainSection = document.querySelector('.main-section');

    mainSection.innerHTML = ''; 

    const allCard = document.createElement('section');
    allCard.classList.add('all-cards');
    cards.forEach(card => {

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        const cardTop = document.createElement('div');
        cardTop.className = 'card-top';

        const imgTop = document.createElement('div');
        imgTop.className = 'img-top';

        const idElement = document.createElement('p');
        idElement.className = 'id';
        idElement.textContent = `id: ${card.id}`;  

        const categoryElement = document.createElement('p');
        categoryElement.className = 'category';
        categoryElement.textContent = card.category;

        imgTop.appendChild(idElement);
        imgTop.appendChild(categoryElement);

        const imageElement = document.createElement('img');
        imageElement.className = 'image';
        imageElement.setAttribute('src', card.image); 
        imageElement.setAttribute('alt', card.alt);

        cardTop.appendChild(imgTop);
        cardTop.appendChild(imageElement);

        const cardBottom = document.createElement('div');
        cardBottom.className = 'card-bottom';

        const titleElement = document.createElement('p');
        titleElement.className = 'title';
        titleElement.textContent = card.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'description';
        descriptionElement.textContent = card.description;

        const priceElement = document.createElement('p');
        priceElement.className = 'price';
        priceElement.textContent = `$${card.price}`;  

 


        const rate = document.createElement('p');
        rate.className = 'rating';
        rate.textContent = `${card.rating.rate} ⭐` ;

       



        cardBottom.appendChild(titleElement);
        cardBottom.appendChild(descriptionElement);
        cardBottom.appendChild(priceElement);
        cardBottom.appendChild(rate);

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardBottom);

        allCard.appendChild(cardContainer);
    });

    mainSection.appendChild(allCard);
}





const filterInput = document.getElementById('input');
console.log(filterInput)

// filterInput.addEventListener('keyup', (e) => {
//     const text = e.target.value.toLowerCase();
//     if (text.length >2) {
//         const filteredCards = userData.filter(card => card.category.toLowerCase().includes(text));
//         ShowCards(filteredCards);
//     } else {
//         ShowCards(userData);  
//     }
// });







// const sugList = document.createElement('ul');
// sugList.id = 'suggestions';
// filterInput.parentNode.insertBefore(sugList, filterInput.nextSibling);

// filterInput.addEventListener('keyup', (e) => {
//   const text = e.target.value.toLowerCase();
//   if (text.length > 2) {
//     const filteredCards = userData.filter(card => card.category.toLowerCase().includes(text));
//     ShowCards(filteredCards);
//     showSuggestions(text);
//   } else {
//     ShowCards(userData);
//     clearSuggestions();
//   }
// });

// function showSuggestions(text) {
//   const suggestions = [];
//   const categories = {};

//   for (let i = 0; i < userData.length; i++) {
//     const category = userData[i].category;
//     if (!categories[category] && category.toLowerCase().includes(text)) {
//       categories[category] = true;
//       suggestions.push(category);
//     }
//   }

//   sugList.innerHTML = '';
//   for (let i = 0; i < suggestions.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = suggestions[i];
//     li.addEventListener('click', () => {
//       filterInput.value = suggestions[i];
//       const filteredCards = userData.filter(card => card.category.toLowerCase() === suggestions[i].toLowerCase());
//       ShowCards(filteredCards);
//       clearSuggestions();
//     });
//     sugList.appendChild(li);
//   }
// }

// function clearSuggestions() {
//   sugList.innerHTML = '';
// }

// document.addEventListener('click', (e) => {
//   if (e.target !== filterInput && e.target !== sugList) {
//     clearSuggestions();
//   }
// });


filterInput.addEventListener('keyup', (e) => {
  const text = e.target.value.toLowerCase();
  console.log('text',  text); 
  if (text.length > 2) {
    const filteredCards = userData.filter(card => card.category.toLowerCase().includes(text));
    console.log('cards', filteredCards); 
    ShowCards(filteredCards);
    showSuggestions(text);
  } else {
    ShowCards(userData);
    clearSuggestions();
  }
});

function showSuggestions(text) {
  const suggestions = [];
  const categories = [];

  for (let i = 0; i < userData.length; i++) {
    const category = userData[i].category;
    if (!categories[category] && category.toLowerCase().includes(text)) {
      categories[category] = true;
      suggestions.push(category);
    }
  }

  console.log('sugg...:', suggestions); 
  sugList.innerHTML = '';
  for (let i = 0; i < suggestions.length; i++) {
    const li = document.createElement('li');
    li.textContent = suggestions[i];
    li.addEventListener('click', () => {
      filterInput.value = suggestions[i];
      const filteredCards = userData.filter(card => card.category.toLowerCase() === suggestions[i].toLowerCase());
      ShowCards(filteredCards);
      clearSuggestions();
    });
    sugList.appendChild(li);
  }
}
