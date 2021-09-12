const button = document.querySelector('#menu-icon');
const modalContainer = document.querySelector('#menu-container');

const modal = `<div id="menu">
<button type="submit" id="x-con">
<img src="./images/Disabled.svg" alt="picture of the x icon">
</button>
<nav>
<li>
<a href="about.html" class="nav-item">
About
</a>
</li>

<li>
<a href="#" class="nav-item">
Program
</a>
</li>

<li>
<a href="#" class="nav-item">
Join
</a>
</li>

<li>
<a href="index.html" class="homelink">
Faris Label
</a> 
</li>
</nav>
</div>`;
modalContainer.innerHTML = modal;

button.addEventListener('click', () => {
  document.getElementById('menu').style = 'display: flex';
});

document.getElementById('x-con').addEventListener('click', () => {
  document.getElementById('menu').style = 'display: none';
});

const speakersData = [{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/Michel Doukeris.jpeg',
  sName: 'Michel Doukeris',
  sPosition: 'Chief Executive Officer of Anheuser-Busch InBev',
  sStory: 'Michel Doukeris has been named as the new CEO of brewery giant Anheuser-Busch InBev (AB InBev).',
},

{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/HEINEKEN-Dolf-van-den-Brink-Picture-06-2020-cropped.jpeg',
  sName: 'Dolf van den Brink',
  sPosition: 'Chief Executive Officer and Chairman of the Executive Board at Heineken N.V',
  sStory: 'Dolf van den Brink [4] was President of the Asia Pacific region and member of the Executive Team at Heineken N.V',
},

{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/Hou Xiaohai.jpeg',
  sName: 'Hou Xiaohai',
  sPosition: 'Senior Partner and Managing Director for The Boston Consulting Group in Greater China',
  sStory: 'China Resources Beer has been a leading player in the Chinese beer market.',
},

{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/Carlos-Brito-750x457.jpeg',
  sName: 'Carlos Brito',
  sPosition: 'CEO of Anheuser-Busch InBev',
  sStory: 'Carlos Alves de Brito is a Brazilian businessman who has served as CEO of Anheuser-Busch InBev since 2008',
},

{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/Hideya-Takashima.jpeg',
  sName: 'Hideya Takashima',
  sPosition: 'Group Managing Executive Officer, President of Subsidiary at Sapporo Holdings Ltd.',
  sStory: 'Hideya Takashima is Managing Group Executive Officer at Sapporo Holdings Ltd.',
},

{
  gridImg: './images/checker-pattern.svg',
  speakersImg: './images/Gavin-d-Hattersley.jpeg',
  sName: 'Gavin D. Hattersley',
  sPosition: 'CEO of MillerCoors',
  sStory: 'Prior to his current role, Gavin was global chief financial officer for Molson Coors and served as a member of the MillerCoors Board of Directors.',
},
];

// dynamically displaying the speakers section
const heading = document.createElement('h2');
const headingText = document.createTextNode('Featured speakers');
heading.appendChild(headingText);
document.getElementById('featured-speakers').appendChild(heading);

const hr = document.createElement('h2');
hr.className = 'fh';
document.getElementById('featured-speakers').appendChild(hr);

const speakersContainer = document.createElement('article');
speakersContainer.id = 'speakers-section';

for (let a = 0; a < 2; a + 1) {
  const speakerCON = document.createElement('div');
  speakerCON.className = 'speaker-con';
  speakersContainer.appendChild(speakerCON);

  const imgCon = document.createElement('div');
  imgCon.className = 'Gcon';
  speakerCON.appendChild(imgCon);

  const gridImage = document.createElement('img');
  gridImage.className = 'grid-img';
  gridImage.src = speakersData[a].gridImg;
  imgCon.appendChild(gridImage);

  const speakerImage = document.createElement('img');
  speakerImage.className = 'speaker-img';
  speakerImage.src = speakersData[a].speakersImg;
  imgCon.appendChild(speakerImage);

  const description = document.createElement('div');
  description.className = 'S-description';
  speakerCON.appendChild(description);

  const h3 = document.createElement('h3');
  h3.innerText = speakersData[a].sName;
  description.appendChild(h3);

  const i = document.createElement('i');
  i.innerText = speakersData[a].sPosition;
  description.appendChild(i);

  const hr2 = document.createElement('hr');
  description.appendChild(hr2);

  const p = document.createElement('p');
  p.innerText = speakersData[a].sStory;
  description.appendChild(p);

  document.getElementById('featured-speakers').appendChild(speakersContainer);
}

const moreSpeakers = document.createElement('article');
moreSpeakers.id = 'more-speakers';
for (let a = 2; a < speakersData.length; a + 1) {
  const speakerCON = document.createElement('div');
  speakerCON.className = 'speaker-con';
  moreSpeakers.appendChild(speakerCON);

  const imgCon = document.createElement('div');
  imgCon.className = 'Gcon';
  speakerCON.appendChild(imgCon);

  const gridImage = document.createElement('img');
  gridImage.className = 'grid-img';
  gridImage.src = speakersData[a].gridImg;
  imgCon.appendChild(gridImage);

  const speakerImage = document.createElement('img');
  speakerImage.className = 'speaker-img';
  speakerImage.src = speakersData[a].speakersImg;
  imgCon.appendChild(speakerImage);

  const description = document.createElement('div');
  description.className = 'S-description';
  speakerCON.appendChild(description);

  const h3 = document.createElement('h3');
  h3.innerText = speakersData[a].sName;
  description.appendChild(h3);

  const i = document.createElement('i');
  i.innerText = speakersData[a].sPosition;
  description.appendChild(i);

  const hr2 = document.createElement('hr');
  description.appendChild(hr2);

  const p = document.createElement('p');
  p.innerText = speakersData[a].sStory;
  description.appendChild(p);

  document.getElementById('featured-speakers').appendChild(moreSpeakers);
}

const Sbutton = document.createElement('button');
Sbutton.type = 'submit';
Sbutton.className = 'b-s';
Sbutton.id = 'more-btn';

const buttonLabel = document.createElement('p');
buttonLabel.id = 'btn-name';
buttonLabel.innerText = 'More';
Sbutton.appendChild(buttonLabel);

const buttonImg = document.createElement('img');
buttonImg.id = 'arrow-img';
buttonImg.src = './images/down-arrow.svg';
Sbutton.appendChild(buttonImg);

document.getElementById('featured-speakers').appendChild(Sbutton);

const moreBtn = document.getElementById('more-btn');

moreBtn.addEventListener('click', () => {
  if (document.getElementById('more-speakers').style.display === 'grid') {
    document.getElementById('more-speakers').style = 'display: none';
    document.getElementById('arrow-img').style = 'transform: rotate(3600deg)';
    document.getElementById('btn-name').innerHTML = 'More';
  } else {
    document.getElementById('more-speakers').style = 'display: grid';
    document.getElementById('arrow-img').style = 'transform: rotate(180deg)';
    document.getElementById('btn-name').innerHTML = 'Less';
  }
});