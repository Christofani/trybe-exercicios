import './Input.css';

// src/components/Input.tsx

//Nesse caso, como estamos utilizando a função handler fora do JSX, precisamos tipar seu parâmetro,
// que é o evento. A própria biblioteca do React nos disponibiliza tipos prontos para isso.
// Nesse caso, iremos definir o tipo do evento como React.ChangeEvent.


//Especificamente nos tipos de evento disponibilizados pelo React (nesse caso, o React.ChangeEvent), 
//precisamos também informar qual é o elemento HTML que dá origem a esse evento.
// Para isso, passamos como “parâmetro do tipo” o tipo correspondente a esse elemento (nesse caso o HTMLInputElement).
// As aspas em “parâmetro do tipo” são propositais:
// no TypeScript chamamos esses parâmetros de generics e, em vez de utilizarmos os parênteses,
// utilizamos o sinal <>.

function Input() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    alert(event.target.value);
  }

  return (
    <>
      <h1>Digite o seu primeiro nome:</h1>
      <input name="firstName" onChange={(event) => handleChange(event)} />
    </>
  );
}

export default Input;