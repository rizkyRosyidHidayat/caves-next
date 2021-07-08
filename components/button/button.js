const Button = ({ text }) => {
  return (
    <button className={`
      apperiance-none 
      font-heading 
      btn-primary 
      transition-all
      text-2xl px-6 py-2`}>
      { text }
    </button>
  )
}

export default Button