
const resumeText = document.querySelectorAll('.resume-text');
const seeMoreB = document.getElementById("see-more");

// Funcionalidade de ver mais na parte do resumo.
seeMoreB.addEventListener("click", function () {
  seeMoreB.style.display = 'none';
  resumeText.forEach(e => {
    e.classList.replace('disabled', 'activated');
  });
});


// Funcionalidade de criar tópico.
const createTopic = document.getElementById('button-topic');
const topicBase = document.getElementById('create-topic');
const topicCreator = document.getElementById('subject-content');

createTopic.addEventListener("click", function () {
  topicBase.classList.replace('activated', 'disabled');
  topicCreator.classList.replace('disabled', 'activated');
});

// Funcionalidade de enviar o tópico criado.
const sended = document.getElementById('sended');
const blurTopic = document.getElementById('blur-content');
const awaitMessage = document.getElementById('new-topic');

const send = document.getElementById('send');

send.addEventListener("click", function () {
  topicCreator.classList.replace('activated', 'disabled');
  blurTopic.classList.replace('disabled', 'activated');
  awaitMessage.classList.replace('disabled', 'activated');
  sended.classList.replace('disabled', 'activated');
});


// Funcionalidade de ir para criar tópico de novo.
const createAgain = document.getElementById('create-new-topic');

createAgain.addEventListener("click", function () {
  blurTopic.classList.replace('activated', 'disabled')
  awaitMessage.classList.replace('activated', 'disabled');
  sended.classList.replace('activated', 'disabled');
  topicCreator.classList.replace('disabled', 'activated');
});

// Funcionalidade de expandir o card.

const expanded = document.getElementById('card-expanded');
const creatorTopic = document.getElementById('creator-topic');
const like = document.getElementById('like');
const answer = document.getElementById('answer');
const seeAnswer = document.querySelectorAll('.see-answer');

expanded.addEventListener("click", function () {
  creatorTopic.classList.replace('quicksand500', 'quicksand700');
  like.innerText = '4 likes';
  answer.innerText = '4 respostas';

  seeAnswer.forEach(e => {
    e.classList.replace('disabled', 'activated');
  });
});

// Funcionalidade de open side menu e close

const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const menu = document.getElementById('menu');
const navMenu = document.getElementById('side-menu');
const content = document.getElementById('content');

openNav.addEventListener("click", function () {
  openNav.style.display = 'none';

  navMenu.style.display = 'block';
  menu.style.display = 'block';
  menu.style.width = '250px';
  menu.style.position = 'absolute';
  menu.style.zIndex = '1';

  closeNav.style.display = 'inline';
});

closeNav.addEventListener("click", function () {

  closeNav.style.display = 'none';
  openNav.style.display = 'block';
  content.style.left = '30px';

  navMenu.style.display = 'none';
  menu.style.display = 'flex';
  menu.style.width = '10px';
});