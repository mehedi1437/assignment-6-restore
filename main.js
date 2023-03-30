
// load all ai data
const loadAiData = async () =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`

    const res = await fetch(url);
    const data = await res.json();
    displayAiData(data.data.tools );
};


// display all ai data 

const displayAiData = (singleAiTool) =>{
// Display 6 cards only
const seeMore = document.getElementById('see-more');

if( singleAiTool.length > 6){
  singleAiTool = singleAiTool.slice(0,6);
  seeMore.classList.remove('d-none');
}

else{
  seeMore.classList.add('d-none');
}

  singleAiTool.forEach(Ai =>{
    
      const cardContainer = document.getElementById('card-container');
       
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('col');
      cardDiv.innerHTML = `

      <div class="card">
          <img src="${Ai.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <ol>
              <li>${Ai.features[0]}</li>
              <li>${Ai.features[1]}</li>
              <li>${Ai.features[2]}</li>
              </ol>
              <hr>
              <h5>${Ai.name}</h5>
              <div class="d-flex justify-content-between">
              <div class="d-flex mt-4 ">
                  <i class='far fa-2x fa-calendar-alt'></i> 
                  <h5 class="ms-2 mt-1">${Ai.published_in }</h5>
              </div>
              <div>
              <div onclick="loadAiDetail('${Ai.id}')" class="bg-danger-subtle rounded-circle "><i class="fa-solid fa-arrow-right p-3 text-danger" data-bs-toggle="modal" data-bs-target="#aiDetailsModal"></i></div> 
              </div>

                  

          </div>
            <p class="card-text"></p>

          </div>
        </div>
      
      `;
      cardContainer.appendChild(cardDiv);
       

  });

  // stop spinner
  const loaderSection = document.getElementById('loader');
  loaderSection.classList.add('d-none');
};


// Show all button clicked and show all cards

document.getElementById('btn-see-more').addEventListener('click', function(){
  
  const loadAiData = async () =>{
      const url = ` https://openapi.programming-hero.com/api/ai/tools`

      const res = await fetch(url);
      const data = await res.json();
      displayAiData(data.data.tools );
};
   
  const displayAiData = (singleAiTool) =>{
      console.log(singleAiTool);
  
  const seeMore = document.getElementById('see-more');
  
  if( singleAiTool.length > 6){
    // aftar clicking see more button show all cards
      singleAiTool = singleAiTool.slice(7,12);
      seeMore.classList.add('d-none');
  }
  
  else{
      seeMore.classList.add('d-none');
  }
  
      singleAiTool.forEach(Ai =>{
          const cardContainer = document.getElementById('card-container');
  
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('col');
          cardDiv.innerHTML = `
  
          <div class="card">
              <img src="${Ai.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>
                  <li>${Ai.features[0]}</li>
                  <li>${Ai.features[1]}</li>
                  <li>${Ai.features[2]}</li>
                  </ol>
                  <hr>
                  <h5>${Ai.name}</h5>
                  <div class="d-flex justify-content-between">
                  <div class="d-flex mt-4 ">
                      <i class='far fa-2x fa-calendar-alt'></i> 
                      <h5 class="ms-2 mt-1">${Ai.published_in }</h5>
                  </div>

               <div>                    
              <div onclick="loadAiDetail('${Ai.id}')" class="bg-danger-subtle rounded-circle "><i class="fa-solid fa-arrow-right p-3 text-danger" data-bs-toggle="modal" data-bs-target="#aiDetailsModal"></i></div> 
              </div>
              </div>
                <p class="card-text"></p>
  
              </div>
            </div>
          
          `;
          cardContainer.appendChild(cardDiv);

      });
  
      // stop spinner
      const loaderSection = document.getElementById('loader');
      loaderSection.classList.add('d-none');
  };
  loadAiData();       
});


// load Single card details
const loadAiDetail = async id =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayAiDetail(data.data);
};

// display card details with modal 
const displayAiDetail = ai =>{
// modal left
  const modalLeft = document.getElementById('modal-left');
  modalLeft.textContent = '';
 const modalLeftDiv = document.createElement('div');
  modalLeftDiv.classList.add('card');

  modalLeftDiv.innerHTML = `
  <div class="card-body bg-danger-subtle ">
  <h6 class="card-title">${ai.description}</h6>  
  <div class="row row-cols-1 row-cols-md-3 g-5 ">
      <div class="col p-3 ">
          <p class="text-success bg-light p-2 rounded-2">${ai.pricing ? ai.pricing[0].price : 'Free of cost'}/${ai.pricing ? ai.pricing[0].plan : 'Free of cost'}</p>
      </div>
      <div class="col p-3 ">
        <p class="text-warning bg-light p-2 rounded-2">${ai.pricing ? ai.pricing[1].price : 'Free of cost'}/${ai.pricing ? ai.pricing[1].plan : 'Free of cost'}</p>
      </div>
      <div class="col p-3 ">
        <p class="text-danger bg-light p-2 rounded-2">${ai.pricing ? ai.pricing[2].price : 'Free of cost'}/${ai.pricing ? ai.pricing[2].plan : 'Free of cost'}</p>
      </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2  g-5 ">
    <div class="col p-3 ">
      <h5>Feature</h5>
      <ul class="text-light-subtle">
          <li>${ai.features[1] ? ai.features[1].feature_name  : 'No Data found'  }</li>
          <li>${ai.features[2] ? ai.features[2].feature_name  : 'No Data found'  }</li>
          <li>${ai.features[3] ? ai.features[3].feature_name  : 'No Data found'  }</li>
      </ul>
    </div>
    <div class="col p-3 ">
    <h5>Integration</h5>
        <li>${ai.integrations[0] ? ai.integrations[0] : 'No data Found'}</li>
        <li>${ai.integrations[1] ? ai.integrations[1] : 'No data Found'}</li>
        <li>${ai.integrations[2] ? ai.integrations[2] : 'No data Found'}</li>
  </div>  

  </div>
  <p class="card-text"></p>
</div>
  `;
  modalLeft.appendChild(modalLeftDiv);


  // Modal right 

const modalRight = document.getElementById('modal-right');
modalRight.textContent = '';
const modalRightDiv = document.createElement('div');
modalRightDiv.classList.add('card');

modalRightDiv.innerHTML = `

<img src="${ai.image_link ? ai.image_link[0]  : 'No image here'}" class="card-img-top" alt="...">
<div class="btn btn-danger mt-2 me-2 position-absolute top-0 end-0">${ai.accuracy ? ai.accuracy.score : 'no accuracy'}% accuracy</div>
<div class="card-body  ">
<h5 class="card-title">${ai.input_output_examples[0] ? ai.input_output_examples[0].input : 'Can you give any example?'   }</h5>
<p class="card-text mt-4">${ai.input_output_examples[0] ? ai.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'   }</p>
</div>
`;
modalRight.appendChild(modalRightDiv);  
}
loadAiData();

