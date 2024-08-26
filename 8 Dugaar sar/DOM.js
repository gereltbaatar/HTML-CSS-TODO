// const data = [
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
//   {
//     title: "title 1",
//     description: "description 1",
//     likeCount: 3,
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//   const articlaElement = document.createElement("div");
//   articlaElement.style =
//     "width: 200px; heidth: 200px; margin: 10px; padding: 10px; border: 1px solid black; border-radius: 20px";

//   articlaElement.innerHTML = `
//   <h1>${data[i].title}</h1>
//   <p>${data[i].description}</p>
//   <p>${data[i].likeCount}</p>
//   `;
//   document.body.appendChild(articlaElement);
// }

// id selector, classname selector, tagname ashiglan doort elementiig select hiine uu
// <h1 id="title">Welcome to DOM Manipulation</h1>
// <p class="description">This is a paragraph.
// </p><button id="changeTextButton">Change Text</button>

//       2. Doorh div dotor p tag dotor "Hello World" gesen ugtei text nemne uu

// <div id="addChild"></div>

//       3. Doorh p tag dotor baigaa text iig Hello Pinecone bolgoj uurchilnu uu

// <p id="editText">   Hello World  </p>

//       4. p , div, span gesen elementiig div dotor uusgene uu

// <div id="create"></div>

// dasgal tusgaarlalt__________________________________________________________________________

// document.getElementById("title").innerText = "welcome to my world";
// document.getElementsByClassName("description")[0].innerText = "red";
// document.getElementById("changeTextButton").innerText = "chanjid red";

// dasgal tusgaarlalt__________________________________________________________________________

// const addP = document.createElement("p");

// document.getElementById("addChild").appendChild(addP);

// document.getElementsByTagName("p")[0].innerText = "hello world";

// document.getElementById("editText").innerText = "Hello Pinecone";

// dasgal tusgaarlalt__________________________________________________________________________

// const Padd = document.createElement("p");

// document.getElementById("create").appendChild(Padd);

// const DivAdd = document.createElement("div");

// document.getElementById("create").appendChild(DivAdd);

// const SpanAdd = document.createElement("span");

// document.getElementById("create").appendChild(SpanAdd);

// dasgal tusgaarlalt__________________________________________________________________________

// Write a script to change the text content of all paragraphs to "Updated Paragraph" using a for loop.
// <p class="text">Paragraph 1</p>
// <p class="text">Paragraph 2</p>
// <p class="text">Paragraph 3</p>

//       2. Write a script to add 5 list items to the unordered list using a for loop

// <ul id="itemList"></ul>

//       3.  Write a script to change the class of each paragraph to "highlight" using a for loop.

// <p class="text">Paragraph 1</p>
// <p class="text">Paragraph 2</p>
// <p class="text">Paragraph 3</p>

//      4. Write a script to append 5 list items to the unordered list, but only append items with even numbers.

// <ul id="itemList"></u
// const update = document.getElementsByClassName("text");

// dasgal tusgaarlalt__________________________________________________________________________

// for (let i = 0; i < 3; i++) {
//   update[i].innerHTML = "Update Paragraph";
// }

// dasgal tusgaarlalt__________________________________________________________________________

// for (let i = 0; i < 3; i++) {
//   document.getElementsByClassName("text")[i].innerHTML = "update";
// }

// dasgal tusgaarlalt__________________________________________________________________________

// const data = [
//   {
//     likeCount: 1,
//   },
//   {
//     likeCount: 2,
//   },
//   {
//     likeCount: 3,
//   },
//   {
//     likeCount: 4,
//   },
//   {
//     likeCount: 5,
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//   const liAdd = document.createElement("li");

//   liAdd.innerHTML = `
//   <li>${data[i].likeCount}</li>

//   `;
//   document.getElementById("itemList").appendChild(liAdd);
// }

// dasgal tusgaarlalt__________________________________________________________________________
