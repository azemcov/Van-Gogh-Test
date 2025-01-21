let obj1 = {
  title: 'Встраиваемый светильник Markt',
  pic: './src/pics/pic1.png',
  price: '3490',
  oldPrice: '5060',
};
let obj2 = {
  title: 'Линейный светильник ARG',
  pic: './src/pics/pic2.png',
  price: '6700',
  oldPrice: '6060',
};
let obj3 = {
  title: 'Сведодиодный светильник',
  pic: './src/pics/pic3.png',
  price: '5060',
  oldPrice: '6060',
};

function pic(num) {
  if ((num + 1) % 3 === 0) {
    return obj3.pic;
  } else if ((num + 1) % 3 === 1) {
    return obj1.pic;
  } else {
    return obj2.pic;
  }
}

function title(num) {
  if ((num + 1) % 3 === 0) {
    return obj3.title;
  } else if ((num + 1) % 3 === 1) {
    return obj1.title;
  } else {
    return obj2.title;
  }
}

function price(num) {
  if ((num + 1) % 3 === 0) {
    return new Intl.NumberFormat('ru-RU').format(obj3.price);
  } else if ((num + 1) % 3 === 1) {
    return new Intl.NumberFormat('ru-RU').format(obj1.price);
  } else {
    return new Intl.NumberFormat('ru-RU').format(obj2.price);
  }
}

function oldPrice(num) {
  if ((num + 1) % 3 === 0) {
    return new Intl.NumberFormat('ru-RU').format(obj3.oldPrice);
  } else if ((num + 1) % 3 === 1) {
    return new Intl.NumberFormat('ru-RU').format(obj1.oldPrice);
  } else {
    return new Intl.NumberFormat('ru-RU').format(obj2.oldPrice);
  }
}

function isSale(num) {
  return (num + 1) % 2 === 0;
}

document.getElementById('search-section_bar_cards').innerHTML = Array(8)
  .fill(0)
  .map(
    (_, num) => `<div id="card-${num + 1}" class="card">
  ${
    isSale(num)
      ? ''
      : `<button class="sale-label font_16px white_400">Акция</button>`
  }
  <div class="pic-section"
    ><img class="pic" src="${pic(num)}" alt="" />
    <div class="details-section">
      <button src="" class="white_600 details">Подробнее</button>
    </div></div
  >
  <p class="font_title m-2" id="card-${num + 1}_title"
    >${title(num)}</p
  >
  <div class="price m-2">
    <div class="standart-price">
      ${
        isSale(num)
          ? `<p class="font_price font_700" id="card-${num + 1}_standart-price"
        >${price(num)}</p
      ><p class="font_price font_600">₽</p>`
          : `<div class="new-price" 
      ><p class="font_price font_700" id="card-${num + 1}_new-price">${price(
              num
            )}</p
      ><p class="font_price font_600">₽</p></div>
    <div class="old-price"
      ><p class="font_price font_700" id="card-${num + 1}_old-price">${oldPrice(
              num
            )}</p
      ><p class="font_price font_600">₽</p></div>`
      }
    </div>
  </div>
</div>`
  ).join``;
