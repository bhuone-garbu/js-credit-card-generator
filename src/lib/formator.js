// lazy inefficient formattor
export default (cardNumber, formatType) => {
  if (formatType === 'americanexpress') {
    return `${cardNumber.slice(0,4)} ${cardNumber.slice(4,10)} ${cardNumber.slice(10, 15)}`
  } else {
    return `${cardNumber.slice(0,4)} ${cardNumber.slice(4,8)} ${cardNumber.slice(8,12)} ${cardNumber.slice(12,16)}`;
  }
}
