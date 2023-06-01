function checkNumber(number) {
    if (typeof number !== 'number') {
      return '';
    }
    
    if (number % 2 === 0) {
      return 'Число парне';
    } else {
      return 'Число не парне';
    }
  }

  function sumOfFirstFivePrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 5) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
      num++;
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }

  function sumOfOnes(n) {
    let sum = 0;
    let num = 1;
  
    for (let i = 0; i < n; i++) {
      sum += num;
      num = num * 10 + 1;
    }
  
    return sum;
  }