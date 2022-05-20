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
  
    // const main = document.querySelector(".main");
    // const div = document.createElement("section");
    // div.classList.add("modal");
    // main.appendChild(div);
  
    // const filigram = document.createElement("div");
    // filigram.classList.add("filigram");
    // div.appendChild(filigram);
  
    // const modalContent = document.createElement("div");
    // modalContent.classList.add("modal-content");
    // div.appendChild(modalContent);
  
    // const modal = (imgsrc) => {
    //   const img = document.createElement("img");
    //   img.src = imgsrc;
    //   img.alt = "images modal";
    //   modalContent.appendChild(img);
    // };
    
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
  
         // getModalImage(className, idName);
          //modal('medbleu.png');
         // modal.classList.toggle("show-modal");
        });
      })
  })();
  
  function getModalImage(modalIdName, ImageIdName, modalImageIdName) {
  
    let modal = document.getElementById(modalIdName);
    let img = document.getElementById(ImageIdName);
    let modalImg = document.getElementById(modalImageIdName);
  
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
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