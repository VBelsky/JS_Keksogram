var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var randomArrayElement = function (array) {
  var randomElement = Math.floor(Math.random() * array.length);
  return randomElement;
}

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var DESCRIPTION = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var IMAGES_URLS = [];

for (var i = 1; i <= 25; i++) {
  IMAGES_URLS.push('photos/' + i + '.jpg');
}


var randomObject = function () {
  var imageUrlRand = randomArrayElement(IMAGES_URLS);
  var likesQuantityRand = randomInteger(15, 200);
  var commentRand = randomArrayElement(COMMENTS);
  var descriptionRand = randomArrayElement(DESCRIPTION);

  var newObject = {
    imageUrl: IMAGES_URLS[imageUrlRand],
    likesQuantity: likesQuantityRand,
    comments: COMMENTS[commentRand],
    description: DESCRIPTION[descriptionRand]
  }

  IMAGES_URLS.splice(imageUrlRand, 1);

  return newObject;
}

var renderObject = function () {
  var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
  var pictureElement = pictureTemplate.cloneNode(true);
  var newObject = randomObject();

  pictureElement.querySelector('img').src = newObject.imageUrl;
  pictureElement.querySelector('.picture-comments').textContent = newObject.comments;
  pictureElement.querySelector('.picture-likes').textContent = newObject.likesQuantity;

  return pictureElement;
}

var addImages = function () {
  var pictures = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 25; i++) {
    fragment.appendChild(renderObject());
  }

  pictures.appendChild(fragment);
}

addImages();
