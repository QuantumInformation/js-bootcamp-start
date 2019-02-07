var header = document.createElement("h1");
header.innerHTML = "Watch variables";
var subtitle = document.createElement("p");
subtitle.innerHTML = "These keep track of variables in the class";
document.body.appendChild(header);
document.body.appendChild(subtitle);
var sandbox = document.createElement("div");
sandbox.style.border = "1px solid black";
sandbox.id = "variables";
sandbox.innerHTML = `

<ul >
  <li id="item1"></li>
</ul>

`;
document.body.appendChild(sandbox);

let item1, item2, funtion1, object1;

setInterval(() => {
  document.querySelector("#item1").innerHTML = `item1 = ${item1}`;
}, 100);
