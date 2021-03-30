// console.log("This is my profile page")



window.addEventListener("DOMContentLoaded", event => {
  // Your Javascript goes here

  let h1 = document.createElement('h1');
  h1.setAttribute('id', 'name');

  // let textInh1 = document.createTextNode('Walter White');

  h1.innerHTML = "Walter White"

  // h1.appendChild(textInh1);

  document.body.appendChild(h1);

  let list = document.createElement("ul");

  
  const listItem1 = document.createElement("li");
  li.setAttribute("class", "description")

  const listItem1Content = document.createTextNode(
    "I am a high school chemistry teacher."
  );
  listItem1.appendChild(listItem1Content);

  const listItem2 = document.createElement("li");
  const listItem2Content = document.createTextNode(
    "I live in ABQ, New Mexico."
  );
  listItem2.appendChild(listItem2Content);

  const listItem3 = document.createElement("li");
  const listItem3Content = document.createTextNode(
    "I have a wife and two children."
  );
  listItem3.appendChild(listItem3Content);

  const listItem4 = document.createElement("li");
  const listItem4Content = document.createTextNode(
    "My brother-in-law is a DEA agent."
  );
  listItem4.appendChild(listItem4Content);

  list.appendChild(listItem1Content)
  list.appendChild(listItem2Content)
  list.appendChild(listItem3Content)
  list.appendChild(listItem4Content)
  document.body.appendChild(list)
});
