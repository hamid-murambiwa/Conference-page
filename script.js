const button = document.querySelector('#menu-icon');
const menulinks = document.querySelector('#menu nav');
const disableButton = document.querySelector('#x-con');
const modalContainer = document.querySelector('#menu-container');
const speakers = document.querySelector('#featured-speakers');

const modal = `<div id="menu">
<button id="x-con">
<img src="./images/Disabled.svg" alt="picture of the x icon">
</button>
<nav>
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
<a href="#" class="homelink">
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

const speakersContent = `<h2>
        Featured speakers
    </h2>
    
    <hr class="fh">
    
    <article id="speakers-section">
        <div class="speaker-con">
                <div class="Gcon">
                <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                <img src="./images/Michel Doukeris.jpeg" alt="a picture of Michel Doukeris" class="speaker-img">
                
            </div> 
             
            
            <div class="S-description">
            <h3>
                Michel Doukeris
            </h3>
            <i>
                Chief Executive Officer of Anheuser-Busch InBev
            </i>
            <hr>
            <p>
                Michel Doukeris has been named as the new CEO of brewery giant Anheuser-Busch InBev (AB InBev).
            </p>
            </div>
            </div>
            
            <div class="speaker-con">
                <div class="Gcon">
                    <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                    <img src="./images/HEINEKEN-Dolf-van-den-Brink-Picture-06-2020-cropped.jpeg" alt="a picture of Dolf van den Brink" class="speaker-img">
                    </div>
    
                <div class="S-description">
                <h3>
                    Dolf van den Brink
                </h3>
                <i>
                    Chief Executive Officer and Chairman of the Executive Board at Heineken N.V
                </i>
                <hr>
                <p>
                    Dolf van den Brink [4] was President of the Asia Pacific region and member of the Executive Team at Heineken N.V
                </p>
                </div>
                </div>
            </div>
            
            <div class="speaker-con">
                    <div class="Gcon">
                        <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                        <img src="./images/Hou Xiaohai.jpeg" alt="a picture of Hou Xiaohai" class="speaker-img">
                        </div>
                    
            
                    <div class="S-description">
                    <h3>
                        Hou Xiaohai
                    </h3>
                    <i>
                        Senior Partner and Managing Director for The Boston Consulting Group in Greater China
                    </i>
                    <hr>
                    <p>
                        China Resources Beer has been a leading player in the Chinese beer market.
                    </p>
                    </div>
                    </div>
                </div>
            
                <div class="speaker-con">
                        <div class="Gcon">
                            <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                            <img src="./images/Carlos-Brito-750x457.jpeg" alt="a picture of Carlos Brito" class="speaker-img">
                            </div>
    
                        <div class="S-description">
                        <h3>
                            Carlos Brito
                        </h3>
                        <i>
                            CEO of Anheuser-Busch InBev
                        </i>
                        <hr>
                        <p>
                            Carlos Alves de Brito is a Brazilian businessman who has served as CEO of Anheuser-Busch InBev since 2008
                        </p>
                        </div>
                        </div>
                    </div>
    
                    <div class="speaker-con">
                        <div class="Gcon">
                            <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                            <img src="./images/Carlos-Brito-750x457.jpeg" alt="a picture of Carlos Brito" class="speaker-img">
                            </div>
    
                        <div class="S-description">
                        <h3>
                            Carlos Brito
                        </h3>
                        <i>
                            CEO of Anheuser-Busch InBev
                        </i>
                        <hr>
                        <p>
                            Carlos Alves de Brito is a Brazilian businessman who has served as CEO of Anheuser-Busch InBev since 2008
                        </p>
                        </div>
                        </div>
                    </div>
    
                    <div class="speaker-con">
                        <div class="Gcon">
                            <img src="./images/checker-pattern.svg" alt="" class="grid-img">
                            <img src="./images/Carlos-Brito-750x457.jpeg" alt="a picture of Carlos Brito" class="speaker-img">
                            </div>
    
                        <div class="S-description">
                        <h3>
                            Carlos Brito
                        </h3>
                        <i>
                            CEO of Anheuser-Busch InBev
                        </i>
                        <hr>
                        <p>
                            Carlos Alves de Brito is a Brazilian businessman who has served as CEO of Anheuser-Busch InBev since 2008
                        </p>
                        </div>
                        </div>
                    </div>
    </article>
    
                <button class="b-s">
                    More <img src="./images/down-arrow.svg" alt="image of down arrow">
                </button>`;
speakers.innerHTML = speakersContent;