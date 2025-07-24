// 1. Local storage :- [Paramenent]
// -> Local storage in JavaScript is a property of the window object that allow web application to store key-value paies in a web browser, with no expiraton time.
// -> The data stored in local storage persists even after the browser window or tab is closed and reopened, or the page is refreshed.
// -> Local storage typically allows about 5-10MB per domain....
// -> The key of data must be unique else the data got over written

// 2. Sassion storage :- [Use only open tab]
// -> Session storage in JavaScript is a mechanism for storing key-value pairs of data within a user's browser, accessible only for the duration of a specific page session. It is part of the Web Storage API, offering a way to store temporary data on the client side.
// -> Session storage around 5MB....

// 3. Cookies :- [small pieces of data]
// -> Cookies in JavaScript are small pieces of data stored on a user's browser.
// -> Cookies are limited about 4KB per cookies....


localStorage.setItem("Student","Rohit")
localStorage.setItem("Student2","Punit")
// The key of data must be unique else the data got over written
localStorage.removeItem("Student")
localStorage.clear() // Remove all data [key/value]
let data = localStorage.getItem("Student")
console.log(data)

sessionStorage.setItem("Student","Heet")
sessionStorage.getItem("Student")
