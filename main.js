'use strict';

document.querySelector('.guess').textContent = 'Tebak';

let secretNumber = Math.trunc(Math.random() * 100) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.guess').addEventListener('click', function () {
  const input = Number(document.querySelector('.input-number').value);
  console.log(input);
  let messageNumber = input;

  if (!input) {
    displayMessage('Angka tidak boleh kosong');
  } else if (input === secretNumber) {
    document.querySelector('.box-number').textContent = secretNumber;
    displayMessage('SELAMAT!! Kamu berhasil menebak Angkanya');
    document.querySelector('body').style.backgroundColor = 'yellow';
    document.querySelector('.text').style.color = 'black';
    document.querySelector('.message').style.color = 'black';
  } else if (input !== secretNumber) {
    displayMessage(
      input > secretNumber ? 'Angka Terlalu Tingi' : 'Angka Terlau Rendah'
    );
  }
});

document.querySelector('.ulangi').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.box-number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(4, 4, 34)';
  document.querySelector('.text').style.color = 'white';
  document.querySelector('.message').style.color = 'white';
  document.querySelector('.input-number').value = '';
});
