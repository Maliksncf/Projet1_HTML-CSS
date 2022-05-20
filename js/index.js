// const body = document.querySelector('body');
// const divTitle = document.createElement("div");
// divTitle.classList.add('titleform');
// body.appendChild(divTitle);

// const title = document.createElement('h2');
// title.textContent = 'CONTACT',
// divTitle.classList.add('title');

// const words = document.createElement('p');
// words.textContent = 'Get in touch with us';
// divTitle.appendChild(words);

// const contactForm = document.createElement("section");
// contactForm.classList.add('formContact');
// body.appendChild(contactForm);

// const divFormLeft = document.createElement("div");
// divFormLeft.classList.add('formLeft');
// contactForm.appendChild(divFormLeft);

// const littleTitle = document.createElement("h6");
// littleTitle.textContent = 'CONTACT FORM';
// divFormLeft.appendChild(littleTitle);

// const formular = document.createElement('form');
(function () {
    const bluePicture = [];
    const streetPicture = [];
    const rainbowsPicture = [];
    const sunrisesPicture = [];
    const parisPicture = [];
  
    const main = document.querySelector(".main");
    const div = document.createElement("section");
    div.classList.add("modal");
    main.appendChild(div);
  
    const filigram = document.createElement("div");
    filigram.classList.add("filigram");
    div.appendChild(filigram);
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    div.appendChild(modalContent);
  
    const modal = (imgsrc) => {
      const img = document.createElement("img");
      img.src = imgsrc;
      img.alt = "images modal";
      modalContent.appendChild(img);
    
    };
    const modal1 = (imgsrc) => {
      const img = document.createElement("img");
      img.src = imgsrc;
      img.alt = "images modal";
      modalContent.appendChild(img);
    
    };
    [document.querySelector('.paris'), 
    document.querySelector('.sunrises'), 
    document.querySelector('.rainbows'), 
    document.querySelector('.street'), 
    document.querySelector('.blue')].forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const images = document.getElementsByClassName('honeycomb-cell_title');
          const image = getImage(images, item.className)
          console.log(image);
          
          modal1(image);
         // modal.classList.toggle("show-modal");
        });
      })
  })();
  
  function toggleModal() {
    modal.classList.toggle("show-modal");
  }
  
  function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
  }
  
  function getImage(imageList, imageName) {
  
    const returnedImage = '';
    Array.from(imageList).forEach((image) => {
  
      if (image.className === imageName ) {
        const imageId = image.id;
        console.log(imageId);
        const returnedImage = document.getElementById(imageId).previousElementSibling;
        console.log(returnedImage);
      }
    })
    return returnedImage;
  }