// /src/components/Button.tsx
type ButtonProp ={
  children : React.ReactNode
  onClick: () => void
}

import './button.css';

function Button({children, onClick }: ButtonProp) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;