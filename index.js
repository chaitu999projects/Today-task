let bodyEle = document.getElementById("body");

// Create and append navbar first
let navEle = document.createElement('nav');
navEle.classList.add('navbar');
bodyEle.appendChild(navEle);

let ancherTag = document.createElement('a');
ancherTag.textContent = "My Website";
navEle.appendChild(ancherTag);

let ulEle = document.createElement('ul');
ulEle.classList.add('list-items')
navEle.appendChild(ulEle);

let liEle1 = document.createElement('li');
liEle1.textContent = "Home";
let liEle2 = document.createElement('li');
liEle2.textContent = "About"
let liEle3 = document.createElement('li');
liEle3.textContent = "Feedback"
let liEle4 = document.createElement('li');
liEle4.textContent = "Contact"

ulEle.appendChild(liEle1);
ulEle.appendChild(liEle2);
ulEle.appendChild(liEle3);
ulEle.appendChild(liEle4);

// Create and append home page section
let sectionEle = document.createElement('section'); // Create new section instead of getting by ID
sectionEle.id = 'homePage';
sectionEle.classList.add('home-page');
//
bodyEle.appendChild(sectionEle); // Append after navbar

let h1Ele = document.createElement('h1');
h1Ele.textContent = 'Welcome To My Website';
h1Ele.style.textAlign = "center";
sectionEle.appendChild(h1Ele);

let pEle = document.createElement('p');
pEle.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?";
pEle.style.textAlign = "center";
sectionEle.appendChild(pEle);

// Create and append content sections
function createContent(id, title) {
    let contentSection = document.createElement('section');
    contentSection.id = id;
    bodyEle.appendChild(contentSection);
    
    let content = document.createElement('div');
    contentSection.appendChild(content);
    
    let h2Ele = document.createElement('h2');
    h2Ele.textContent = title;
    content.appendChild(h2Ele);
    
    let des = document.createElement('p');
    des.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!";
    content.appendChild(des);
    
    return contentSection;
}

// Create two content sections
createContent('content1', 'Content one');
createContent('content2', 'Content two');
