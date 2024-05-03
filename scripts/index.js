const page2 = document.querySelector('.next');

const page1 = document.querySelector('.prev');

page2.addEventListener('click', () => {
    const gray = document.querySelector('.gray');
    gray.innerHTML = `<img class="john-img" src="images/image-tanya.jpg">`;

    const text = document.querySelector('.text');

    text.innerHTML = `<p class="profile">“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”</p>
    
    <br>
    <p><span class="john">Tanya Sinclair</span>
     <br>
     <span class="front-end"> UX Engineer</span></p>`

});

page1.addEventListener('click', () => {
    const gray = document.querySelector('.gray');
    gray.innerHTML = `<img class="john-img" src="images/image-john.jpg">`;

    const text = document.querySelector('.text');

    text.innerHTML = `<p class="profile">“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”</p>
    
    <br>
    <p><span class="john">John Tarkpor</span>
     <br>
     <span class="front-end">Junior Front-end Developer</span></p>`
});

