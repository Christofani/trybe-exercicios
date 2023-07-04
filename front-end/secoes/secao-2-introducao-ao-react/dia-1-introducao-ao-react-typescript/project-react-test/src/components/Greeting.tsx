/* eslint-disable react/jsx-closing-tag-location */
function Greeting() {
  const firstName = 'Rodrigo';
  const lastName = 'Christofani';

  return (<h1 className="greeting">
    Olá
    {' '}
    {`${firstName} ${lastName}`}
    <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
  </h1>);
}

export default Greeting;
