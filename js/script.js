"use strict";

function myAlert() {
    alert("Я – JavaScript!");
}

function variables() {
    var admin, name;
    name = "Василий";
    admin = name;
    alert(admin);
}

function declareVariables() {
    var earthName = "Земля"; //var ourPlanetName
    var userName = "Петя";
}

function types() {
    var obj = {};
    var arr = [];

    console.log(obj, arr);
    console.log(typeof obj, typeof arr);// object, object
}

function operatorsTest() {
    var a = 2;
    var x = 1 + (a *= 2);
    var iThinkX = 5;

    console.log(x == iThinkX);
}

function askName() {
    var ask = prompt("What is your name?", '');

    alert(ask);
}

function jsOfficialName() {
    var question = prompt('Каково "официальное" название JavaScript?', "");

    if (question == "ECMAScript") {
        alert("Верно!");
    } else {
        alert('Не знаете? "ECMAScript"!');
    }
}

function sign() {
    var getNumber = prompt('Введите число', '');
    var result = false;

    if (getNumber > 0) {
        result = 1;
    } else if (getNumber < 0) {
        result = -1;
    } else if (getNumber == 0) {
        result = 0;
    }

    alert(result);
}

function whoAreYou() {
    var loginForm = prompt('Кто пришел?', '');

    if (loginForm == "Админ") {
        var passwordform = prompt('Пароль?', '');

        if (passwordform ==  "Чёрный Властелин") {
            alert("Добро пожаловать!");
        } else if (passwordform == null) {
            alert("Вход отменен");
        } else {
            alert("Пароль неверен");
        }
    } else if (loginForm == null) {
        alert("Вход отменен");
    } else {
        alert("Я вас не знаю");
    }
}

function toTernarRewriteTest() {
    function usual(a, b) {
        var result;

        if (a + b < 4) {
            result = 'Мало';
        } else {
            result = 'Много';
        }

        return result
    }

    function ternar(a, b){
        var result;
        result = (a + b < 4) ? 'Мало' : 'Много';

        return result;
    }

    console.log(usual(1, 2), ternar(1, 2));
    console.log(usual(1, 2) == ternar(1, 2));
}

function toTernarRewrite2() {
    var message;
    var login = prompt("Логин", "");

    message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '' || login == null) ? 'Нет логина' : '';

    alert(message);
}

function inDiapason() {
    var age = 91;

    console.log(age <= 90 && age >= 14);
}

function outDiapason() {
    var age = 14;
    // if(!(age>=14&&age<=90)){console.log("вне диапазона");}
    // else {console.log("в диапазное");}

    if ((age < 14 || age > 90)) {
        console.log("вне диапазона");
    } else {
        console.log("в диапазное");
    }
}

function primitiveConversionsTest() {
    console.log(
        ("" + 1 + 0),//10
        ("" - 1 + 0),//-1
        (true + false),//1
        6 / "3",//2
        "2" * "3",//6
        4 + 5 + "px",//9px
        "$" + 4 + 5, //$45
        "4" - 2,//2
        "4px" - 2,//NaN отбрасываются пробелы и переводы строк но не символы
        7 / 0,//Infinity
        "  -9\n" + 5,//-9 5 строка + число = строка
        "  -9\n" - 5,//-14
        5 && 2,//2 т.к. 5 это true, то возвращается значение 2
        2 && 5, //5
        5 || 0,//5 || до первого true
        0 || 5,//5
        null + 1,//1 null в 0
        undefined + 1,//NaN undefined в NaN
        null == "\n0\n",//false "null == undefined и только
        +null == +"\n0\n"//true
    );
}

function evenNumbers() {
    for (var i = 2; i <= 10; i++) {

        if (i % 2) {
            continue;
        }

        alert(i);
    }
}

function forToWhile() {
    var i = 0;

    while (i < 3) {
        alert( "номер " + i + "!" );
        i++;
    }
}

function checkNumberValue() {
    while (true) {
        var numberValue = +prompt("Введите число больше 100","");//+ приводим возвращаемую строку к числу
        if (numberValue > 100 || !numberValue) {
            break;
        }
    }
}

