for (let i = 0; i < 100; i++) {
  if (((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) { // si potrebbe mettere un singola condizione (i % 15 === 0)
    console.log('FizzBuzz');
  } else if ((i + 1) % 5 === 0) {
    console.log('Buzz')
  } else if ((i + 1) % 3 === 0) {
    console.log('Fizz')
  } else {
    console.log(i + 1)
  }
}
