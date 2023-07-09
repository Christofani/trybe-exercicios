// /src/components/Button.tsx

function Button() {
  function handleClick() {
    alert('Meu Primeiro event Handler com React')
  }
  return (
    <button onClick={ handleClick }>
      Clique em mim!
    </button>
  )
}

export default Button;