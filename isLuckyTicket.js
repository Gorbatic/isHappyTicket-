// Checking for a "lucky ticket" or no;

const isHappyTicket = (numbersTicket) => {
  
  const firstPastNumbersTicket = numbersTicket.slice(0, numbersTicket.length / 2 );
  const secondPastNumbersTicket = numbersTicket.slice(numbersTicket.length / 2);
  
  let result1 = 0;
  let result2 = 0;
  let i = 0;
  
  while (i < firstPastNumbersTicket.length) {
    
    if (numbersTicket.length % 2 === 0) {
      
      result1 = parseInt(firstPastNumbersTicket[i]) + result1;
      
      result2 = parseInt(secondPastNumbersTicket[i]) + result2;
 
    } else {

      console.log('The sum of the numbers must be divisible by 2 without remainder!')
      return '';
    }
  
    i++;
  }
  console.log(result1 === result2);
};
