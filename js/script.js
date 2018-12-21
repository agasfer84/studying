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

    while (true) {
        var input = prompt("Введите значение",0);
        if(input === "" || isNaN(input)|| input == null) break;

        arr.push(+input);
    }

    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }

    alert(summ);
}

function find(arr, value) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === value){
            return i;
        }
    }

    return -1;
}

function filterRange(arr, a, b) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] <= b && arr[i] >= a) {
            results.push(arr[i]);
        }
    }

    return results;
}

function eratosthenesSieve() {
    var arr = [];
    var newarr = [];

    for (var i = 2; i <= 100; i++) {
       arr.push(i);
    }

    console.log(arr);

    function getStep(arr, p) {

        // if (p*p >= 100) {
        //     return arr;
        // }
            for (var d = p; d <= arr.length+1; d++) {

                if (d % p != 0) {
                    newarr.push(d);
                }
            }

            return newarr;
    }

    var step_arr = [];

    for(var i = 2; i*i <= 100; i++) {
        step_arr = getStep(step_arr, i);
    }

    console.log(step_arr);

    //todo: Do it later
}

function maximalSubarray(arr) {

    var sum = 0;
    var max = 0;

    for (var i = 0; i < arr.length; i++){
        sum +=  arr[i];

        if(sum > max) {
            max = sum
        }

        if(sum < 0) {
            sum = 0;
        }
    }

    console.log(max);
}

function addClass(object, cls) {

    var obj = {
        className: 'open menu'
    };

    var classes_arr = obj.className.split(" ");

    if (classes_arr.indexOf(cls) == -1) {
        classes_arr.push(cls);
    }

    var classes = classes_arr.join(" ");
    var result = {
        className: classes
    };

    console.log(result);
}

function camelize(string) {

    var str_arr = string.split("-");
    var new_arr = [];

    str_arr.forEach(function(item, i, arr){

        var capitalChar = item;

        if (i != 0) {
            capitalChar = item[0].toUpperCase();

            for (var j = 1; j < item.length; j++) {
                capitalChar += item[j]
            }
        }

        new_arr.push(capitalChar);
    });

    var new_str = new_arr.join("");

console.log(new_str);
}

function camelize_mentor_design(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

function removeClass(object, cls) {

    var obj = {
        className: 'open menu menu'
    };

    var classes_arr = obj.className.split(" ");
    var new_classes_arr = [];

    for (var i = 0; i < classes_arr.length; i++) {

        if (classes_arr[i] != cls) {
            new_classes_arr.push(classes_arr[i]);
        }
    }

    var classes = new_classes_arr.join(" ");
    var result = {
        className: classes
    };

    console.log(result);
}


function filterRangeInPlace(a, b) {
    var arr = [5, 3, 8, 1, 4, 4];

    for (var i = 0; i < arr.length; i++) {

        if(arr[i]< a || arr[i]>b) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
}

function sortArray() {
    var arr = ["HTML", "JavaScript", "CSS"];
    var arrSorted = arr.concat().sort();
    console.log(arr, arrSorted);
}

function sortReverse() {
    var arr = [5, 2, 1, -10, 8];

    console.log(arr.sort().reverse());
}

function randomSort() {
    var arr = [1, 2, 3, 4, 5];

    function compareRandom(a, b) {
            return Math.random() - Math.random();
    }

    console.log(arr.sort(compareRandom));
}

function sortObjects() {
    var vasya = { name: "Вася", age: 23 };
    var masha = { name: "Маша", age: 18 };
    var vovochka = { name: "Вовочка", age: 6 };

    var people = [ vasya , masha , vovochka ];
    var names = [];

    function compare(a, b) {
        return a.age - b.age;
    }

    people.sort(compare);

    for (var i = 0; i < people.length; i++) {
        names[i] = people[i].name;
    }

    console.log(names);
}

function printListRecursion() {
    var list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };
    var result;
    var array = [];

    function rec(item) {

        if(item.next === undefined){
            array.push(item.value);
            return item.value;
        } else {
            result = rec(item.next);
            array.push(item.value);
            return result;
        }

    }

    rec(list);
    console.log(array.reverse());
}

function printListCycle() {
    var list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };
    var array = [];
    var item = list;

    while (item) {
        array.push(item.value);
        item = item.next;
    }

    console.log(array);
}

