const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome pessoa usuária!
  


//Com o ES6, podemos pré-definir um parâmetro padrão para a função.
// Assim, podemos reescrever o exemplo anterior da seguinte forma:
  const greeting1 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

  greeting1('Rodrigo'); // // Welcome pessoa usuária!
  