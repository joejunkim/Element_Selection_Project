// console.log("This is my profile page")



window.addEventListener("DOMContentLoaded", event => {
  // Your Javascript goes here

  let h1 = document.createElement('h1');
  h1.setAttribute('id', 'name');

  // let textInh1 = document.createTextNode('Walter White');

  h1.innerHTML = "Walter White"

  // h1.appendChild(textInh1);

  document.body.appendChild(h1);

  // let list = document.createElement("ul");


  // const listItem1 = document.createElement("li");
  // // li.setAttribute("class", "description")

  // const listItem1Content = document.createTextNode(
  //   "I am a high school chemistry teacher."
  // );
  // listItem1.appendChild(listItem1Content);

  //Another method
  //list.innerHTML = '<li>I live in NM</li>'

  // const listItem2 = document.createElement("li");
  // const listItem2Content = document.createTextNode(
  //   "I live in ABQ, New Mexico."
  // );
  // listItem2.appendChild(listItem2Content);

  // const listItem3 = document.createElement("li");
  // const listItem3Content = document.createTextNode(
  //   "I have a wife and two children."
  // );
  // listItem3.appendChild(listItem3Content);

  // const listItem4 = document.createElement("li");
  // const listItem4Content = document.createTextNode(
  //   "My brother-in-law is a DEA agent."
  // );
  // listItem4.appendChild(listItem4Content);

  // list.appendChild(listItem1)
  // list.appendChild(listItem2)
  // list.appendChild(listItem3)
  // list.appendChild(listItem4)
  // document.body.appendChild(list)

  let list = document.createElement('ul');

  list.setAttribute('id', 'description');
  list.setAttribute('class', 'details')
  document.body.appendChild(list);

  const clock = document.createElement("span");
  // document.body.appendChild(clock);

  const getTime = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
  }
  // let ourUL = document.getElementById("description")
  // console.log(ourUL)
  // console.log(newListItem)

  let time = setInterval(getTime, 1000);
  let test = "time"
  const detailsArr = [
    "<li>I am a high school chemistry teacher.</li>",
    "<li>I live in ABQ, New Mexico.</li>",
    "<li>I have a wife and two children.</li>",
    "<li>My brother-in-law is a DEA agent.</li>",
  ];

  const liString = detailsArr.join(" ");

  const listElement = document.getElementById("description");
  // console.log(listElement);
  listElement.innerHTML = liString;
  let newListItem = document.createElement("li")
  newListItem.setAttribute("id", "date")
  newListItem.innerHTML = "The current time is "
  newListItem.appendChild(clock)
  listElement.appendChild(newListItem)

  let indivListEle = document.querySelectorAll('li');   //this is to get those list items --> this is a NodeList
  // console.log(indivListEle);

  indivListEle.forEach((item) => {                   //iterating through list items NodeList to setAttribute of each
    item.setAttribute('class', 'detail')
    //Another method to set class name, use className property
    // item.className = 'detail'            //not a method, is a property
  })

  // li.setAttribute("class", "detail")

  //  <img src="walterwhite.jpeg" alt= 'walter white'>
  let image = document.createElement('img')
  image.src = 'walterwhite.jpeg'
  document.body.appendChild(image)

  let gettingH1 = document.getElementById('name');
  gettingH1.appendChild(image)





});
