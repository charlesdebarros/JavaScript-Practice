var myBox = {
  height: 6,
  length: 10,
  widht: 12,
  volume: 720,
  weight: 24,
  material: "cardboard",
  destination1: "Orlando",
  destination2: "Miami",
  "# of Books": 0
};

function addBook(box, name, writer){
  box["# of Books"]++;
  box["book" + box["# of Books"]] = {title: name, author: writer};
};

addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "Pride and Prejudice", "Jane Austen");
addBook(myBox, "Middlemarch", "George Eliot");
