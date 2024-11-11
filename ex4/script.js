console.log('Hello World, I\'m script.js!');

const books = [
    {title: "1984", author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
  ];
  
  // Function to print books excluding George Orwell's book
  function printBooksExcludingOrwell() {
    const filteredBooks = books.filter(book => book.author !== "George Orwell");
    console.log(filteredBooks);
  }
  
  // Function to print books excluding Orwell's and Melville's books
  function printBooksExcludingOrwellAndMelville() {
    const filteredBooks = books.filter(book => book.author !== "George Orwell" && book.author !== "Herman Melville");
    console.log(filteredBooks);
  }
  
  // Call the functions to see the result in the console
  printBooksExcludingOrwell();
  printBooksExcludingOrwellAndMelville();
  
