function Button({ btnClass, onclick, disabled, children }) {
  return (
    <button className={btnClass} onClick={onclick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
