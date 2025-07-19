 //  DOM = Document Object Model
    // JavaScript can be used to access and manipulate HTML elements using the DOM

    //  1. Query Selector (Selects the FIRST matching element)

    // Select by tag name
    const body = document.querySelector("body");
    console.log("BODY ELEMENT:", body);

    // Select by class (only first match)
    const firstParagraph = document.querySelector(".paragraph");
    console.log("First paragraph:", firstParagraph.innerText);

    // Select by ID
    const username = document.querySelector("#username");
    console.log("Username span:", username.innerText);

    //  2. Changing the text content
    username.innerText = "Khan";  // Updates "Mujib" to "Khan"

    //  3. Changing HTML inside an element
    body.innerHTML += "<p style='color: green;'>DOM is powerful!</p>";

    //  4. Changing CSS using JavaScript
    username.style.color = "blue";
    username.style.fontWeight = "bold";

    //  5. Event Listener Example (Click to change name)
    const button = document.querySelector("#changeNameBtn");
    button.addEventListener("click", () => {
      username.innerText = "Mujib ur Rahman";
      alert("Username changed!");
    });

    //  6. querySelectorAll → selects ALL matching elements
    const allParagraphs = document.querySelectorAll(".paragraph");
    console.log("All paragraphs:", allParagraphs);

    allParagraphs.forEach((p, index) => {
      p.style.backgroundColor = index % 2 === 0 ? "#f0f0f0" : "#e0e0e0";
    });

    //  7. Create and append new element
    const newPara = document.createElement("p");
    newPara.innerText = "This is a new paragraph added with JavaScript!";
    newPara.style.color = "purple";
    body.appendChild(newPara);