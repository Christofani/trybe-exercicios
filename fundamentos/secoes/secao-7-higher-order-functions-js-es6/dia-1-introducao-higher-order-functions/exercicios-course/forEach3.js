const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
  const enviaEmail = (email) => {
    console.log(`Email enviado para: ${email} com sucesso`)
  };


// O primeiro parametro sempre será o valor do array na suadevida posição 
// O segundo parametro será a posição do elemento dentro do array
// O terceiro parametro será o tudo que está dentro do array.

  emailListInData.forEach((xibaba, posicao, array) => {
    enviaEmail(xibaba);
    console.log(`Sua posição é : ${posicao}`)
    console.log(`A quantidade de pessoas no processo seletivo é : ${array.length}`);
  })