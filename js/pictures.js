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

var randomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

var randomArrayElements = function (array, quantityElements) {
  var clone = array.slice();
  var runNumbers = [];

  for (var i = 0; i < quantityElements; i++) {
    var randomElement = Math.floor(Math.random() * clone.length);

    runNumbers.push(clone.splice(randomElement, 1));
  }

  return runNumbers;
}

var createNumericArray = function (quantityNumbers) {
  var array = [];
  var randomIndex;
  var tempVariable;

  for (var i = quantityNumbers; i > 0; i--) array.push(i);

  for (var i = 0; i < array.length - 1; i++) {
    randomIndex = randomInteger(0, array.length - 1);
    tempVariable = array[randomIndex];
    array[randomIndex] = array[array.length - 1];
    array[array.length - 1] = tempVariable;
  }

  return array;
}

var createObjectLibrary = function () {
  var NUMBERS = createNumericArray(25);
  var OBJECTS = [];

  for (var i = 0; i <= NUMBERS.length - 1; i++) {
    var imageUrl = 'photos/' + NUMBERS[i] + '.jpg';

    var newObject = {
      url: imageUrl,
      likes: randomInteger(15, 200),
      comments: randomArrayElements(COMMENTS, 2),
      description: randomArrayElements(DESCRIPTION, 1)
    }

    OBJECTS.push(newObject);
  }

  return OBJECTS;
}

var renderObjects = function () {
  var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
  var pictures = document.querySelector('.pictures');
  var OBJECT_LIBRARY = createObjectLibrary();

  for (var i = 0; i <= OBJECT_LIBRARY.length - 1; i++) {
    var pictureElement = pictureTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();

    pictureElement.querySelector('img').src = OBJECT_LIBRARY[i].url;
    pictureElement.querySelector('.picture-comments').textContent = OBJECT_LIBRARY[i].comments;
    pictureElement.querySelector('.picture-likes').textContent = OBJECT_LIBRARY[i].likes;

    fragment.appendChild(pictureElement);
    pictures.appendChild(fragment);
  }
}

renderObjects();
