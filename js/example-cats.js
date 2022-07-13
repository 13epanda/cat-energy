const range = document.querySelector('#condition');
const catBefore = document.querySelector('.example__cat--before');
const catAfter= document.querySelector('.example__cat--after');
const catThumb = document.querySelector('.example__thumb');

//При клике на кнопку Стало
document.querySelector('.example__after').addEventListener('click', function() {
  catBefore.style.width = 100 + '%';
  catAfter.style.width = 0 + '%';
  catThumb.style.left = 0;
  catThumb.style.right = 'auto';
})
//При клике на кнопку Было
document.querySelector('.example__before').addEventListener('click', function() {
  catBefore.style.width = 0 + '%';
  catAfter.style.width = 100 + '%';
  catThumb.style.right = 0;
  catThumb.style.left = 'auto';
})
//При изменении положения бегунка
range.addEventListener('input', function(e) {
  const value = e.target.value;
  catBefore.style.width = (100 - value) + '%';
  catAfter.style.width = value + '%';
})
