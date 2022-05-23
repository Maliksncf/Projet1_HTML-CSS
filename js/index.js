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
// const images = document.querySelectorAll(".honeycomb-cell img");
// let imgSrc;
// // get images src onclick
// images.forEach((img) => {
//     img.addEventListener("click", (e) => {
//         imgSrc = e.target.src;
//     });
// });
// //creating the modal
// let imgModal = (src) => {
//     const modal = document.createElement("li");
//     modal.setAttribute("class", "modal");
//     //add the modal to the main section or the parent element
//     document.querySelector(".honeycomb").append(modal);
//     //adding image to modal
//     const newImage = document.createElement("img");
//     newImage.setAttribute("src", src);
//     modal.append(newImage)
// };
// //creating the close button
// const closeBtn = document.createElement("i");
// closeBtn.setAttribute("class", "fa-thin fa-square-xmark");
// //close function
// closeBtn.onclick = () => {
//     modal.remove();
// };
// modal.append(newImage, closeBtn);

(function () {
    const bluePicture = [];
    const streetPicture = [];
    const rainbowsPicture = [];
    const sunrisesPicture = [];
    const parisPicture = [];
    
    [document.querySelector('.paris'), 
    document.querySelector('.sunrises'), 
    document.querySelector('.rainbows'), 
    document.querySelector('.street'), 
    document.querySelector('.blue')].forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const images = document.getElementsByClassName('honeycomb-cell_title');
          const image = getImage(images, item.className);
          console.log(image);
         getModalImage('myModal',image.id, 'img01');
        });
      })
  })();
  
  function getModalImage(modalIdName, ImageIdName, modalImageIdName) {
  
    let modal = document.getElementById(modalIdName);
    let img = document.getElementById(ImageIdName);
    let modalImg = document.getElementById(modalImageIdName);
    modal.style.display = "block";
    modalImg.src = img.src; 
  }
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  
  function getImage(imageList, imageName) {
  
    let returnedImage = [];
    Array.from(imageList).forEach((image) => {
  
      if (image.className === imageName ) {
        const imageId = image.id;
        const previousSibling = document.getElementById(imageId).previousElementSibling;
        returnedImage = previousSibling;
      }
    })
    return returnedImage;
  }