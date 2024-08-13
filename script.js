const api_url ='https://fakestoreapiserver.reactbd.com/amazonproducts'; 

fetch(api_url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    console.log( userData);
    ShowCards(userData); 
  })
  .catch(error => {
    console.error( error);
  });

function ShowCards(cards) {
    const mainSection = document.querySelector('.main-section');

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
        idElement.textContent =`id:${card.id}`;  

        const categoryElement = document.createElement('p');
        categoryElement.className = 'category';
        categoryElement.textContent = card.category;

        imgTop.appendChild(idElement);
        imgTop.appendChild(categoryElement);

        const imageElement = document.createElement('img');
        imageElement.className = 'image';
       

        imageElement.setAttribute('src' , card.image) ; 
        imageElement.setAttribute('alt', card.alt )

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
        rate.className ='rating' ; 
        rate.textContent = card.rating.rate ; 
        

        cardBottom.appendChild(titleElement);
        cardBottom.appendChild(descriptionElement);
        cardBottom.appendChild(priceElement);
        cardBottom.appendChild(rate)

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardBottom);

        allCard.appendChild(cardContainer);

        mainSection.appendChild(allCard);
    });
}


function FetchProduct(){

}

const filterInput = document.getElementById('input') ; 
filterInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    if(text.length >3 ){

    }
    
    
  });
  