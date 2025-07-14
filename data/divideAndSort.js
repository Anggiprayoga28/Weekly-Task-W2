function divideAndSort(number) {
  const digits = number.toString().split('');  
  const sortedDigits = digits.sort((a, b) => parseInt(a) - parseInt(b));
  const result = parseInt(sortedDigits.join(''));
  
  return result;
}

// console.log(divideAndSort(5956560159466056)); 


module.exports = {divideAndSort}