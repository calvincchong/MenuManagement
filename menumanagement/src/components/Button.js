
// different buttons exposed as props to the Button component
const Button = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button;