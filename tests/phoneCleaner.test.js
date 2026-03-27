import cleanPhoneNumber from '../src/phoneCleaner';

describe('cleanPhoneNumber', () => {
  test('Российский номер с 8', () => {
    expect(cleanPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    expect(cleanPhoneNumber('8-927-000-00-00')).toBe('+79270000000');
    expect(cleanPhoneNumber('8 927 000 00 00')).toBe('+79270000000');
  });

  test('Российский номер с +7', () => {
    expect(cleanPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    expect(cleanPhoneNumber('+7-960-000-00-00')).toBe('+79600000000');
  });

  test('Российский номер без кода (10 цифр)', () => {
    expect(cleanPhoneNumber('9270000000')).toBe('+79270000000');
  });

  test('Международный номер (Китай)', () => {
    expect(cleanPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
    expect(cleanPhoneNumber('86 000 000 0000')).toBe('+860000000000'); // без +
  });

  test('Номер с ведущим + и произвольной длиной', () => {
    expect(cleanPhoneNumber('+123456789')).toBe('+123456789');
  });

  test('Пустая строка', () => {
    expect(cleanPhoneNumber('')).toBe('');
    expect(cleanPhoneNumber('   ')).toBe('');
  });

  test('Только нецифровые символы', () => {
    expect(cleanPhoneNumber('abc')).toBe('');
    expect(cleanPhoneNumber('+')).toBe('');
  });

  test('Номер с лишними символами', () => {
    expect(cleanPhoneNumber('+7 (123) 456-78-90 ext.123')).toBe('+71234567890');
    expect(cleanPhoneNumber('8 (123) 456-78-90 доб.123')).toBe('+71234567890');
  });

  test('Номер с 11 цифрами, начинающийся на 7 без +', () => {
    expect(cleanPhoneNumber('79600000000')).toBe('+79600000000');
  });

  test('Номер с 11 цифрами, начинающийся не на 7 и не на 8', () => {
    expect(cleanPhoneNumber('11234567890')).toBe('+11234567890');
  });

  test('Номер с ведущим + и 11 цифрами, начинающийся на 7', () => {
    expect(cleanPhoneNumber('+79600000000')).toBe('+79600000000');
  });

  test('Российский номер с 8 и лишними цифрами в конце', () => {
    expect(cleanPhoneNumber('8 (123) 456-78-90-12-34')).toBe('+71234567890');
  });

  test('Российский номер с 7 и лишними цифрами в конце', () => {
    expect(cleanPhoneNumber('7 (123) 456-78-90-12-34')).toBe('+71234567890');
  });

  test('Номер с более 11 цифр, не начинающийся на 7 или 8', () => {
    expect(cleanPhoneNumber('1234567890123')).toBe('+1234567890123');
  });

  test('Номер с ведущим + и более 11 цифр, начинающийся на 7', () => {
    expect(cleanPhoneNumber('+7 123 456 78 90 12 34')).toBe('+71234567890');
  });
});