function aclean() //todo:refactor
{
    var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
    var anagramms_sorted = [];
    var cleaned = [];

    for (var i = 0; i < arr.length; i++) {
        anagramms_sorted.push(arr[i].toLowerCase().split("").sort());
    }

    for (var j = 0; j < anagramms_sorted.length; j++) {

        cleanNotUniq(anagramms_sorted[j], anagramms_sorted);

        cleaned.push(anagramms_sorted[j]);
    }

    function cleanNotUniq(anagramma, array) {
        var index = array.indexOf(anagramma);

            if (index != -1) {
                array.splice(index, 1);
                arr.splice(index, 1);
            }
    }

    console.log(arr);
}

function aclean_mentor()
{
    var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
    var anagramms_sorted = [];

    for (var i = 0; i < arr.length; i++) {
        anagramms_sorted[(arr[i].toLowerCase().split("").sort().join())] = arr[i];
    }

    var result = [];

    for (var key in anagramms_sorted) {
        result.push(anagramms_sorted[key]);
    }

    console.log(result);
}

function unique() {
    var strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", "8-()"
    ];

    var unique = [];

    for (var i = 0; i < strings.length; i++) {
        if (unique.indexOf(strings[i]) !== -1) continue;
        unique.push(strings[i]);
    }

    console.log(unique);
}

function unique_mentor() {
    var strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", "8-()"
    ];

    var unique = {};

    for (var i = 0; i < strings.length; i++) {
        unique[strings[i]] = true;
    }

    var result = Object.keys(unique);

    console.log(result);

}

function rewriteForMap() {
    var arr = ["Есть", "жизнь", "на", "Марсе"];
    var arrLength = arr.map(
        function (item) {
            return item.length;
        }
    );

    console.log(arrLength);
}

function getSums() {
    var arr = [ 1, 2, 3, 4, 5 ];
    var sumsArr = [];

    if (!arr.length) return sumsArr;

    arr.reduce(
        function(previous, item) {
            sumsArr.push(previous + item);
            return previous + item;
        }
        , 0);

    console.log(sumsArr);
}

function checkUndefined(x) {
    var result = (arguments.length>0) ? 1 : 0;
    console.log(result);
}

function sumArguments() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++)
    {
        sum = sum + arguments[i];
    }

    console.log(sum);
}

function newDate() {
    var date = new Date(2012, 1, 20, 3, 12);
    console.log(date);
}

function getWeekDay() {
    var date = new Date(2012,0,3);
    var dayName = date.toLocaleString("ru", {weekday : "short"});
    console.log(dayName);
}

function getLocalDay()
{
    var date = new Date(2012, 0, 3);
    var dateNumber = date.getDay();

    if (dateNumber == 0) {
        dateNumber = 7;
    }

    console.log(dateNumber)
}

function getDateAgo(days) {
    var date = new Date(2015, 0, 2);
    var date_ago = new Date(date);
    date_ago.setDate(date.getDate() - days);

    console.log(date_ago);
}

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);

    console.log(date.getDate());
}

function getSecondsToday() {
    var curDate = new Date();
    var startDate = new Date().setHours(0, 0, 0, 0);

    console.log(Math.floor((curDate - startDate)/1000));
}
function getSecondsToTomorrow() {
    var date = new Date();
    var endDate = new Date().setHours(24, 0, 0, 0);

    console.log(Math.floor((endDate - date)/1000));
}

function formatDate(d){

    var month = (d.getMonth() + 1);
    var day = (d.getDate());
    var hour = (d.getHours());
    var minute = (d.getMinutes());

    month = (month > 9) ? month : "0" + month;
    day = (day > 9) ? day : "0" + day;
    hour = (hour > 9) ? hour : "0" + hour;
    minute = (minute > 9) ? minute : "0" + minute;

    return day + "." + month + "." + d.getFullYear().toString().substring(2) + " " + hour + ":" + minute;
}

function formatDateRelative(date) {
    var curDate = new Date();
    var diff = curDate - date;
    var text;

    if (diff < 1000) {
        text = "только что";
    } else if (diff < 60000) {
        text = Math.floor(diff / 1000) + " сек. назад";
    } else if (diff < 60 * 60000) {
        text = Math.floor(diff / 60000) + " мин. назад";
    } else {
        text = formatDate(date);
    }

    console.log(text);
}


function sum(a){
    return function(b) {
        return a + b;
    };
}

