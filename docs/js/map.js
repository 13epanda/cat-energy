// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    center: [59.938635, 30.323118],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    // Элементы управления
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
    controls: [
      'zoomControl', // Ползунок масштаба
    ]
  });

  // Добавление метки
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
  var myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Мяу! Наш офис обнаружен',
    // Балун откроется при клике по метке.
    balloonContent: 'Заходи, помурррчим =^.^='
  },{
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',

    // Своё изображение иконки метки.
    iconImageHref: '../img/tablet/map-pin.png',
    // Размеры метки.
    iconImageSize: [87, 82],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-44, -82],
  });

  // После того как метка была создана, добавляем её на карту.
  myMap.geoObjects.add(myPlacemark);

}