function listPrimes(f, l) {
    // for(var i=f; i<=l; i++){
    //     var checker = 1;
    //     for(var j=2; j<=i-1&&i!=j; j++) {
    //         checker = checker * i%j;
    //         }
    //     if(checker){alert(i);}
    // } //мое решение - тоже верное

    nextPrime: for (var i = f; i <= l; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i); // простое
    }
}

function switchToIf(browser) {

    if(browser == 'IE'){
        alert( 'О, да у вас IE!' );
    }
    else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        alert( 'Да, и эти браузеры мы поддерживаем' );
    } else {
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }
}

function ifToSwith() {
    var a = +prompt('a?', '');

    switch (a) {
        case 0: alert( 0 );
                break;
        case 1: alert( 1 );
                break;
        case 2:
        case 3:
            alert( '2,3' );
            break;
    }
}

function checkAge(age) {
    // if (age > 18) {
    //     return true;
    // } else {
    //     return confirm('Родители разрешили?');
    // }
    //return (age > 18) ? true: confirm('Родители разрешили?');
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b) {
    return (a < b ) ? a : b;
}

function pow(x, n) {

    if (n == 0 && x == 0) {
        return NaN;
    }

    if (n == 0) {
        return 1;
    }



    // if ( n < 0 || n % 1 != 0) {
    //
    //     return "Введите натуральное число";
    // }
    if (n % 1 != 0) {
        result = Math.pow(x, n); //todo something

        return result;
    }

    var i = 1;
    var result = x;

    while(i < Math.abs(n)){
        result = result * x;
        i++;
    }

    if (n < 0) {
       result = 1/result;
    }

    return result;
}

function sumToLoop(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }

    alert(sum);
}

function sumToRecursion(n) {
    var sum = 0;

    if (n > 1) {
        sum = n + sumToRecursion(n - 1);
    } else if(n == 1 ){

        return 1;
    }

    return sum;
}

function sumToFormula(n) {
    return ((1 + n) / 2) * n;
}

function factorial(n) {

    if (n >= 1) {
        var result;

        if(n == 1){

            return 1;
        }

        result = n * factorial(n - 1);

        return result;
    }
}

function fib(n) {
    var result;

    if(n == 1 || n == 2){
        result = 1;
    } else if (n > 2) {
        var a = 1;
        var b = 1;

        for (var i = 3; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }

    }

    return result;
}

(function g() { return 1; });

function sumInterface() {
    var firstNumber = +prompt("Введите первое число", "");
    var secondNumber = +prompt("Введите второе число", "");
    var sum  = firstNumber + secondNumber;
    alert(sum);
}

function sumPrices() {
    // alert((0.1 * 100 + 0.2 * 100) / 100 + '$' );
    var price1 = 0.1, price2 = 0.2;
    alert( +(price1 + price2).toFixed(2) );
}

function getDecimal(num) {
    var floor = Math.floor( Math.abs(num) );
    console.log(( Math.abs(num) * 100 - floor * 100) / 100);
}

function fibBinet(n) {
    var psi = (1 + Math.sqrt(5)) / 2;
    var fn = Math.round(Math.pow(psi, n) / Math.sqrt(5));

    return fn;
}

function randomMax() {
    var max = -14;

    return Math.random() * Math.abs(max);
}

function randomMinMax() {
    //interesting but too slow
    var min = 5;
    var max = 10;

    var iteration = min + (Math.random() * Math.abs(max));

    if (iteration < max){
        return iteration
    }

    return randomMinMax();
}

function randomMinMaxMentorDesign() {
    var min = 5;
    var max = 10;

return min + (Math.random() * (Math.abs(max) - Math.abs(min)));
}

function randomIntegerMentorDesign(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;
}

function ucFirst(str) {
    var firstSimbol = str.charAt(0);
    var capitalSimbol = firstSimbol.toUpperCase();

    return capitalSimbol + str.slice(1);
}

function checkSpam(str) {
    var lowerStr =  str.toLowerCase();
    var spam1 = "viagra";
    var spam2 = "xxx";

    if (lowerStr.indexOf(spam1) != -1 || lowerStr.indexOf(spam2) != -1) {

      return true;
    }

    return false;
}
function truncate(str, maxlength) {

    if (str.length > maxlength) {
        var newStr = str.slice(0, maxlength  - 3);
        return newStr + "...";
    }

    return str;
}

