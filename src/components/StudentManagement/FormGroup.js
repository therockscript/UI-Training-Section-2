function FormGroup(props) {
  const { label, type, name, value, onInputChange } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" name={name} value={value} 
        onChange={onInputChange}
      />
    </div>
  );
}

export default FormGroup;
