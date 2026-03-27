export default function cleanPhoneNumber(phone) {
  const trimmed = phone.trim();
  if (trimmed === '') return '';

  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return '';

  const hasLeadingPlus = trimmed[0] === '+';

  if (hasLeadingPlus) {
    if (digits.startsWith('7')) {
      const normalized = digits.length > 11 ? digits.slice(0, 11) : digits;
      return `+${normalized}`;
    }
    return `+${digits}`;
  }

  if (digits.length === 12 && digits.startsWith('86')) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+7${digits}`;
  }
  if (digits.length === 11 && digits[0] === '8') {
    return `+7${digits.slice(1)}`;
  }
  if (digits.length === 11 && digits[0] === '7') {
    return `+${digits}`;
  }
  if (digits.length > 11) {
    if (digits[0] === '8') {
      const firstTen = digits.slice(1, 11);
      return `+7${firstTen}`;
    }
    if (digits[0] === '7') {
      const firstEleven = digits.slice(0, 11);
      return `+${firstEleven}`;
    }
  }

  return `+${digits}`;
}