function extractCurrencyValue(str) {

    var newStr = "";

    for (var i = 0; i <= str.length; i++) {

       if(Number(str[i]) || Number(str[i]) == 0) {
           newStr += str[i];
       }

    }

    return Number(newStr);
}

function extractCurrencyValueByPos(str) {

    var numberStr = "0123456789";
    var newStr = "";

    for (var i = 0; i <= str.length; i++) {

        if(numberStr.indexOf(str[i]) != -1) {
            newStr += str[i];
        }

    }

    return Number(newStr);
}

function helloObject() {
    var user = {};
    user.name = "Вася";
    user.surname = "Петров";
    user.name = "Сергей";
    delete user.name;
}

function isEmpty(obj) {
    var counter = 0;

    for(var prop in obj) {
        counter++;
    }

   return (counter == 0);
}

function isEmptyMentorDesign(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

function sumSalaries() {
    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    var sum = 0;

    for (var prop in salaries) {
        sum += salaries[prop];
    }

    return sum;
}

function maxSalary() {
    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    var maxsalary = 0;
    var maxSalaryWorker = "";

    for (var prop in salaries) {

        if(maxsalary < salaries[prop]) {
            maxsalary = salaries[prop];
            maxSalaryWorker = prop
        }
    }

    if (maxSalaryWorker == "") {
        return "нет сотрудников";
    }

    return  maxSalaryWorker;
}

function multiplyNumeric() {
    var menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    for (var prop in menu) {

        if (isNumeric(menu[prop])) {
            menu[prop] *= 2;
        }
    }

    return menu;
}

function getLastInArray(goods) {
    return goods[goods.length - 1];
}

function addItemInArray(goods) {
    goods.push("Компьютер");

    return goods;
}

function createArray() {
    var styles = ["Джаз", "Блюз"];

    styles.push("Рок-н-Ролл");
    styles[styles.length - 2] = "Классика";

    var first = styles.shift();

    console.log(first);
    styles.unshift("Рэп", "Регги");

    return styles;
}

function randomFromArray() {
    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    // var min = 0;
    // var max = 3;
    // var rand = min + Math.floor(Math.random() * (max + 1 - min));

    var rand = Math.floor(Math.random() * arr.length); //mentor design

    if (arr[rand]) {
        return arr[rand];
    }
}

function calculatorForInput() {

    var arr = [];
    var summ = 0;
    var input = prompt("Введите значение",0);
    while (true) {

        if(input === "" || isNaN(input)|| input == null) break;

        arr.push(+input);
    }

    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }

    alert(summ);
}
//alert(g);
//myAlert();
//variables();
//types();
//operatorsTest();
//askName();
//jsOfficialName();
//sign();
//whoAreYou();
//toTernarRewriteTest();
//toTernarRewrite2();
//inDiapason();
//outDiapason();
//primitiveConversionsTest();
//evenNumbers();
//forToWhile();
//checkNumberValue();
//listPrimes(2,10);
//switchToIf('Firefox');
//ifToSwith();
//console.log(checkAge(19));
//console.log(min(1, 1));
//alert(pow());
//sumToLoop(100);
//alert(sumToRecursion(100));
//alert(sumToFormula(100));
//alert(factorial(5));
//console.log(fib(77));
//sumInterface();
//sumPrices();
//getDecimal(5);
//console.log( fibBinet(8) );
//console.log( randomMax() );
//console.log( randomMinMax() );
//console.log( randomMinMaxMentorDesign() );
//console.log( randomIntegerMentorDesign(1, 3) );
//console.log( ucFirst("") );
//console.log( checkSpam("innocent rabbit") );
//console.log( truncate("Всем привет!", 20) );
//console.log( extractCurrencyValueByPos("$a120b") );
//console.log( maxSalary() );
//console.log( multiplyNumeric() );
//console.log( getLastInArray([1,2,3]) );
//console.log( addItemInArray([1,2,3]) );
//console.log( createArray() );
//console.log( randomFromArray() );
//calculatorForInput();