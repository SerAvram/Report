// Визначаємо функції displayContent та createSubMenu у глобальному контексті
function displayContent(labNumber) {
    // console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.querySelector(".test").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    if (labNumber === 1) {
        // Встановити зміст лабораторної роботи для першої роботи
        labContent = `
            <h3>Лабораторна робота № 1</h3>
        `;
        // Створити меню змісту для першої роботи
        createSubMenu(1);
    }
    if (labNumber === 2) {
        labContent = `
            <h3>Лабораторна робота № 2</h3>
        `;
        createSubMenu(2);
    }

    if (labNumber === 3) {
        labContent = `
            <h3>Лабораторна робота № 3</h3>
        `;
        createSubMenu(3);
    }

    if (labNumber === 4) {
        labContent = `
            <h3>Лабораторна робота № 4</h3>
        `;
        createSubMenu(4);
    }

    if (labNumber === 5) {
        labContent = `
            <h3>Лабораторна робота № 5</h3>
        `;
        createSubMenu(5);
    }

    if (labNumber === 6) {
        labContent = `
            <h3>Лабораторна робота № 6</h3>
        `;
        createSubMenu(6);
    }

    if (labNumber === 7) {
        labContent = `
            <h3>Лабораторна робота № 7</h3>
        `;
        createSubMenu(7);
    }

    if (labNumber === 8) {
        labContent = `
            <h3>Лабораторна робота № 8</h3>
        `;
        createSubMenu(8);
    }
    if (labNumber === 9) {
        labContent = `
            <h3>Лабораторна робота № 9</h3>
        `;
        createSubMenu(9);
    }
    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;

    // Після створення меню змісту налаштовуємо розміри кнопок
    adjustButtonSizes();
}

function createSubMenu(labNumber) {
    let menu = document.querySelector(".test");
    console.log(labNumber)
    // Тут можна додати кнопки для меню змісту
    if (labNumber === 1) {

    let button1 = document.createElement("button");
    button1.textContent = "Опис предметного середовища";
    button1.onclick = function() {
        displaySubMenuContent("Опис предметного середовища");
    };
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.textContent = "Тема Мета Місце розташування ЛР №1";
    button2.onclick = function() {
        displaySubMenuContent("Тема Мета Місце розташування ЛР №1");
    };
    menu.appendChild(button2);

    let button3 = document.createElement("button");
    button3.textContent = "СТРУКТУРА ДОКУМЕНТУ";
    button3.onclick = function() {
        displaySubMenuContent("СТРУКТУРА ДОКУМЕНТУ");
    };
    menu.appendChild(button3);

    let button4 = document.createElement("button");
    button4.textContent = "HTML-код ТАБЛИЦЬ";
    button4.onclick = function() {
        displaySubMenuContent("HTML-код ТАБЛИЦЬ");
    };
    menu.appendChild(button4);

    let button5 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button5);

    let button6 = document.createElement("button");
    button6.textContent = "HTML-код ЗОБРАЖЕННЯ";
    button6.onclick = function() {
        displaySubMenuContent("HTML-код ЗОБРАЖЕННЯ");
    };
    menu.appendChild(button6);

    let button7 = document.createElement("button");
    button7.textContent = "ВИСНОВКИ";
    button7.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ");
    };
    menu.appendChild(button7);
}

else if (labNumber === 2) {
    
    let button21 = document.createElement("button");
    button21.textContent = "Тема, мета ЛР №2. Місце розташування сайту, звіту";
    button21.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №2. Місце розташування сайту, звіту");
    };
    menu.appendChild(button21);

    let button22 = document.createElement("button");
    button22.textContent = "Способи підключення стилів";
    button22.onclick = function() {
        displaySubMenuContent("Способи підключення стилів");
    };
    menu.appendChild(button22);

    let button23 = document.createElement("button");
    button23.textContent = "СЕЛЕКТОРИ";
    button23.onclick = function() {
        displaySubMenuContent("СЕЛЕКТОРИ");
    };
    menu.appendChild(button23);

    let button24 = document.createElement("button");
    button24.textContent = "Селектори тегу";
    button24.onclick = function() {
        displaySubMenuContent("Селектори тегу");
    };
    menu.appendChild(button24);

    let button25 = document.createElement("button");
    button25.textContent = "Селектори класу";
    button25.onclick = function() {
        displaySubMenuContent("Селектори класу");
    };
    menu.appendChild(button25);

    let button26 = document.createElement("button");
    button26.textContent = "Селектори ідентифікаторів";
    button26.onclick = function() {
        displaySubMenuContent("Селектори ідентифікаторів");
    };
    menu.appendChild(button26);

    let button27 = document.createElement("button");
    button27.textContent = "Інші селектори";
    button27.onclick = function() {
        displaySubMenuContent("Інші селектори");
    };
    menu.appendChild(button27);

    let button28 = document.createElement("button");
    button28.textContent = "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки";
    button28.onclick = function() {
        displaySubMenuContent("CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки");
    };
    menu.appendChild(button28);

    let button29 = document.createElement("button");
    button29.textContent = "ВИСНОВКИ до ЛР №2";
    button29.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №2");
    };
    menu.appendChild(button29);
}

else if (labNumber === 3) {
    
    let button301 = document.createElement("button");
    button301.textContent = "Тема, мета ЛР №3. Місце розташування сайту, звіту";
    button301.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №3 Місце розташування сайту, звіту");
    };
    menu.appendChild(button301);

    let button302 = document.createElement("button");
    button302.textContent = "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету";
    button302.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету");
    };
    menu.appendChild(button302);

    let button303 = document.createElement("button");
    button303.textContent = "ЗАВДАННЯ №2";
    button303.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2");
    };
    menu.appendChild(button303);

    let button304 = document.createElement("button");
    button304.textContent = "Фіксована таблична верстка";
    button304.onclick = function() {
        displaySubMenuContent("Фіксована таблична верстка");
    };
    menu.appendChild(button304);

    let button305 = document.createElement("button");
    button305.textContent = "Гумова таблична верстка";
    button305.onclick = function() {
        displaySubMenuContent("Гумова таблична верстка");
    };
    menu.appendChild(button305);

    let button306 = document.createElement("button");
    button306.textContent = "Фіксована блокова верстка";
    button306.onclick = function() {
        displaySubMenuContent("Фіксована блокова верстка");
    };
    menu.appendChild(button306);

    let button307 = document.createElement("button");
    button307.textContent = "Гумова блокова верстка";
    button307.onclick = function() {
        displaySubMenuContent("Гумова блокова верстка");
    };
    menu.appendChild(button307);

    let button308 = document.createElement("button");
    button308.textContent = "ЗАВДАННЯ №3 FLEXBOX";
    button308.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 FLEXBOX");
    };
    menu.appendChild(button308);

    let button309 = document.createElement("button");
    button309.textContent = "Зовнішній вигляд сторінки";
    button309.onclick = function() {
        displaySubMenuContent("Зовнішній вигляд сторінки");
    };
    menu.appendChild(button309);

    let button310 = document.createElement("button");
    button310.textContent = "HTML-код";
    button310.onclick = function() {
        displaySubMenuContent("HTML-код");
    };
    menu.appendChild(button310);

    let button311 = document.createElement("button");
    button311.textContent = "CSS-код сторінки";
    button311.onclick = function() {
        displaySubMenuContent("CSS-код сторінки");
    };
    menu.appendChild(button311);

    let button312 = document.createElement("button");
    button312.textContent = "ВИСНОВКИ до ЛР №3";
    button312.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №3");
    };
    menu.appendChild(button312);
}

