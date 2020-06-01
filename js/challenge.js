let counter = document.querySelector('#counter');
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');
let heartBtn = document.querySelector('#heart');
let pauseBtn = document.querySelector('#pause');
let likeslist = document.querySelector('.likes');
let submitCommentBtn = document.querySelector('#submit');
let commentForm = document.querySelector('#comment-form');
let commentField = document.querySelector('#comment-input');
let commentList = document.querySelector('#list');
let timer = window.setInterval(function(){
                incrementCounter()
            }, 1000);
minusBtn.addEventListener('click', (e) => {
    decrementCounter();
});

plusBtn.addEventListener('click', (e) => {
    incrementCounter();
});

heartBtn.addEventListener('click', (e) => {
    createLike();
});

pauseBtn.addEventListener('click', (e) => {
    pauseTimer();
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createComment();
});


function pauseTimer() {
    console.log(pauseBtn.textContent.trim() == "pause");
    if(pauseBtn.textContent.trim() == "pause") {
        pauseBtn.textContent = "resume";
        submitCommentBtn.disabled = true;
        clearInterval(timer);
    } else if (pauseBtn.textContent.trim() == "resume") {
        pauseBtn.textContent = "pause";
        submitCommentBtn.disabled = false;
        timer = window.setInterval(function(){
                    incrementCounter()
                }, 1000);
    }
}

function createLike() {
    let like = document.createElement('li');
    like.textContent = `${parseInt(counter.textContent)} has been liked 1 time`;
    likeslist.appendChild(like);
}

function incrementCounter() {
    counter.textContent = parseInt(counter.textContent) + 1;
}

function decrementCounter() {
    counter.textContent = parseInt(counter.textContent) - 1;
}

function createComment() {
    let comment = document.createElement('li');
    comment.textContent = commentField.value;
    commentList.appendChild(comment);
}
