class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      if (this._ratings.length === 0) return 0; // Avoid division by zero
      const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this._ratings.length;
    }
  
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  // Example usage
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  console.log(historyOfEverything.title); // Output: A Short History of Nearly Everything
  console.log(historyOfEverything.author); // Output: Bill Bryson
  console.log(historyOfEverything.pages); // Output: 544
  console.log(historyOfEverything.isCheckedOut); // Output: false
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating()); // Output: 4.5
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut); // Output: true
  console.log('__________________________\n')
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  console.log(`Movie title ${speed.title}`); // Output: movie title => speed
  console.log(`Directed by ${speed.director}`)
  speed.toggleCheckOutStatus()
  console.log(`Checkout status: ${speed.isCheckedOut}`) // Output: true
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(`Average rating: ${speed.getAverageRating()}`)