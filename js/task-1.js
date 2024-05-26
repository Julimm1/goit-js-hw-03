function slugify(title) {
    const lowerCaseTitle = title.toLowerCase(); // перетворюємо рядок на нижній регістр
    const words = lowerCaseTitle.split(" "); // Розділяємо рядок на слова за допомогою пробілів
    
    return words.join("-"); // З'єднуємо слова тире і повертаємо slug
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