else if (labNumber === 4) {
    
    let button401 = document.createElement("button");
    button401.textContent = "Тема, мета ЛР №4. Місце розташування сайту, звіту";
    button401.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №4 Місце розташування сайту, звіту");
    };
    menu.appendChild(button401);

    let button402 = document.createElement("button");
    button402.textContent = "ЗАВДАННЯ №1 Визначення брейкпоінтів";
    button402.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Визначення брейкпоінтів");
    };
    menu.appendChild(button402);

    let button403 = document.createElement("button");
    button403.textContent = "ЗАВДАННЯ №2 Виконання адаптивної верстки";
    button403.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2 Виконання адаптивної верстки");
    };
    menu.appendChild(button403);

    let button404 = document.createElement("button");
    button404.textContent = "ЗАВДАННЯ №3 Пояснення створених версій";
    button404.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 Пояснення створених версій");
    };
    menu.appendChild(button404);


    let button406 = document.createElement("button");
    button406.textContent = "ВИСНОВКИ до ЛР №4";
    button406.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №4");
    };
    menu.appendChild(button406);
}

else if (labNumber === 5) {
    let button501 = document.createElement("button");
    button501.textContent = "Постановка задачі ЛР № 5";
    button501.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 5");
    };
    menu.appendChild(button501);

    let button502 = document.createElement("button");
    button502.textContent = "Способи функціонального застосування JS";
    button502.onclick = function() {
        displaySubMenuContent("Способи функціонального застосування JS");
    };
    menu.appendChild(button502);

    let button503 = document.createElement("button");
    button503.textContent = "Схема URL";
    button503.onclick = function() {
        displaySubMenuContent("Схема URL");
    };
    menu.appendChild(button503);

    let button504 = document.createElement("button");
    button504.textContent = "Обробник подій";
    button504.onclick = function() {
        displaySubMenuContent("Обробник подій");
    };
    menu.appendChild(button504);

    let button505 = document.createElement("button");
    button505.textContent = "Підстановка (entity)";
    button505.onclick = function() {
        displaySubMenuContent("Підстановка (entity)");
    };
    menu.appendChild(button505);

    let button506 = document.createElement("button");
    button506.textContent = "Вставка (тег SCRIPT)";
    button506.onclick = function() {
        displaySubMenuContent("Вставка (тег SCRIPT)");
    };
    menu.appendChild(button506);

    let button507 = document.createElement("button");
    button507.textContent = "Виконання завдання 3";
    button507.onclick = function() {
        displaySubMenuContent("Виконання завдання 3");
    };
    menu.appendChild(button507);

    let button508 = document.createElement("button");
    button508.textContent = "Виконання завдання 5";
    button508.onclick = function() {
        displaySubMenuContent("Виконання завдання 5");
    };
    menu.appendChild(button508);

    let button509 = document.createElement("button");
    button509.textContent = "Виконання завдання 7";
    button509.onclick = function() {
        displaySubMenuContent("Виконання завдання 7");
    };
    menu.appendChild(button509);

    let button510 = document.createElement("button");
    button510.textContent = "Виконання завдання 5.1";
    button510.onclick = function() {
        displaySubMenuContent("Виконання завдання 5.1");
    };
    menu.appendChild(button510);
   
    let button511 = document.createElement("button");
    button511.textContent = "ВИСНОВКИ за ЛР №5";
    button511.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №5");
    };
    menu.appendChild(button511);
}

else if (labNumber === 6) {
    let button601 = document.createElement("button");
    button601.textContent = "Постановка задачі ЛР № 6";
    button601.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 6");
    };
    menu.appendChild(button601);

    let button602 = document.createElement("button");
    button602.textContent = "Виконання завдання 1";
    button602.onclick = function() {
        displaySubMenuContent("Виконання завдання 13");
    };
    menu.appendChild(button602);

    let button603 = document.createElement("button");
    button603.textContent = "Виконання завдання 3";
    button603.onclick = function() {
        displaySubMenuContent("Виконання завдання 33");
    };
    menu.appendChild(button603);

    let button604 = document.createElement("button");
    button604.textContent = "Виконання завдання 5";
    button604.onclick = function() {
        displaySubMenuContent("Виконання завдання 53");
    };
    menu.appendChild(button604);

    let button605 = document.createElement("button");
    button605.textContent = "Виконання завдання 7";
    button605.onclick = function() {
        displaySubMenuContent("Виконання завдання 73");
    };
    menu.appendChild(button605);

    let button606 = document.createElement("button");
    button606.textContent = "Виконання завдання 8";
    button606.onclick = function() {
        displaySubMenuContent("Виконання завдання 83");
    };
    menu.appendChild(button606);

    let button607 = document.createElement("button");
    button607.textContent = "Виконання завдання 9";
    button607.onclick = function() {
        displaySubMenuContent("Виконання завдання 93");
    };
    menu.appendChild(button607);

    let button608 = document.createElement("button");
    button608.textContent = "Виконання завдання 10";
    button608.onclick = function() {
        displaySubMenuContent("Виконання завдання 103");
    };
    menu.appendChild(button608);
   
    let button609 = document.createElement("button");
    button609.textContent = "ВИСНОВКИ за ЛР №6";
    button609.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №6");
    };
    menu.appendChild(button609);
}

else if (labNumber === 7) {
    
    let button701 = document.createElement("button");
    button701.textContent = "Постановка задачі ЛР № 7";
    button701.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 7");
    };
    menu.appendChild(button701);

    let button702 = document.createElement("button");
    button702.textContent = "Виконання завдання 1";
    button702.onclick = function() {
        displaySubMenuContent("Виконання завдання 12");
    };
    menu.appendChild(button702);

    let button703 = document.createElement("button");
    button703.textContent = "Виконання завдання 2";
    button703.onclick = function() {
        displaySubMenuContent("Виконання завдання 22");
    };
    menu.appendChild(button703);

    let button704 = document.createElement("button");
    button704.textContent = "ВИСНОВКИ до ЛР №7";
    button704.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №7");
    };
    menu.appendChild(button704);
}

