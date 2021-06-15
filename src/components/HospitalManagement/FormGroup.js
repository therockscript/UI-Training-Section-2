function FormGroup(props){
	const{label, type, name, value}=props;

	return <div className="form-group">
	         <label>{label}</label>
	         <input type={type} className="form-control" name={name} value={value}/>

	      </div>
}
export default FormGroup;