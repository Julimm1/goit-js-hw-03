function filterArray(numbers, value) {
    const Array = []; //порожній масив, у який будеш додавати підходящі числа
    //цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        //повертати новий масив лише тих чисел із масиву numbers, які більші за значення value
        //умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву
    if (numbers[i] > value) {
        Array.push(numbers[i]); //Поверни свій новий масив з підходящими числами як результат.

        } 
        
    }
    return Array;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
