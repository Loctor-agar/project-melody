$(document).ready(function () {
  let currentFloor = 2;
  let counterUp = $('.counter-up'); /* кнопка увелечения этажа */
  let counterDown = $('.counter-down'); /* кнопка увелечения этажа */
  let floorPath = $('.home-image path')

  // функция при наведении мышкой на этаж
  floorPath.on('mouseover',function () { 
    floorPath.removeClass('current-floor'); /* удаляем активный класс у этажей */
    currentFloor = $(this).attr('data-floor'); /* получаем значение текущего этажа */
    $('.counter').text(currentFloor); /* записываем значение этажа в счетчик справа */
   });
  counterUp.on('click',function () { 
    if (currentFloor <  18){
      currentFloor++; 
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });// форматируем переменную с этажом чтобы 01 а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетсчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    } 
  });
  counterDown.on('click',function () { 
    if (currentFloor > 2){
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor')
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
    }
   })
});