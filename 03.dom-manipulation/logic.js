const content = document.querySelector(".container");

const para = document.createElement("p");
para.innerText = "Hey I'm a red"
para.style.color = "red";

content.appendChild(para);

const h1 = document.createElement("h3");
h1.innerText = "I'm a blue h3!"
h1.style.color = "blue";
content.appendChild(h1);

const div = document.createElement('div');

const h2 = document.createElement("h1");
h2.innerText = "I'm in a div";
h2.style.color = "blue";

const para2 = document.createElement("p");
para2.innerText = "ME TOO!"
para2.style.color = "red";

div.style.border = "2px solid black";
div.style['background-color'] = "pink";

div.appendChild(h2);
div.appendChild(para2);
content.appendChild(div);




