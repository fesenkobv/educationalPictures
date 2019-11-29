function init() {
    var images = document.getElementsByTagName("img");
    for (i = 0; i < images.length; i++) {
        images[i].onclick = showAnser;//назначение обработчика
        images[i].onmouseover = showBlur;
    }
}
window.onload = init;

function showAnser(e) {//e - объект события, который передается функции showAnser
    var image = e.target;
    var nameFirst = image.src;//для возвращения первоначальной картинки
    var nameSecond = image.id;
    nameSecond = "jpg/" + nameSecond + ".jpg";
    image.src = nameSecond;
    //возвращение первой картинки с задержкой
    setTimeout(recovery, 500);
    function recovery() {
        image.src = nameFirst;
    }
}
function showBlur(e) {//e - объект события, который передается функции showBlur
    var image = e.target;//передаем параметры объекта на который указывает курсор переменной
    var nameFirst = image.src;//для возвращения первоначальной картинки
    var nameSecond = image.src.replace("one.jpg", "two.jpg");
    image.src = nameSecond;

    //возвращение первой картинки с задержкой
    setTimeout(recovery, 500);
    function recovery() {
        image.src = nameFirst;
    }
}