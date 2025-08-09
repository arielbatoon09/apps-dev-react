function Button(props) {
  return (
    <button className="cmp-button" style={{ background: props.color }}>
      {props.buttonLabel}
    </button>
  )
}

export default Button;