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
    <title>
        Тест
    </title>
</head>
<body>

<!-- в элементе с id="mocha" будут результаты тестов -->
<div id="mocha"></div>


<!-- запустить тесты! -->
<script>
    mocha.run();
</script>
</body>
</html>