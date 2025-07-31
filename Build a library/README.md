# 📚 Build a Library

**Build a Library** is an object-oriented programming project where I designed a simple digital library system for *Books-‘N-Stuff*, a fictional media store. It supports managing books, CDs, and movies through a shared class structure.

---

## 🧱 Structure

At the core is a base class:

- **`Media`**: common properties and methods shared by all media types

Extended by three subclasses:

- **`Book`**: `_author`, `_pages`, `_title`
- **`Movie`**: `_director`, `_runTime`, `_title`
- **`CD`**: `_artist`, `_songs[]`, `_title`

Each subclass also includes:

- ✅ **`toggleCheckOutStatus()`** – toggles availability  
- ⭐ **`addRating(rating)`** – adds a numeric rating  
- 📊 **`getAverageRating()`** – calculates average from all ratings  

---

## 🎯 Key Features

- Inheritance and encapsulation using class-based OOP
- Dynamic media handling with reusable methods
- Ratings and availability logic built in

---

## 💡 What I Learned

This project strengthened my understanding of:

- Class inheritance and reuse
- Encapsulation and private properties
- Writing maintainable, extensible code

---

## 🚀 Example Usage

```js
// Example usage
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything.title); // Output: A Short History of Nearly Everything
console.log(historyOfEverything.author); // Output: Bill Bryson
console.log(historyOfEverything.pages); // Output: 544
console.log(historyOfEverything.isCheckedOut); // Output: false
historyOfEverything.addRating(4); //1st addition for a list of ratings  
historyOfEverything.addRating(5); //2nd addition for a list of ratings 
historyOfEverything.addRating(5); //3rd addition for a list of ratings 
console.log(historyOfEverything.getAverageRating()); // 4.666666667
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
/*Example output for child class 
Movie title Speed
Directed by Jan de Bont
Checkout status: true
Average rating: 2.3333333333333335
*/
