console.log("Задача 1. Пакування товарів");


// 1) Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// 2) Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

// 3) Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
// Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.


//------------------------------------------------------------------------------------------


function isEnoughCapacity(products, containerSize) {

    // 1) Отримати з product масив ключів
    const values = Object.values(products);
    // console.log(values);

    // 2) Отримати суму штук всіх продуктів
    let totalSize = 0;

    for (const value of values) {
        totalSize = totalSize + value;
    }
    // console.log(totalSize);
    
    // 3) Вказуємо порівняння і задаємо, що повернути
    if (totalSize <= containerSize) {
        return true
    } else {
        return false
    } 
}

//------------------------------------------------------------------------------------------

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

