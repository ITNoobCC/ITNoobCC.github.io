'use strict';
window.onload = function () {
  var sendBank = document.getElementById('btnSend');
  var inputNumberCard = document.getElementById('input-numberCard');
  var inputName = document.getElementById('input-name');
  var inputCvc = document.getElementById('input-cvc');
  var phoneNumber = document.getElementById('phone');

  var operatorMobile = this.document.getElementById('operatorMobile');
  var mobileBlock = this.document.getElementById('mobileBlock');

  let errorNumberCard = document.createElement('div');
  let errorNameCard = document.createElement('div');
  let errorCvcCard = document.createElement('div');

  let flagNumberCard = 0;
  let flagNameCard = 0;
  let flagCvcCard = 0;

  inputNumberCard.oninput = function () {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    // errorNumberCard.className = 'errorMessage';
    if (inputNumberCard.value === '') {
      // errorNumberCard.innerHTML = '<h4>Номер карты не заполнен!</h4>';
      flagNumberCard = 1;
      inputNumberCard.classList.add('errorBorderRed');
    } else if (inputNumberCard.value.length < 16) {
      // errorNumberCard.innerHTML = '<h4>Номер карты не должен быть меньше 16!</h4>';
      flagNumberCard = 1;
      inputNumberCard.classList.add('errorBorderRed');
    } else {
      errorNumberCard.innerHTML = '';
      errorNumberCard.className = '';
      inputNumberCard.classList.remove('errorBorderRed');
      flagNumberCard = 0;
    }
  };

  function validationName() {
    var flagEnter = 0;
    for (var i = 0; i < inputName.value.length; i++) {
      if (inputName.value[i] === ' ' || inputName.value[i] === '0' || inputName.value[i] === '1' ||
        inputName.value[i] === '2' || inputName.value[i] === '3' || inputName.value[i] === '4' ||
        inputName.value[i] === '5' || inputName.value[i] === '6' || inputName.value[i] === '7' ||
        inputName.value[i] === '8' || inputName.value[i] === '9') {
        flagEnter++;
      }
    }
    if (flagEnter > 1 || flagEnter === 0) {
      // errorNameCard.className = 'errorMessage';
      // errorNameCard.innerHTML = '<h4>Имя пользователя заполнено не верно!</h4>';
      flagNameCard = 1;
      inputName.classList.add('errorBorderRed');
      return(error);
    } else {
      errorNameCard.innerHTML = '';
      errorNameCard.className = '';
      inputName.classList.remove('errorBorderRed');
      flagNameCard = 0;
      return(error);
    }
  }

  inputName.oninput = function () {
    this.value = this.value.toUpperCase();
    if (inputName.value === '') {
      // errorNameCard.className = 'errorMessage';
      // errorNameCard.innerHTML = '<h4>Имя пользователя не заполнено!</h4>';
      flagNameCard = 1;
      inputName.classList.add('errorBorderRed');
    } else if (inputName.value.length < 6) {
      // errorNameCard.className = 'errorMessage';
      // errorNameCard.innerHTML = '<h4>Имя пользователя слишком короткое!</h4>';
      flagNameCard = 1;
      inputName.classList.add('errorBorderRed');
    }
  };

  inputCvc.oninput = function () {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    // errorCvcCard.className = 'errorMessage';
    if (inputCvc.value === '') {
      // errorCvcCard.innerHTML = '<h4>CVC карты не заполнен!</h4>';
      flagCvcCard = 1;
      inputCvc.classList.add('errorBorderRed');
    } else if (inputCvc.value.length < 3) {
      // errorCvcCard.innerHTML = '<h4>CVC должен состоять из 3 цифр!</h4>';
      flagCvcCard = 1;
      inputCvc.classList.add('errorBorderRed');
    } else {
      errorCvcCard.innerHTML = '';
      errorCvcCard.className = '';
      inputCvc.classList.remove('errorBorderRed');
      flagCvcCard = 0;
    }
  };

  sendBank.onclick = function () {
    inputName.value = inputName.value.replace(/\s+/g, ' ').trim();
    validationName();
    // document.body.append(errorNumberCard);
    // document.body.append(errorNameCard);
    // document.body.append(errorCvcCard);
    if (flagNumberCard === 0 && flagNameCard === 0 && flagCvcCard === 0) {
      window.alert('Запрос отправлен!');
    }
  };

  phoneNumber.oninput = function () {
    console.log(phoneNumber.value);
  };
  
  $(document).ready(function () {
    $(phoneNumber).mask('+7(999)999-99-99');
  });

  $(phoneNumber).keypress(function () {
    var operator = phoneNumber.value[3] + phoneNumber.value[4] + phoneNumber.value[5];
    if (operator === '910' || operator === '915' || operator === '916' ||
      operator === '919' || operator === '917') {
      operatorMobile.textContent = 'МТС';
      mobileBlock.classList.add('operatorMTC');
    } else if (operator === '925' || operator === '926' || operator === '929') {
      operatorMobile.textContent = 'МЕГАФОН';
      mobileBlock.classList.add('operatorMEGAFON');
    } else if (
      operator === '903' ||
      operator === '905' ||
      operator === '906' ||
      operator === '909' ||
      operator === '961' ||
      operator === '962' ||
      operator === '963' ||
      operator === '964' ||
      operator === '965'
    ) {
      operatorMobile.textContent = 'Билайн';
      mobileBlock.classList.add('operatorBILAIN');
    } else if (operator === '902' || operator === '977') {
      operatorMobile.textContent = 'Теле2';
      mobileBlock.classList.add('operatorTELE2');
    } else {
      operatorMobile.textContent = 'ОПЕРАТОР';
      mobileBlock.classList.remove('operatorMTC');
      mobileBlock.classList.remove('operatorMEGAFON');
      mobileBlock.classList.remove('operatorBILAIN');
      mobileBlock.classList.remove('operatorTELE2');
    }
  });
  var cat = {
    meow: function(){
      return 'Meow';
    }
  };

};

module.exports = cat;