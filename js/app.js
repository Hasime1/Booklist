//Elem. selection
const book = document.querySelector("#book-name");
const author = document.querySelector("#author-name");
const year = document.querySelector("#published-year");
const submit = document.querySelector(".btn");
const list = document.querySelector(".book-list");

//Add eventlistener
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (book.value == "" && author.value == "" && year.value == "") {
    // alert("Please fill out all the input boxes");
    //Warning class
    book.classList.add("warning");
    author.classList.add("warning");
    year.classList.add("warning");

    //Warning text
    book.setAttribute("placeholder", "Write a book name");
    author.setAttribute("placeholder", "Write an author name");
    year.setAttribute("placeholder", "Write the published year");

    function removeWarning() {
      book.classList.remove("warning");
      author.classList.remove("warning");
      year.classList.remove("warning");

      //Warning text removed
      book.setAttribute("placeholder", "");
      author.setAttribute("placeholder", "");
      year.setAttribute("placeholder", "");
    }
    setTimeout(removeWarning, 1024);
  } else if (book.value == "") {
    //For individual warning
    book.classList.add("warning");
    book.setAttribute("placeholder", "Write a book name!");
    function removeNameWarning() {
      book.classList.remove("warning");
      book.setAttribute("placeholder", "");
    }
    setTimeout(removeNameWarning, 1024);
    // alert("Please fill Book Name!");
  } else if (author.value == "") {
    //For individual warning
    author.classList.add("warning");
    author.setAttribute("placeholder", "Write an author name!");
    function removeAuthorWarning() {
      author.classList.remove("warning");
      author.setAttribute("placeholder", "");
    }
    setTimeout(removeAuthorWarning, 1024);
    // alert("Please fill Author Name!");
  } else if (year.value == "") {
    // alert("Please fill Published Year! ");
    //For individual warning
    year.classList.add("warning");
    year.setAttribute("placeholder", "Write a published year!");
    function removeYearWarning() {
      year.classList.remove("warning");
      year.setAttribute("placeholder", "");
    }
    setTimeout(removeYearWarning, 1024);
  } else {
    //Row creation & Register
    const newRow = document.createElement("tr");
    list.appendChild(newRow);

    //New book column creation
    const newBookColumn = document.createElement("th");
    newRow.appendChild(newBookColumn);
    newBookColumn.innerText = book.value;

    //New Author column creation
    const newAuthorColumn = document.createElement("th");
    newRow.appendChild(newAuthorColumn);
    newAuthorColumn.innerText = author.value;

    //New Published Year column creation
    const newYearColumn = document.createElement("th");
    newRow.appendChild(newYearColumn);
    newYearColumn.innerText = year.value;
  }

  //Blank all the box after input taken
  book.value = "";
  author.value = "";
  year.value = "";
});
