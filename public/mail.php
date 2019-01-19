<?php
if (isset($_POST['submit'])) {
    $fio = trim(urldecode(strip_tags($_POST['name'])));
    $phone = trim(urldecode(strip_tags($_POST['phone'])));
    echo $fio;
    echo $phone;
    if (mail('an.andryushin@gmail.com', 'Скидка 10%', 'ФИО: '.$fio.', телефон: '.$phone)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка!";
    }
}