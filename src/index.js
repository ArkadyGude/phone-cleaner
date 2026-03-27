import cleanPhoneNumber from './phoneCleaner';

const input = document.getElementById('phoneInput');
const button = document.getElementById('cleanBtn');
const resultDiv = document.getElementById('result');

button.addEventListener('click', () => {
  const cleaned = cleanPhoneNumber(input.value);
  resultDiv.textContent = `Результат: ${cleaned || '(пусто)'}`;
});
