function Button({ text, color }) {
  return (
    <button className="cmp-button" style={{ background: color }}>
      {text}
    </button>
  )
}

export default Button;