else if (labNumber === 8) {
    
    let button801 = document.createElement("button");
    button801.textContent = "Постановка задачі ЛР № 8";
    button801.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 8");
    };
    menu.appendChild(button801);

    let button802 = document.createElement("button");
    button802.textContent = "Неділя 1";
    button802.onclick = function() {
        displaySubMenuContent("Неділя 1");
    };
    menu.appendChild(button802);

    let button803 = document.createElement("button");
    button803.textContent = "Неділя 2";
    button803.onclick = function() {
        displaySubMenuContent("Неділя 2");
    };
    menu.appendChild(button803);

    let button804 = document.createElement("button");
    button804.textContent = "Неділя 3";
    button804.onclick = function() {
        displaySubMenuContent("Неділя 3");
    };
    menu.appendChild(button804);

    let button805 = document.createElement("button");
    button805.textContent = "Неділя 4";
    button805.onclick = function() {
        displaySubMenuContent("Неділя 4");
    };
    menu.appendChild(button805);

    let button806 = document.createElement("button");
    button806.textContent = "Сертифікат + Оцінки";
    button806.onclick = function() {
        displaySubMenuContent("Сертифікат + Оцінки");
    };
    menu.appendChild(button806);
}

else if (labNumber === 9) {
    
    let button901 = document.createElement("button");
    button901.textContent = "Постановка задачі ЛР № 9";
    button901.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 9");
    };
    menu.appendChild(button901);

    let button902 = document.createElement("button");
    button902.textContent = "Неділя 1";
    button902.onclick = function() {
        displaySubMenuContent("Неділя 12");
    };
    menu.appendChild(button902);

    let button903 = document.createElement("button");
    button903.textContent = "Неділя 2";
    button903.onclick = function() {
        displaySubMenuContent("Неділя 22");
    };
    menu.appendChild(button903);

    let button904 = document.createElement("button");
    button904.textContent = "Неділя 3";
    button904.onclick = function() {
        displaySubMenuContent("Неділя 32");
    };
    menu.appendChild(button904);

    let button905 = document.createElement("button");
    button905.textContent = "Сертифікат + Оцінки";
    button905.onclick = function() {
        displaySubMenuContent("Сертифікат + Оцінки2");
    };
    menu.appendChild(button905);
}

}




// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    // Викликаємо функцію displayContent з номером 1 при завантаженні сторінки
    displayContent(1);
};

