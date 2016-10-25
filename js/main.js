function validateForm(){
	/* Escribe tú código aquí */
	//Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
//Si algún campo presenta error debe informarse al usuario por medio de un alert.
    var name=document.getElementById('name').value;
    var lastName=document.getElementById('lastname').value;
    var email=document.getElementById('input-email').value;
    var password=document.getElementById('input-password').value;
//name
    if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
        //return false;
    alert("Ingrese su nombre");    
	}
//lastname
	if( lastname == null || lastname.length == 0 || /^\s+$/.test(lastname) ) {
	    //return false;
    alert("Ingrese su apellido");    
	}
//email
    if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
        //return false;
    alert("Ingrese un correo valido");    
	}
//password
	if( password == null || password.length == 0 || /^\s+$/.test(password) ) {
	    //return false;
    alert("Ingrese su contraseña");    
	}

}
validateForm();