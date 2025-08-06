function Button(props) {
  return (
    <button className="cmp-button">{ props.label }</button>
  )
}

// For Reference Only
function Button2({ label }) {
  return (
    <button className="cmp-button">{ label }</button>
  )
}

export default Button;