function makeBuffer() {

    var arg_str = "";

    var foo =  function() {
        if (arguments.length == 0) {

            return arg_str;
        }

        for (var i = 0; i < arguments.length; i++) {
                arg_str += arguments[i];
        }
    };

    foo.clear = function() {
        arg_str = "";
    };

    return foo;
}
var buffer = makeBuffer();



var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {

    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    };

}

function filter(arr, func)
{
    var newArr = [];

    arr.forEach(function(item){
        if(func(item)) {
            newArr.push(item);
        }
    });

    return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, end) {
    return function(a){
        return (a >= start && a <= end);
    }
}

function inArray(compare_arr) {
    return function (a) {

        return (compare_arr.indexOf(a) != -1);

    }
}

function makeArmy() {

    var shooters = [];

    // for (var i = 0; i < 10; i++) {
    //     var shooter = (function(x){// функция-стрелок
    //         return function() {
    //             console.log( x ); // выводит свой номер
    //
    //         };
    //         shooters.push(shooter);
    //     })(i);
    //
    // }

    for (var i = 0; i < 10; i++) {

            var shooter = function shoo() { // функция-стрелок
                console.log( shoo.i ); // выводит свой номер

            };
            shooter.i = i;
            shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...

var obj, method;

obj = {
    go: function() { console.log(this); }
};

// obj.go();            // (1) object
//
// (obj.go)();          // (2) object
//
// (method = obj.go)();      // (3) undefined
//
// method = obj;
// method.go();

var calculator = {
    read: function(){
        this.a = +prompt("a", 0);
        this.b = +prompt("b", 0);
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }

};

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        console.log( this.step );
        return this;
    }
};

function sumBrackets(a) {
    var res = a;

     function f (b) {
         res += b;
         return f;
     }

    f.toString = function () {
        return res;
    };

    return f;
}

var ident_obj = {};

function A() {
    return ident_obj;
}
function B() {
    return ident_obj;
}

var a = new A;
var b = new B;

//console.log( a == b ); // true

function Calculator() {
    this.read = function() {
        this.a  = +prompt("a", 0);
        this.b  = +prompt("b", 0);
    };

    this.sum = function() {
       return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

var calculator_construct = new Calculator();
// calculator_construct.read();
//
// console.log( "Сумма=" + calculator_construct.sum() );
// console.log( "Произведение=" + calculator_construct.mul() );

function Accumulator(a) {
    this.value = a;
    this.read = function () {
        this.value += +prompt("значение", 0);
    };
}
var accumulator = new Accumulator(1);

//accumulator.read();
//accumulator.read();
//console.log( accumulator.value );


function CalculatorPower() {
    this.methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };

    this.addMethod = function(name, func){
        if (typeof func !== "function") {
            return console.log('Error values');
        }

        console.log(func);


        this.methods[name] = func;
    };

    this.calculate = function(str){
        var operands = str.split(" ");

        if(operands.length != 3) {
            return console.log('Error values');
        }

        this.a = +operands[0];
        this.b = +operands[2];
        this.name = operands[1];

        if (!this.methods[name] || isNaN(this.a) || isNaN(this.b)) {
            return console.log('Error values');
        }

        return this.methods[this.name](this.a, this.b);
    };

}

var powerCalc = new CalculatorPower;
// powerCalc.addMethod("*", function(a, b) {
//     return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//     return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//     return Math.pow(a, b);
// });
//
// powerCalc.addMethod("test", "test");

//var result = powerCalc.calculate("2 ** 3");
//var result = powerCalc.calculate("2 + 3");
//console.log( result ); // 8


function User(fullName) {
    this.fullName = fullName;
}

var vasya = new User("Василий Попкин");

Object.defineProperties(vasya, {

        firstName: {
            get: function () {
                return this.fullName.split(' ')[0];
            },
            set: function (value) {
                this.fullName = value + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(' ')[1];
            },
            set: function (value) {
                this.fullName = this.firstName + ' ' + value;
            }
        }
    }
);

//console.log( vasya.firstName ); // Василий
//console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

//console.log( vasya.fullName ); // Василий Сидоров

//ladder.up().up().down().up().down().showStep();

// console.log(filter(arr, function(a) {
//     return a % 2 == 0
// }));
//console.log( filter(arr, inBetween(3, 6)) );
//console.log( filter(arr, inArray([1, 2, 10])) );

function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;

    //return this.created;
}

Article.showStats = function () {
    console.log("Всего: " + this.count + ", Последняя: " + this.last);
};

