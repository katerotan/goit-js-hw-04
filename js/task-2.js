console.log("\n");
console.log("Задача 2. Розрахунок калорій ");

// 1) Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня.

// 2) Функція очікує один параметр: days — масив об’єктів.

// 3) Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.



//---------ЦЕЙ ВАРІАНТ РОЗВ'ЯЗАЛА САМА ПЕРШИЙ РАЗ, АЛЕ ВІН НЕ ДУЖЕ ПРАВИЛЬНИЙ--------------------------------------------------
//---------БО ДНІВ МОЖЕ БУТИ В РЕАЛЬНОСТІ БІЛЬШЕ 7, А КЛЮЧІВ ІЗ ПОКАЗНИКАМИ БІЛЬШЕ ДВОХ----------------------------------------
//---------ЗА ТЕ ПОВТОРИЛА Методи, перебори, rest------------------------------------------------------------------------------

function calcAverageCalories(days) {
   
    // 1) Треба витягнути всі значення калорій у маси та додати їх, а потім поділити на кількість днів

    let totalCalories = 0;

    for (const day of days) {
        // console.log(day);
        // 2) Витягаємо всі значення
        const value = Object.values(day);
        // console.log(value);
        // 3) Робим копію з крайнього значення (де калорії) та робимо rest щоб перетворити масив на число
        // console.log(Number(...value.slice(-1)));
        // 4) Робимо суму вже числових значень
        totalCalories = totalCalories + Number(...value.slice(-1));
    }
    // console.log(totalCalories);
    // 5) Шукаємо середнє арифметичне

    return totalCalories / 7;

}


// //---------ДРУГИЙ ВАРІАНТ УНІЕРСАЛЬНИЙ (я розібралася в ньому)------------------------------------------------------------------------------

// function calcAverageCalories(days) {
//   // Для того, щоб при пустому масиві повернувся нуль.
//   if (days.length === 0) {
//     return 0; // Повертаємо 0, якщо немає даних
//   }

//   let totalCalories = 0;

//     // для доступу до показника ключа calories кожного [i] дня значення перебираємо масив через for ітерацію
//     // кількість ітерацій обмежуємо довжиною масива журналу спортмена (тобто кілкість дні, яка може бутибудь-якою)
//   for (let i = 0; i < days.length; i++) {
//     totalCalories += days[i].calories;
//   }

//   // Обчислюємо середньодобову кількість калорій
//   const averageCalories = totalCalories / days.length;

//   return averageCalories;
// }


//------------------------------------------------------------------------------------------
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0