function adjustButtonSizes() {
    // Отримання всіх кнопок
    const buttons = document.querySelectorAll(".info-display button");

    // Знаходження максимальної ширини кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Застосування максимальної ширини до всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displaySubMenuContent(buttonText) {
    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст
    switch (buttonText) {
        case "Опис предметного середовища":
            contentHTML = `
                    <h2>Опис предметного середовища</h2>
                    <ol>
                        <li>Створення інтернет сайту для зберігання інформації про рахунки користувача.</li>
                        <li>Узагальнений опис функціоналу:</li>
                        <ul type="">
                            <li>Реєстрація та вхід в обліковий запис</li>
                            <li>Навігація та пошук</li>
                            <li>Список рахунків</li>
                            <li>Додавання рахунків</li>
                            <li>Видалення рахунків</li>
                            <li>Редагування рахунків</li>
                            <li>Адміністративний розділ</li>
                            <li>Контактна інформація (зворотній зв’язок)</li>
                        </гl>
                    </ol>
                    <h3>Функціонал адміністратора:</h3>
                    <ol>
                        <li>Управління рахунками(без можливості бачити інформацію про них)
                        </li>
                        <li>Управління користувачами:
                            <ul>
                                <li>Реєстрація нових користувачів.</li>
                                <li>Перегляд інформації про користувачів.</li>
                                <li>Видалення користувачів або блокування їхніх облікових записів.</li>
                            </ul>
                        </li>
                        <li>Звіти та аналітика:
                            <ul>
                                <li>Перегляд статистики продажів та замовлень.</li>
                                <li>Генерація звітів за потрібними періодами часу або категоріями товарів.</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>Функціонал користувача:</h3>
                    <ol>
                        <li>Перегляд рахунків:
                            <ul>
                                <li>Перегляд списку рахунків</li>
                                <li>Фільтрація та сортування рахунків за різними критеріями.</li>
                            </ul>
                        </li>
                        <li>Взаємодія з рахунками:
                            <ul>
                                <li>Доавання</li>    
                                <li>Видалення</li>    
                                <li>Редагування</li>    
                            </ul>
                        </li>
                        <li>Особистий кабінет:
                            <ul>
                                <li>Реєстрація нового користувача; вхід в особистий кабінет.</li>
                                <li>Редагування особистої інформації.</li>
                            </ul>
                        </li>
                    </ol>             
            `;
            break;
        case "Тема Мета Місце розташування ЛР №1":
            contentHTML = `
                <h3>Тема</h3>
                <p>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ</p>

                <h3>Мета </h3>
                <p>Придбати практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>

                <h3>Місце розташування ЛР №1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/SerAvram/webProject1" target="_blank">Проект.</a> <a href="https://seravram.github.io/webProject1/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/SerAvram/webresume" target="_blank">Резюме.</a> <a href="https://seravram.github.io/webresume/" target="_blank">Сайт резюме.</a></p>

            `;
            break;
        case "СТРУКТУРА ДОКУМЕНТУ":
            contentHTML = `
                <h3>СТРУКТУРА</h3>
                <p>HTML-код ТАБЛИЦЬ.</p>
                <p>HTML-код ФОРМИ.</p>
                <p>HTML-код ЗОБРАЖЕННЯ.</p>

            `;
            break;

        case "HTML-код ТАБЛИЦЬ":
            contentHTML = `
                 <table>
                    <tr>
                        <th>№</th>
                        <th>Банк</th>
                        <th>Рахунок</th>
                        <th>Сумма</th>
                        <th>Процент</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Пріват</td>
                        <td>99999999999</td>
                        <td>100</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Моно</td>
                        <td>444444444444</td>
                        <td>1400</td>
                        <td>15</td>
                    </tr>
                </table>

                    <h3>HTML-код ТАБЛИЦЬ</h3>
                        <pre>
                            <code>
                                <img src="table.png" alt="photo"> 
                            </code>
                        </pre>
            `;
            break;
            
        case "HTML-код ФОРМИ":
            contentHTML = `
                    <form action="">
                    <div>
                        <label for="">Login</label>
                        <input type="text">
                    </div>
                    <div class="">
                        <label for="">Password</label>
                        <input type="text">
                    </div>
                    <input type="submit">
                </form>

                <h3>HTML-код ФОРМИ</h3>
                <pre> 
                    <code>
                        <img src="auth.png" alt="photo"> 
                    </code>
                </pre>
            `;
            break;

        case "HTML-код ЗОБРАЖЕННЯ":
            contentHTML = `
                <img src="photo1.png" alt="" class="logo">

                <h3>Фото з описом</h3>
                <pre>
                    <code>
                        &lt;img src="photo1.png" alt="" class="logo "&gt;
                    </code>
                </pre>
            `;
            break;

        case "ВИСНОВКИ":
            contentHTML = `
                <h3>ВИСНОВКИ</h3>
                <p>В ході виконання лабораторної роботи було створенно HTML сторінку для майбутнього сайту</p>
            `;
            break;

        case "Тема, мета ЛР №2. Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №2. Місце розташування сайту, звіту</h3>
                <p>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>

                <p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  
                зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>

                <h3>Місце розташування ЛР №2</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://seravram.github.io/WebProjectN2/" target="_blank">Проект.</a> <a href="https://github.com/SerAvram/WebProjectN2" target="_blank">Сайт проекту.</a></p>
                
            `;
            break;

        case "Способи підключення стилів":
            contentHTML = `
                <h3>Способи підключення стилів</h3>
                <p>Вбудований CSS: Стилі можна включати безпосередньо в HTML-документ за допомогою тегу <style>. 
                Вбудований CSS також можна використовувати в тегах за допомогою атрибута style.  </p>

                <p>Зовнішній CSS: Стилі можна розмістити у зовнішньому файлі CSS і підключити їх до HTML-документу за допомогою тегу <link>.</p>

                <p>Використання JavaScript для динамічного додавання стилів: Ви можете використовувати JavaScript для створення або зміни стилів динамічно. </p>
                              
            `;
            break;
        
        case "СЕЛЕКТОРИ":
            contentHTML = `
                <h3>СЕЛЕКТОРИ</h3>

                <p>Селектори тегу</p>
                
                <p>Селектори класу</p>

                <p>Селектори ідентифікаторів</p>

                <p>Селектори сусідні</p>

                <p>Селектори атрибута </p>

                <p>Селектори універсальні</p>

                <p>Селектори дочірні</p>

                              
            `;
            break;

            case "Селектори тегу":
                contentHTML = `
                    <h3>Селектори тегу</h3>    
                    <img src="tsel.png">                 
                    
                                  
                `;
                break;
            case "Селектори класу":
            contentHTML = `
                <h3>Селектори класу</h3>
                <img src="csel.png">  
                                              
                `;
                break;

            case "Селектори ідентифікаторів":
            contentHTML = `
                <h3>Селектори ідентифікаторів</h3>
                <img src="isel.png">   
                                              
                `;
                break;

            case "Інші селектори":
            contentHTML = `
                <h3>Інші селектори</h3>
                <img src="sel.png">     
                `;
                break;

            case "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки":
            contentHTML = `
                <h3>CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки</h3>

                <p>Шрифти </p>
                <img src="font.png" alt="sr11">
                <img src="font1.png" alt="sr12">                
                <p>Текст </p>
                <img src="text.png" alt="sr21">
                <img src="text1.png" alt="sr22">
                <p>Таблиці </p>
                <img src="table2.png" alt="sr31">
                <img src="table3.png" alt="sr32">
                <p>Фон</p>
                <img src="backimg.png" alt="sr41">
                <img src="backimg1.png" alt="sr42">
                <p>Контур</p>
                <img src="out.png" alt="sr51">
                <img src="out1.png" alt="sr52">
                <p>Списки</p>
                <img src="list.png" alt="sr61"> 
                `;
                break;

            case "ВИСНОВКИ до ЛР №2":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №2</h3>

                <p>В ході виконання лабораторної роботи набуто ознайомленно з селекторами, 
                ідентифікаторами, списками,  різноманітними властивостями 
                кольору і фону,  зовнішними та внутрішними  відступами,  
                плаваючими елементами, оформленням текстових елементів.</p>
                
                `;
                break;

        case "Тема, мета ЛР №3 Місце розташування сайту, звіту":
        contentHTML = `
            <h3>Тема, мета ЛР №3. Місце розташування сайту, звіту</h3>
            <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>

            <p>Мета:</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>   
                
            <h3>Місце розташування ЛР №3</h3>
            <p>Розміщено на GitHub</p>
            <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
            <p><a href="https://github.com/SerAvram/WebProjecN3" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjecN3/" target="_blank">Сайт проекту.</a></p>
            <p><a href="https://github.com/SerAvram/Lab4GV" target="_blank">Проект.</a> <a href="https://seravram.github.io/Lab4GV/" target="_blank">Сайт табличної верстки.</a></p>
            <p><a href="https://github.com/SerAvram/Lab4BV" target="_blank">Проект.</a> <a href="https://seravram.github.io/Lab4BV/" target="_blank">Сайт блокової верстки.</a></p>

            `;
            break;

        case "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету</h3>
                <p>Зовнішній вигляд макету:</p>
                <img src="lab3page.png">                   


                <p>HTML макету:</p>
                <img src="lab3html1.png">              
                <img src="lab3html2.png">                  
                <img src="lab3html3.png">                   
                              
            `;
            break;
        
        case "ЗАВДАННЯ №2":
            contentHTML = `
                <h3>ЗАВДАННЯ №2</h3>

                <p>Фіксовані і гумові табличні та блокові верстки</p>              
                                              
            `;
            break;

            case "Фіксована таблична верстка":
                contentHTML = `
                    <h3>Фіксована таблична верстка</h3>    
                    
                    <img src="fgtabl.png">                   
                    
                                  
                `;
                break;
            case "Гумова таблична верстка":
            contentHTML = `
                <h3>Гумова таблична верстка</h3>
                <img src="fgtabl.png">                   
                                              
                `;
                break;

            case "Фіксована блокова верстка":
            contentHTML = `
                <h3>Фіксована блокова верстка</h3>
                <img src="fgblock.png">                   
                                              
                `;
                break;

            case "Гумова блокова верстка":
            contentHTML = `
                <h3>Гумова блокова верстка</h3>
                <img src="fgblock.png">                       

                `;
                break;

            case "ЗАВДАННЯ №3 FLEXBOX":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 FLEXBOX</h3>
                `;
                break;

            case "Зовнішній вигляд сторінки":
            contentHTML = `
                <h3>Зовнішній вигляд сторінки</h3>

                <img src="lab3page.png">   
                <img src="lab3page2.png">                 

                `;
                break;

            case "HTML-код":
            contentHTML = `
                <h3>HTML-код</h3>

                <img src="lab3html1.png">              
                <img src="lab3html2.png">                  
                <img src="lab3html3.png">    
                <img src="lab3html4.png">                  
                <img src="lab3html5.png">                
                
                `;
                break;

            case "CSS-код сторінки":
            contentHTML = `
                <h3>CSS-код сторінки</h3>

                <img src="lab3css1.png">              
                <img src="lab3css2.png">                  
                <img src="lab3css3.png">    
                <img src="lab3css4.png">                  
                <img src="lab3css5.png">                  
                
                `;
                break;

            case "ВИСНОВКИ до ЛР №3":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №3</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                верстки сторінок засобами CSS.</p>
                
                `;
                break;

                
            case "Тема, мета ЛР №4 Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №4. Місце розташування сайту, звіту</h3>
                <p>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>

                <p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>

                <h3>Місце розташування ЛР №4</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/SerAvram/WebProjectN4" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjectN4/" target="_blank">Сайт проекту.</a></p>
                        
                `;
                break;
           
            case "ЗАВДАННЯ №1 Визначення брейкпоінтів":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Визначення брейкпоінтів</h3>
        
                <p>Брейкпоінти в контексті веб-дизайну визначають різні розміри екрану, на яких змінюється вигляд і розміщення елементів веб-сайту, 
                    щоб забезпечити оптимальний вигляд і користування на різних пристроях, таких як комп'ютери, планшети та смартфони.
                    Основна мета брейкпоінтів - забезпечити адаптивну верстку, яка забезпечує оптимальний вигляд і функціональність сайту 
                    на будь-якому розмірі екрану. Використання брейкпоінтів дозволяє розробникам створювати веб-сайти, які адаптуються до різних 
                    розмірів екрану без необхідності створення окремих версій для кожного пристрою.</p>
                <p>Визначені брейкпоінти: до 500, більше 500 і до 1000 та більше 1000.</p>
                        
                `;
                break;
        
                        
            case "ЗАВДАННЯ №2 Виконання адаптивної верстки":
            contentHTML = `
                <h3>ЗАВДАННЯ №2 Виконання адаптивної верстки</h3>
                
                <p>Результати виконання адаптивної верстки:</p>

                <br>
                <p>1) Десктопна версія (ширина від 1001 рх)</p>
                <img src="descktop1.png">   
                <img src="descktop2.png">   
                <br>
                
                <p>2) Планшетна версія (ширина від 501 до 1000 рх)</p>
                <img src="plan1.png">
                <img src="plan2.png">  
                
                <br>
                <p>3) Версія під мобільний телефон (ширина до 500 рх)</p>
                <img src="phone1.png">   
                <img src="phone2.png">  
                <br>

                <br>
                <p>Css текст файлу стилів - медіазапити:</p>
                <img src="media1.png">   
                <img src="media2.png">  
                <br>


    
                                
                `;
                break;
                        
                        
            case "ЗАВДАННЯ №3 Пояснення створених версій":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 Пояснення створених версій</h3>
                <p>Десктопна версія:
                Ця версія призначена для екранів пк та ноутбуків.
                Містить повний зміст та деталізацію елементів.</p
                <p>Планшетна версія:
                Оптимізована для планшетів та деяких мобільних пристроїв у горизонтальному режимі.
                Може бути менш габаритною, зі зменшеною кількістю контенту на екрані, щоб полегшити навігацію та покращити 
                відображення на пристроях із середніми екранами.</p
                <p>Мобільна версія:
                Призначена для смартфонів.
                Має компактну структуру та обмежену кількість контенту на екрані, щоб забезпечити зручне відображення 
                та навігацію на малих пристроях.</p>
                                
                `;
                break;
                
                    
            case "ВИСНОВКИ до ЛР №4":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №4</h3>
                        
                <p>В ході виконання лабораторної роботи набуто практичних навичок застосування адаптивної верстки з використанням медіа-запитів.</p>
                                        
                `;
                break;

                case "Постановка задачі ЛР № 5":
                contentHTML = `
                    <h3>Постановка задачі лабораторної роботи № 5 (Тема, мета ЛР №5).</h3>
                    <p>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
                    ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT.</p>

                    <p>ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</p>
            
                    <p>Мета: Придбати практичні навички роботи з масивами у js-сценаріях. 
                    Реалізація програм засобами мови JAVASCRIPT</p>
                    <p>Мета: Придбати практичні навички роботи з об'єктами. Методи об'єкта.. 
                    Callback. Стрілочні функції. Стрілочні функції як колбеки.
                    Реалізація програм засовами мови JAVASCRIPT</p>
            
                    <h3>Місце розташування ЛР №5</h3>
                    <p>Розміщено на GitHub</p>
                    <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                    <a href="https://github.com/SerAvram/WebProjectN57" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjectN57/" target="_blank">Сайт проекту.</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectN55" target="_blank">Виконання завдання 3.</a> <a href="https://seravram.github.io/WebProjectN55/" target="_blank">Сайт виконання завдання</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjecN56" target="_blank">Виконання завдання 5.</a> <a href="https://seravram.github.io/WebProjecN56/" target="_blank">Сайт виконання завдання</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectN51U" target="_blank">Виконання завдання 5.1.</a> <a href="https://seravram.github.io/WebProjectN51U/" target="_blank">Сайт виконання завдання</a></p>
                    
                    `;
                    break;
                       
                case "Способи функціонального застосування JS":
                contentHTML = `
                    <h3>Способи функціонального застосування JavaScript:</h3>
                    
                    <p>JavaScript (JS) є однією з найпопулярніших мов програмування для розробки веб-додатків.
                     Він має широкий спектр функціонального застосування, що дозволяє створювати інтерактивні, динамічні
                      та складні веб-сайти та додатки.</p>
                                    
                    `;
                    break;
                    
                                    
                case "Схема URL":
                contentHTML = `
                    <h3>Схема URL</h3>
                    <p>URL - це адреса ресурсу в мережі, використовується для посилань. Одне з основних завдань мови програмування гіпертекстових систем - реалізація переходів за посиланнями. У веб-технології за замовчуванням використовується програма для завантаження сторінок. JavaScript дозволяє змінювати цю стандартну програму на користувацьку. Щоб відрізнити стандартний перехід за протоколом HTTP від переходу, програмованого на JavaScript, розробники мови ввели нову URL-схему - JavaScript:.</p>
                    <img src="5URL1.png">   
                    <br>
                    <p>У наведених вище прикладів "код_програми" це JavaScript-скрипт, який буде виконуватись при кліканні на гіпертекстове посилання / при відправці даних форми (після натискання кнопки "Submit").</p> 
                    <br>
                    <p>Приклад URL</p>
                    <a href="javascript:alert('Простий URL')">Кнопка</a>
                    `;
                    break;
                                    
                                    
                case "Обробник подій":
                contentHTML = `
                    <h3>Обробник подій</h3>
                    <br>
                    <p>Обробник подій (Event Handler): Цей метод використовується для виконання 
                        JavaScript коду відповідно до подій, що виникають на сторінці. Наприклад, 
                        ми можемо викликати функцію JavaScript при кліку на елемент або при 
                        введенні тексту в поле вводу.</p>
                    <br> <br>
    
                    `;
                    break;
                            
                                            
                case "Підстановка (entity)":
                contentHTML = `
                    <h3>Підстановка (entity)</h3>
                    <p>Підстановка (entity): Цей термін може вказувати на використання JavaScript для 
                        модифікації даних на сторінці під час її відображення.</p> 
    
                    `;
                    break;
    
                case "Вставка (тег SCRIPT)":
                contentHTML = `
                    <h3>Вставка (тег SCRIPT)</h3>
                    <p>На HTML-сторінці JavaScript код має бути вставлений між тегами <script> та </script>. Але є декілька способів це реалізувати.</p>
                    <br>
                    <br>     
                    <p>1. у head</p> 
                    <img src="5inp1.png">   
                    <br>
                    <p>2. у body</p>
                    <img src="5inp2.png">   
                    <p>3. помістити скрипт у head за допомого зовнішньго фалу</p> 
                    <img src="5inp3.png">                                     
                    `;
                    break;
    
                case "Виконання завдання 3":
                contentHTML = `
                    <h3>Виконання завдання 3 (варіант 1):</h3>
                    <br>                                   
                    <p>Текст завдання:</p>
                    <p>1. Створити одновимірний масив, кількість елементів якого задана користувачем. 
                    Знайти максимальний серед парних елементів та мінімальний серед елементів з парними індексами. 
                    В масиві поміняти місцями знайдені максимальний та мінімальний елементи, надрукувати вхідний та вихідний масиви.</p>
                    <p>2.Виконати сортування вихідного масиву за зростанням методом вставки.</p>
                    <p>Застосувати функції.</p>
    
                    <br>                                   
                    <p>Результат:</p>
                    <br> 
                    <img src="5task1S1.png">
                    <img src="5task1S2.png">                                 
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5task1S3.png">
                    <img src="5task1S4.png">                                    
                    <img src="5task1S5.png">   
                    <img src="5task1S6.png">                          
                                                   
                    `;
                    break;
                case "Виконання завдання 5":
                contentHTML = `
                    <h3>Виконання завдання 5 (варіант 1)</h3>
                    <br>  
                    <p>Текст завдання:</p>
                    <h4>Назва завдання: Валідація HTML-форми реєстрації користувача</h4>
                    <p>Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число, дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та перевірочне). Крім того, забезпечити перевірку введення обов‘язкових полів, помічених (*). </p>                         
                    <br>                                   
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5task2S1.png">                                         
                    <img src="5task2S2.png">                                      
                    <img src="5task2S3.png">                                      
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5task2S4.png">  
                    <img src="5task2S5.png">                                              
                             
                    `;
                    break;
            
                case "Виконання завдання 7":
                contentHTML = `
                    <h3>Виконання завдання за пунктом 7</h3>
                    <img src="57/page1.png">
                    <img src="57/page2.png">
                    <img src="57/page3.png">
                    <img src="57/page4.png">
                    <img src="57/html1.png">
                    <img src="57/script.png">
    
                    `;
                    break;

                case "Виконання завдання 5.1":
                contentHTML = `
                    <h3>Виконання завдання 5.1</h3>
                    <br>  
                    <h3>Текст завдання 1:</h3>
                    <p>Напишіть наступні функції:
                    createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
                    logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
                    logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль</p>                                
                    <p>logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль</p> 
                    <p>logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль</p>                        
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5.1taskS1.png">                                         
                    <img src="5.1taskS2.png">                                                                          
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1taskS3.png">  
                    <img src="5.1taskS4.png">  

                    <br>  
                    <h3>Текст завдання 3:</h3>
                    <p>З об'єкту medicines потрібно отримати масив   в якому будуть лише назви препаратів.</p>                                
                    <p>З масиву  потрібно прибрати медикаменти , в яких строк зберігання  уже пройшов . У новому масиві відсортувати медикаменти  у хронологічному порядку.</p> 
                    <p>Результат вивести у консоль. Застосувати стрілочні функції</p>                        
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5.1task3S1.png">                                                                                                                
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1task3S2.png">  

                    <br>  
                    <h3>Текст завдання 5:</h3>
                    <p>Напишіть функцію, яка приймає массив об'єктів і повертає новий массив </p>                                
                    <p>Зробіть знижку 20 % на всі фрукти у масиві Надайте ід для кожного продукту </p>                       
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5.1task5S2.png">                                                                                                                
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1task5S1.png">   

                    <br>  
                    <h3>Текст завдання 7:</h3>
                    <p>Напиши клас Client який створює об'єкт з властивостями login email</p>                                
                    <p>Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email</p>                       
                    <p>Приклади роботи програми:</p>                    
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5.1task7S1.png">                                                                                                                
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1task7S2.png">   

                    <br>  
                    <h3>Текст завдання 9:</h3>
                    <p>Поверніть об'єкт, в якому вказано кількість тегів.</p>                                
                    <p>Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}</p>                       
                    <p>Приклади роботи програми:</p>
                    <br> 
                    <img src="5.1task9S1.png">                                                                                                                
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1task9S2.png">  

                    <br>  
                    <h3>Текст завдання 10:</h3>
                    <p>Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє правильність закриття дужок () {} []</p>                                
                    <p>Якщо рядок містить коректний код функція повертає true.</p>           
                    <p>Якщо рядок містить коректний код функція повертає true.</p>                  
                    <p>В іншому випадку повертає false</p>
                    <br> 
                    <img src="5.1task10S1.png">                                                                                                                
    
                    <br> 
                    <br>     
                    <p>Текст коду:</p> 
                    <img src="5.1task10S2.png">  
    
                    `;
                break;
           
                                
                case "ВИСНОВКИ за ЛР №5":
                contentHTML = `
                    <h3>ВИСНОВКИ до ЛР №5</h3>
                                    
                    <p>В ході виконання лабораторної роботи набуто практичних навичок роботи з 
                    масивами у js-сценаріях.  Виконано завдання з реалізаціъ програм засовами мови JAVASCRIPT.
                    Відпрацьовано отримані навички на власному проекті.</p>
                                                    
                    `;
                    break;
            
                    

            case "Постановка задачі ЛР № 6":
                contentHTML = `
                    <h3>Тема, мета ЛР №6. Місце розташування сайту, звіту</h3>
                    <p>Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ</p>
        
                    <p>Мета:</p>
                    <p>⎯	Придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки.</p>
                    <p>⎯	Реалізація програм засовами мови JAVASCRIPT</p>   
                        
                    <h3>Місце розташування ЛР №3</h3>
                    <p>Розміщено на GitHub</p>
                    <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectN57" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjectN57/" target="_blank">Сайт проекту.</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectn6" target="_blank">Завдання.</a> <a href="https://seravram.github.io/WebProjectn6/" target="_blank">Сайт завдання.</a></p>
                    


                    `;
                    break;
        
                case "Виконання завдання 13":
                    contentHTML = `
                    <img src="6/zavd1.png">   
                    <img src="6/zavd1.2.png"> 
                    <img src="6/html1.png"> 
                    <img src="6/code1.png">    
                    `;
                    break;
                
                case "Виконання завдання 33":
                    contentHTML = `
                    <img src="6/zavd3.png">    
                    <img src="6/html3.png"> 
                    <img src="6/code3.png">                  
                                                        
                    `;
                    break;
        
                case "Виконання завдання 53":
                    contentHTML = `
                    <img src="6/zavd5.png">   
                    <img src="6/zavd5.2.png"> 
                    <img src="6/html5.png"> 
                    <img src="6/code5.png">    
                                        
                    `;
                    break;
                case "Виконання завдання 73":
                contentHTML = `
                    <img src="6/zavd7.png">   
                    <img src="6/zavd7.2.png"> 
                    <img src="6/html7.png"> 
                    <img src="6/code7.png">                   
                                                    
                    `;
                    break;
    
                case "Виконання завдання 83":
                contentHTML = `
                    <img src="6/zavd8.png">   
                    <img src="6/zavd8.2.png"> 
                    <img src="6/zavd8.3.png"> 
                    <img src="6/html3.png"> 
                    <img src="6/code3.png">                     
                                                    
                    `;
                    break;
    
                case "Виконання завдання 93":
                contentHTML = `
                    <img src="6/zavd9.png">   
                    <img src="6/html9.png"> 
                    <img src="6/code9.png">                         
    
                    `;
                    break;
    
                case "Виконання завдання 103":
                contentHTML = `
                    <img src="6/zavd10.png">   
                    <img src="6/html10.png"> 
                    <img src="6/code10.png">   
                    `;
                    break;
    
                case "ВИСНОВКИ за ЛР №6":
                contentHTML = `
                    <h3>ВИСНОВКИ до ЛР №3</h3>
    
                    <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                    з об'єктами</p>
                    
                    `;
                    break;

            case "Постановка задачі ЛР № 7":
                contentHTML = `
                    <h3>Тема, мета ЛР №7 Місце розташування сайту, звіту</h3>
                    <p>Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.</p>
        
                    <p>Мета:</p>
                    <p>Придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.</p>
                        
                    <h3>Місце розташування ЛР №7</h3>
                    <p>Розміщено на GitHub</p>
                    <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectN57" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjectN57/" target="_blank">Сайт проекту.</a></p>
                    <p><a href="https://github.com/SerAvram/WebProjectN7" target="_blank">Завдання.</a> <a href="https://seravram.github.io/WebProjectN7/" target="_blank">Сайт задвання.</a></p>
        

                    `;
                    break;
        
                case "Виконання завдання 12":
                    contentHTML = `
                    <h3>ЗАВДАННЯ №1</h3>
                    <img src="7/n1page.png">
                    <img src="7/n1html.png">
                    <img src="7/n1script1.png">
                    <img src="7/n1script2.png">
                    <img src="7/n1script3.png">
                    <img src="7/css1.png">
                    <img src="7/css1.png">

                    `;
                    break;
                
                case "Виконання завдання 22":
                    contentHTML = `
                        <h3>ЗАВДАННЯ №2</h3>
                        <img src="7/n2page.png">
                        <img src="7/n2html.png">
                        <img src="7/n2script1.png">
                        <img src="7/n2script2.png">
                        <img src="7/css1.png">
                        <img src="7/css1.png">          
                                                        
                    `;
                    break;
        
                case "ВИСНОВКИ до ЛР №7":
                contentHTML = `
                    <h3>ВИСНОВКИ до ЛР №7</h3>

                    <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                    створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.</p>
                    
                    `;
                    break;

            case "Постановка задачі ЛР № 8":
                contentHTML = `
                    <h3>Тема: Building RESTful APIs with Node.js and Express</h3>
                    <p>Розміщено на GitHub</p>
                    <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
        
                    `;
                    break;
        
                case "Неділя 1":
                    contentHTML = `
                    <h1>Неділя 1</h1>
                    <h3>Lab: Your first component</h3>
                    <img src="89/8/8code1.png">   
                    <h3>Self review: Your first component</h3>
                    <img src="89/8/8test1.png"> 
                    <h3>Lab: Creating and importing components</h3>
                    <img src="89/8/8code2.1.png">  
                    <img src="89/8/8code2.2.png">  
                    <h3>Self review: Creating and importing components</h3>
                    <img src="89/8/8test2.png"> 
                    <h3>Knowledge check: React components and where they live</h3>
                    <img src="89/8/8test3.1.png"> 
                    <img src="89/8/8test3.2.png">
                    <img src="89/8/8test3.3.png">  
                    <h3>Lab: Passing props</h3>
                    <img src="89/8/8code3.1.png">  
                    <img src="89/8/8code3.2.png">  
                    <h3>Self review: Passing props</h3>
                    <img src="89/8/8test4.png"> 
                    <h3>Lab: Multiple components</h3>
                    <img src="89/8/8code4.1.png">  
                    <img src="89/8/8code4.2.png"> 
                    <h3>Self review: Multiple components</h3>
                    <img src="89/8/8test5.png">  
                    <h3>Module Quiz</h3>
                    <img src="89/8/8test6.1.png"> 
                    <img src="89/8/8test6.2.png"> 
                    <img src="89/8/8test6.3.png"> 
                    <img src="89/8/8test6.4.png"> 
                    `;
                    break;
                
                case "Неділя 2":
                    contentHTML = `
                    <h1>Неділя 2</h1>
                    <h3>Knowledge check: Events and errors</h3>
                    <img src="89/8/8test7.1.png"> 
                    <img src="89/8/8test7.2.png"> 
                    <h3>Lab: Dynamic events</h3>
                    <img src="89/8/8code5.1.png"> 
                    <h3>Self review: Dynamic events</h3>
                    <img src="89/8/8test8.1.png"> 
                    <img src="89/8/8test8.2.png">          
                    <h3>Knowledge check: Dynamic events and how to handle them</h3>
                    <img src="89/8/8test9.1.png"> 
                    <img src="89/8/8test9.2.png">   
                    <img src="89/8/8test9.3.png">     
                    <h3>Knowledge check: Data flow</h3>
                    <img src="89/8/8test10.1.png"> 
                    <img src="89/8/8test10.2.png">   
                    <img src="89/8/8test10.3.png">        
                    <h3>Knowledge Check: State the concept</h3>
                    <img src="89/8/8test11.1.png"> 
                    <img src="89/8/8test11.2.png">         
                    <h3>Knowledge check: Passing state</h3>
                    <img src="89/8/8test12.1.png"> 
                    <img src="89/8/8test12.2.png"> 
                    <h3>Lab: Managing state in React</h3>
                    <img src="89/8/8code6.1.png">     
                    <img src="89/8/8code6.2.png">  
                    <img src="89/8/8code6.3.png">     
                    <h3>Self review: Managing state in React</h3>
                    <img src="89/8/8test13.1.png"> 
                    <img src="89/8/8test13.2.png">    
                    <h3>Knowledge check: State or stateless</h3>
                    <img src="89/8/8test14.1.png"> 
                    <img src="89/8/8test14.2.png">     
                    <h3>Module quiz: Data and state</h3>
                    <img src="89/8/8test15.1.png"> 
                    <img src="89/8/8test15.2.png">  
                    <img src="89/8/8test15.3.png"> 
                    <img src="89/8/8test15.4.png">  
                    `;
                    break;

                case "Неділя 3":
                    contentHTML = `
                    <h1>Неділя 3</h1>
                    <h3>Lab: Displaying images</h3>
                    <img src="89/8/8code7.1.png">     
                    <img src="89/8/8code7.2.png">    
                    <h3>Self review: Displaying images</h3>
                    <img src="89/8/8test16.1.png"> 
                    <img src="89/8/8test16.2.png">   
                    <h3>Song selection</h3>    
                    <img src="89/8/8code8.1.png">  
                    <h3>Self review: Song selection</h3>
                    <img src="89/8/8test17.1.png"> 
                    <img src="89/8/8test17.2.png"> 
                    <h3>Module quiz: navigation, updating and assets in React.js</h3>
                    <img src="89/8/8test18.1.png"> 
                    <img src="89/8/8test18.2.png">     
                    <img src="89/8/8test18.3.png"> 
                    <img src="89/8/8test18.4.png">         
                    `;
                    break;

                case "Неділя 4":
                    contentHTML = `
                    <h1>Неділя 4</h1>
                    <h3>Build a calculator app</h3>    
                    <img src="89/8/8code9.1.png">     
                    <img src="89/8/8code9.2.png">    
                    <img src="89/8/8code9.3.png">    
                                                        
                    `;
                    break;
        
                case "Сертифікат + Оцінки":
                contentHTML = `
                    <h1>Сертифікат + Оцінки</h1>
                    <img src="89/8/sert1.png">   
                    <img src="89/8/result.png">     
                    
                    `;
                    break;
            
            case "Постановка задачі ЛР № 9":
                contentHTML = `
                    <h3>Тема: React Basics</h3>
                    <p>Розміщено на GitHub</p>
                    <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
        
                    `;
                    break;
        
                case "Неділя 12":
                    contentHTML = `
                    <h1>Неділя 1</h1>
                    <h3>Node JS - Practice Quiz</h3>
                    <img src="89/9/9test1.png"> 
                    <img src="89/9/9test1.2.png">     
                    <h3>Node JS - Graded Quiz</h3>
                    <img src="89/9/9test2.1.png"> 
                    <img src="89/9/9test2.2.png">  
                    <img src="89/9/9test2.3.png"> 
                    <img src="89/9/9test2.4.png">  
                    <img src="89/9/9test2.5.png"> 
                    <img src="89/9/9test2.6.png">  
                    <img src="89/9/9test2.7.png"> 
                    <img src="89/9/9test2.8.png">  
                    `;
                    break;
                
                case "Неділя 22":
                    contentHTML = `
                    <h1>Неділя 2</h1>
                    <h3>MongoDB - Practice Quiz</h3>
                    <img src="89/9/9test3.1.png"> 
                    <img src="89/9/9test3.2.png">  
                    <img src="89/9/9test3.3.png"> 
                    <h3>Installation & API - Practice Quiz</h3>
                    <img src="89/9/9test4.1.png"> 
                    <img src="89/9/9test4.2.png">  
                    <img src="89/9/9test4.3.png"> 
                    <h3>MongoDB - Graded Quiz</h3>
                    <img src="89/9/9test5.1.png"> 
                    <img src="89/9/9test5.2.png">  
                    <img src="89/9/9test5.3.png"> 
                    <img src="89/9/9test5.4.png">  
                    <img src="89/9/9test5.5.png"> 
                    <img src="89/9/9test5.6.png">  
                    <img src="89/9/9test5.7.png"> 
                    <img src="89/9/9test5.8.png">  
                    <img src="89/9/9test5.9.png"> 
                    `;
                    break;

                case "Неділя 32":
                    contentHTML = `
                    <h1>Неділя 3</h1>
                    <h3>Middleware - Practice Quiz</h3>
                    <img src="89/9/9test6.1.png"> 
                    <img src="89/9/9test6.2.png">  
                    <img src="89/9/9test6.3.png"> 
                    <h3>Handling Errors - Practice Quiz</h3>
                    <img src="89/9/9test7.1.png"> 
                    <img src="89/9/9test7.2.png">  
                    <img src="89/9/9test7.3.png"> 
                    <h3>Authentication and Authorization - Practice Quiz</h3>
                    <img src="89/9/9test8.1.png"> 
                    <img src="89/9/9test8.2.png">  
                    
                    `;
                    break;
        
                case "Сертифікат + Оцінки2":
                contentHTML = `
                    <h1>Сертифікат + Оцінки</h1>
                    <img src="89/9/sert2.png">   
                    <img src="89/8/result.png">     
                    
                    `;
                    break;
                
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    



    

    // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;
}