Article.count = 0;


// new Article();
// new Article();
//
// Article.showStats(); // Всего: 2, Последняя: (дата)
//
// new Article();
//
// Article.showStats(); // Всего: 3, Последняя: (дата)


function sumArgs() {
    // arguments.reduce = [].reduce; //одалживание метода reduce у array
    //
    // return arguments.reduce(function(a, b) {
    //     return a + b;
    // });

    // var argsArray = [].slice.call(arguments); //вызов slice у array и приведение arguments к массиву
    //
    // return argsArray.reduce(function(a, b) {
    //         return a + b;
    //     });

    return [].reduce.call(
        arguments, function(a, b) { // данном случае arguments - это контекст, т. е this ля reduce (т. е. массив для обхода)
                   return a + b;
        }
    );
}

//console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива


function applyAll() {
    var argsArray = [].slice.call(arguments, 1); //приводим объект arguments к массиву, убирая первый элемент (который ожидается в виде функции)

    return arguments[0].apply(null, argsArray); //вызываем функцию из первого аргумента и даем ей аргументы в виде нашего массива
}

function applyAllMentorDesign(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

//console.log( applyAll(Math.max, 2, -2, 3) );

function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;
//console.log( sayHi.test ); // 5

var bound = sayHi.bind({
    name: "Вася"
});

//console.log( bound.test );

// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         alert( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         alert( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//     }
// };
//
// var vasya2 = user;
// user = null;
// vasya2.checkPassword();

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        var self = this;
        ask("Ваш пароль?", this.password,
                this.loginDone.bind(this, true),
                this.loginDone.bind(this, false)
        );
    }
};

var vasya3 = user;
user = null;
//vasya3.checkPassword();

function work(a) {
    return a; // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//    console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }

function work2(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging2(f, log) {

    function wrapper() {
        var argsArray = [].slice.call(arguments); //приводим объект arguments к массиву
        log.push(argsArray);
        return f.apply(this, argsArray); //вызов через apply
    }

    return wrapper;
}

var log2 = [];
work2 = makeLogging2(work, log2);

work2(1, 2); // 3
work2(4, 5); // 9

// for (var i = 0; i < log2.length; i++) {
//     var args = log2[i]; // массив из аргументов i-го вызова
//     console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    function wrapper(a) {

        if (f.b != a)
        {
            f.b = a;
            f.cache = f.call(this, f.b);
        }

        //console.log(f.cache);

        return f.cache;
    }

    return wrapper;
}

function makeCachingMentorDesign(f) {
    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };

}

f = makeCaching(f);

var a2, b2;

a2 = f(1);
b2 = f(1);
// console.log( a2 == b2 ); // true (значение закешировано)
//
// b2 = f(2);
// console.log( a2 == b2 ); // false, другой аргумент => другое значение

function formatDatePolymorphic(date) {
    var c = {}.toString.call(date).slice(8, -1);

    function setPrefixDate(x) {
        return (x < 10) ? "0" + x : "" + x;
    }

    var newDate = new Date(0, 0 ,0);

    if (c == 'Date') {
        newDate = date;
    } else if (c == 'Array') {
        newDate = new Date(date[0], date[1], date[2]);
    } else if (c == 'Number') {
        newDate = new Date(1000 * date);
    } else if (c == 'String') {
        newDate = new Date(Date.parse(date));
    }

    return setPrefixDate(newDate.getDate()) + "." + setPrefixDate(newDate.getMonth() + 1) + "." + newDate.getFullYear().toString().slice(2, 4);
}

function formatDatePolymorphicMentorDesign(date) {
    if (typeof date == 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date * 1000);
    } else if (typeof date == 'string') {
        // строка в стандартном формате автоматически будет разобрана в дату
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }
    // преобразования для поддержки полиморфизма завершены,
    // теперь мы работаем с датой (форматируем её)

    return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});

    /*
     // можно и вручную, если лень добавлять в старый IE поддержку локализации
     var day = date.getDate();
     if (day < 10) day = '0' + day;

     var month = date.getMonth() + 1;
     if (month < 10) month = '0' + month;

     // взять 2 последние цифры года
     var year = date.getFullYear() % 100;
     if (year < 10) year = '0' + year;

     var formattedDate = day + '.' + month + '.' + year;

     return formattedDate;
     */
}

