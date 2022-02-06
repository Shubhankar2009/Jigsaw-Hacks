function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}


function Puzzle1sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    main_answer = answer1+answer2+answer3+answer4;
    if (main_answer == "STOP"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

//MLHJGS

function Puzzle2sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    let answer7 = document.getElementById('divmain7').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5+answer6+answer7;
    if (main_answer == "GIVEWAY"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    }
    else{
        alert('Try Again')
    }
 }

function Puzzle3sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    main_answer = answer1+answer2+answer3+answer4;
    if (main_answer == "HUMP"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle4sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5;
    if (main_answer == "MERGE"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle5sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5+answer6;
    if (main_answer == "CATTLE"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle6sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    
    main_answer = answer1+answer2+answer3+answer4;
    if (main_answer == "WORK"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle7sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    let answer7 = document.getElementById('divmain7').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5+answer6+answer7;
    if (main_answer == "PARKING"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle8sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5+answer6;
    if (main_answer == "SCHOOL"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle9sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    let answer7 = document.getElementById('divmain7').innerText
    let answer8 = document.getElementById('divmain8').innerText
    main_answer = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8;
    if (main_answer == "SLIPPERY"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle10sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText

    main_answer = answer1+answer2+answer3+answer4+answer5+answer6;
    if (main_answer == "UNEVEN"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle11sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    let answer7 = document.getElementById('divmain7').innerText
    let answer8 = document.getElementById('divmain8').innerText
    let answer9 = document.getElementById('divmain9').innerText
    let answer10 = document.getElementById('divmain10').innerText

    main_answer = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10;
    if (main_answer == "ROUNDABOUT"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}

function Puzzle12sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    
    
    main_answer = answer1;
    if (main_answer == "NO"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    }

    else{
        alert('Try Again')
    }
}

function Puzzle13sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    
    
    main_answer = answer1;
    if (main_answer == "TWO"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    }

    else{
        alert('Try Again')
    }
}


function Puzzle14sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    
    
    main_answer = answer1;
    if (main_answer == "NO"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    }

    else{
        alert('Try Again')
    }
}

function Puzzle15sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    let answer2 = document.getElementById('divmain2').innerText
    let answer3 = document.getElementById('divmain3').innerText
    let answer4 = document.getElementById('divmain4').innerText
    let answer5 = document.getElementById('divmain5').innerText
    let answer6 = document.getElementById('divmain6').innerText
    let answer7 = document.getElementById('divmain7').innerText
    let answer8 = document.getElementById('divmain8').innerText
    let answer9 = document.getElementById('divmain9').innerText
    let answer10 = document.getElementById('divmain10').innerText

    main_answer = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10;
    if (main_answer == "PEDESTRIAN"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    } 
    else{
        alert('Try Again')
    }
}


function Puzzle16sumbit() {
    let answer1 = document.getElementById('divmain1').innerText
    
    
    main_answer = answer1;
    if (main_answer == "NO"){
        console.log('That Was Right')
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          })
    }

    else{
        alert('Try Again')
    }
}

//result popup

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')



overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}