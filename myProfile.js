// console.log("This is my profile page")



window.addEventListener("DOMContentLoaded", event => {
  // Your Javascript goes here

  let h1 = document.createElement('h1');
  h1.setAttribute('id', 'name');

  let textInh1 = document.createTextNode('Walter White');

  h1.appendChild(textInh1);


  document.body.appendChild(h1);



});