// console.log( formatDatePolymorphic('2011-10-02') ); // 02.10.11
// console.log( formatDatePolymorphic(1234567890) ); // 14.02.09
// console.log( formatDatePolymorphic([2014, 0, 1]) ); // 01.01.14
// console.log( formatDatePolymorphic(new Date(2014, 0, 1)) ); // 01.01.14


// var leader = {
//     name: "Василий Иванович",
//     age: 35
// };

//console.log(JSON.stringify(leader));
//console.log(JSON.parse(JSON.stringify(leader)));

var leader = {
    name: "Василий Иванович"
};

var soldier = {
    name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

// console.log(team);
// console.log(JSON.stringify(team, function(key, value) {
//     if (key == 'soldier') return soldier.name;
//     if (key == 'leader') return leader.name;
//     return value;
// }));

function printNumbersInterval() {
    var number = 1;
    var interval = setInterval( function () {
            console.log(number);

            if (number >= 20) {
                clearInterval(interval);
            }

            number++;
        }
        , 100
    );
}

//printNumbersInterval();

function printNumbersTimeout() {
    var number = 1;
    var timeout = setTimeout( function run () {
            console.log(number);

            if (number < 20) {
                setTimeout(run, 100);
            }

            number++;
        }
        , 100
    );
}

//printNumbersTimeout();

setTimeout(function() {
    console.log( i );
}, 100);

// var i;
//
// function hardWork() {
//     // время выполнения этого кода >100 мс, сам код неважен
//     for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
// }

//hardWork();

// var i;
// var timer = setInterval(function() { // планируем setInterval каждые 10 мс
//     i++;
// }, 10);
//
// setTimeout(function() { // через 50 мс - отмена setInterval
//     clearInterval(timer);
//     alert( i ); // (*)
// }, 50);
//
// // и запускаем тяжёлую функцию
// function ff() {
//     // точное время выполнения не играет роли
//     // здесь оно заведомо больше 100 мс
//     for (i = 0; i < 1e8; i++) f[i % 2] = i;
// }
//
// ff();

function ff(x) {
    console.log( x );
}

function delay(f, ms) {
    return function () {
        var self = this;
        var a = arguments;
        setTimeout( function () { f.apply(self, a)}, ms);
    }
}

var f1000 = delay(ff, 1000);
var f1500 = delay(ff, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function fd(x) { console.log(x) ;}

function debounce(f, ms) {

    var timer = null;

    return function () {
        var self = this;
        var args = arguments;

        function complete() {
            f.apply(self, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout( complete, ms);
    }
}

var fms = debounce(fd, 1000);

fms(1); // вызов отложен на 1000 мс
fms(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout( function() { fms(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { fms(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)

//console.log(performance.now()/1000 +' sec');
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
// var arr = ["test", 2, 1.5, false];
// console.log(find(arr, "test"));
// var arr = [5, 4, 3, 8, 0];
// console.log(filterRange(arr, 3, 5));
//eratosthenesSieve();
//maximalSubarray([2, -1, 2, 3, -9]);

// addClass(false, 'new');
// addClass(false, 'open');
// addClass(false, 'me');
// addClass(false, 'mymenu');

//camelize("list-style-image");

// removeClass(false, 'menu');
// removeClass(false, 'blabla');
//filterRangeInPlace(1, 4);
//sortArray();
//sortReverse();
//randomSort();
//sortObjects();
//printListRecursion();
//printListCycle();
//aclean();
//aclean_mentor();
//unique();
//unique_mentor();
//rewriteForMap();
//getSums();
//checkUndefined();
//sumArguments(1, 2, 3, 4);
//newDate();
//getWeekDay();
//getLocalDay();
//getDateAgo(365);
//getLastDayOfMonth(2012, 1);
//getSecondsToday();
//getSecondsToTomorrow();
//formatDate();
//formatDateRelative(new Date(new Date - 86400 * 1000));
//console.log(sum(5)(-1));

// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// console.log(buffer());

// buffer("Тест");
// buffer(" тебя не съест ", "так-то");
// console.log( buffer() ); // Тест тебя не съест
// buffer.clear();
// console.log( buffer() );

// users.sort(byField('name'));
// console.log(users);
// users.forEach(function(user) {
//     console.log( user.name );
// });
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//     console.log( user.name );
// }); // Маша, Вася, Петя

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

//console.log( [[0]][0][0] );
//console.log(sumBrackets(0)(1)(2)(3)(4)(5));