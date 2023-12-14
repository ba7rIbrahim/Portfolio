// Move menu nav when click toggle
let uls = document.querySelector('nav .ul');
document.addEventListener('click', (e) => {
  if(e.target.className == 'toggle fa-solid fa-bars') {
    if(uls.style.right == '0px') {
      uls.style.right = '-100%';
    } else{
      uls.style.right = '0px';
    }
  }
});

// Select arrow in skills section
let progress = document.querySelectorAll('.progress');
document.querySelectorAll('i.show-skill').forEach((element) => {
  element.addEventListener('click', (e) => {
    let prog = progress[e.target.dataset.num];  
    if(prog.classList.contains('active')) {
      prog.classList.remove('active');
    } else {
      prog.classList.add('active');
    }
    
    if(e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
  });
});

// Popup box for services
let servicesBoxes = document.querySelectorAll(".services div.box");
servicesBoxes.forEach((box) => {
  box.onclick = function() {
    swal("", ` I develope the user interface. \n Web page development. \n I create ux element interface. \n I position your company brand`, "success");
  }
});

// Projects in Large screen
let counterProject = 0;
let rightArrow = document.querySelector('.my-work i.right-arrow');
let leftArrow = document.querySelector('.my-work i.left-arrow');
let projects = document.querySelectorAll('.my-work .box');
projects = Array.from(projects);
leftArrow.classList.add('stop');

rightArrow.addEventListener('click', () => {
  counterProject++;

  leftArrow.classList.remove('stop');
  if(counterProject == projects.length - 1) {
    rightArrow.classList.add('stop');
  }

  projects.forEach((element) => {
    element.classList.remove('active');
  });
  projects[counterProject].classList.add('active');
});

leftArrow.addEventListener('click', () => {
  counterProject--;

  rightArrow.classList.remove('stop');
  if(counterProject == 0) {
    leftArrow.classList.add('stop');
  }

  projects.forEach((element) => {
    element.classList.remove('active');
  });
  projects[counterProject].classList.add('active');
});

// Projects in medium and small screen
let listButton = document.querySelector('.list-project .more');
let listItem = document.querySelector("ul.list");

listButton.addEventListener('click', () => {
  if(listItem.classList.contains('active')) {
    listItem.classList.remove('active');
    document.querySelector('.list-project .more i').classList.remove('rotate');
  } 
  else {
    listItem.classList.add('active');
    document.querySelector('.list-project .more i').classList.add('rotate');
  }
});

let listProject = document.querySelectorAll('.list-project .list li');
listProject = Array.from(listProject);

listProject.forEach((project) => {


  project.onclick = () => {
    listProject.forEach((element) => {
      element.classList.remove('active');
    });

    projects.forEach((element) => {
      element.classList.remove('active');
    });
    projects[project.dataset.project].classList.add('active');
    project.classList.add('active');
  }
});