function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      if (this.read === true) {
        return `${this.title} was written by ${this.author}. I have read it.`
      } else {
        return `${this.title} was written by ${this.author}. I haven't read it.`
      }
    },

    readBook() {
      return this.read = true;
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);


book1.getDescription(); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
book1.getDescription(); // Mythos was written by David Fry. I have read it.