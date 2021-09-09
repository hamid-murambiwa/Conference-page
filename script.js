const button = document.querySelector('#menu-icon');
const modalContainer = document.querySelector('#menu-container');
const speakers = document.querySelector('#featured-speakers');

const modal = `<div id="menu">
<button id="x-con">
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

const speakersContent = `<h2>
        Featured speakers
    </h2>
    
    <hr class="fh">
    
    <article id="speakers-section">
        <div class="speaker-con">
                <div class="Gcon">
                <img src="${speakersData[0].gridImg}" alt="" class="grid-img">
                <img src="${speakersData[0].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">
                
            </div> 
             
            
            <div class="S-description">
            <h3>
            ${speakersData[0].sName}
            </h3>
            <i>
            ${speakersData[0].sPosition}
            </i>
            <hr>
            <p>
            ${speakersData[0].sStory}
            </p>
            </div>
            </div>
            
            <div class="speaker-con">
            <div class="Gcon">
            <img src="${speakersData[1].gridImg}" alt="" class="grid-img">
            <img src="${speakersData[1].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">
            
        </div> 
         
        
        <div class="S-description">
        <h3>
        ${speakersData[1].sName}
        </h3>
        <i>
        ${speakersData[1].sPosition}
        </i>
        <hr>
        <p>
        ${speakersData[1].sStory}
        </p>
        </div>
        </div>
            
    </article>

    <article id="more-speakers">

    <div class="speaker-con">
    <div class="Gcon">
    <img src="${speakersData[2].gridImg}" alt="" class="grid-img">
    <img src="${speakersData[2].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">
</div> 
 

<div class="S-description">
<h3>
${speakersData[2].sName}
</h3>
<i>
${speakersData[2].sPosition}
</i>
<hr>
<p>
${speakersData[2].sStory}
</p>
</div>
</div>
    
<div class="speaker-con">
<div class="Gcon">
<img src="${speakersData[3].gridImg}" alt="" class="grid-img">
<img src="${speakersData[3].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">

</div>

<div class="S-description">
<h3>
${speakersData[3].sName}
</h3>
<i>
${speakersData[3].sPosition}
</i>
<hr>
<p>
${speakersData[3].sStory}
</p>
</div>
</div>

<div class="speaker-con">
                <div class="Gcon">
                <img src="${speakersData[4].gridImg}" alt="" class="grid-img">
                <img src="${speakersData[4].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">
                
            </div> 
             
            
            <div class="S-description">
            <h3>
            ${speakersData[4].sName}
            </h3>
            <i>
            ${speakersData[4].sPosition}
            </i>
            <hr>
            <p>
            ${speakersData[4].sStory}
            </p>
            </div>
            </div>

            <div class="speaker-con">
            <div class="Gcon">
            <img src="${speakersData[5].gridImg}" alt="" class="grid-img">
            <img src="${speakersData[5].speakersImg}" alt="a picture of Michel Doukeris" class="speaker-img">   
        </div> 
         
        
        <div class="S-description">
        <h3>
        ${speakersData[5].sName}
        </h3>
        <i>
        ${speakersData[5].sPosition}
        </i>
        <hr>
        <p>
        ${speakersData[5].sStory}
        </p>
        </div>
        </div>
            </article>
    
                <button class="b-s" id="more-btn">
                    <p id="btn-name">More</p> <img src="./images/down-arrow.svg" alt="image of down arrow" id="arrow-img">
                </button>`;

speakers.innerHTML = speakersContent;

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