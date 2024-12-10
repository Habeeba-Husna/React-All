// Saving data in Local Storage
localStorage.setItem("username", "Habeeba");

// Retrieving data from Local Storage
let username = localStorage.getItem("username");
console.log(username); // Outputs: "Habeeba"

// Removing data from Local Storage
localStorage.removeItem("username");

// Clearing all data in Local Storage
localStorage.clear();


// Storing the user's language preference
localStorage.setItem("preferredLanguage", "French");

// Retrieving the user's preferred language
const preferredLanguage = localStorage.getItem("preferredLanguage");
console.log(preferredLanguage); // Outputs: "French"

// Storing the user's progress in a lesson
localStorage.setItem("lessonProgress", JSON.stringify({ lesson: 1, completed: true }));

// Retrieving the user's lesson progress
const lessonProgress = JSON.parse(localStorage.getItem("lessonProgress"));
console.log(lessonProgress); // Outputs: { lesson: 1, completed: true }





