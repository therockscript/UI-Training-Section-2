function FormGroup(props) {
  const { label, type, name, value, disabled, onInputChange } = props;

  return (
    <div className="form-group">
      <label className="font-weight-bold">{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onInputChange}
        placeholder={label}
      />
    </div>
  );
}

export default FormGroup;
