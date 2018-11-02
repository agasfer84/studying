<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- подключаем стили Mocha, для отображения результатов -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css">
    <!-- подключаем библиотеку Mocha -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script>
    <!-- настраиваем Mocha: предстоит BDD-тестирование -->
    <script>
        mocha.setup('bdd');
    </script>

    <!-- подключаем chai -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script>
    <!-- в chai есть много всего, выносим assert в глобальную область -->
    <script>
        var assert = chai.assert;
    </script>
    <script src="/js/script.js"></script>
    <!-- в этом скрипте находятся спеки -->
    <script src="/js/tests.js"></script>
    <script src="/js/tanks.js"></script>
    <title>
        Тест
    </title>
</head>
<body>

<!-- в элементе с id="mocha" будут результаты тестов -->
<div id="mocha"></div>

<style>
    #tank {
        background:green; width:10px; height:10px; position:absolute; top:200px; left:200px;
        -webkit-transition: 1s ease-out 0.5s;
        -moz-transition: 1s ease-out 0.5s;
        -o-transition: 1s ease-out 0.5s;
        transition: 1s ease-out 0.5s;
    }
</style>

<div id="tank"></div>

<a href="https://app.sarplat.ru/payment/organization-direct?link=aW5uPTY0NTA5MzgxNzImbnVtYmVyPTA0MDkzODk2MDImc3VtbT03NzY1JnBheW1lbnRjb2RlPTAwNTAwJmVtYWlsPXRlc3RAdGVzdC5ydQ==">Тест</a>


<!-- запустить тесты! -->
<script>
    mocha.run();
</script>
</body>
</html>