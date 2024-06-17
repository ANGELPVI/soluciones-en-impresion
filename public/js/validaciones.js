// Validar los campos de inicio de sesión
let login=document.getElementsByName('login')[0];
let textoError=document.getElementById('error');
let textErrorUsuario=document.getElementById('usuarioError');
let botonLogin=document.getElementById('bottonLogion');
const expreciones={
    email: /^[a-zA-Z0-9_.ñÑ+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
//El && evalua que el objeto login no este vacio o sea null
//Así evitamos que el codigo se detenga y no se ejecuten las otras funciones.
login && login.addEventListener('input', function(){
    
  if(expreciones.email.test(login.email.value)!=true||login.password.value==''){
    botonLogin.setAttribute('disabled','disabled');
    botonLogin.classList.remove('buttonLoginEnable')
    botonLogin.classList.add('buttonLogin')

  }else{
    botonLogin.removeAttribute('disabled');
    botonLogin.classList.remove('buttonLogin')
    botonLogin.classList.add('buttonLoginEnable')    
  }
    
 
  
});


 //Quitar error de usuario o contraseña
  login && login.email.addEventListener('click', ()=>{
    textoError.classList.add('hidden');
    textErrorUsuario.classList.add('hidden');

  })

  login && login.password.addEventListener('click', ()=>{
   textoError.classList.add('hidden');
  })

  // VALIDACION DE LOS INPUTS DE EL FORMULARIO REGISTRO. 
 let formularioRegistro=document.getElementsByName('registro')[0];
 let buttonReg=document.getElementById('buttonRegistro');
 formularioRegistro.addEventListener('input', function(){
  //Objeto que guarda todos los valores que reciva el formulario de registro.
  let entradaFormReg={
    nombre:formularioRegistro.nombre.value.length,
    apellidos:formularioRegistro.apellidos.value.length,
    email:formularioRegistro.email.value,
    password:formularioRegistro.password.value,
    telefono:formularioRegistro.telefono.value,
    estado:formularioRegistro.estado.value,
    ciudad:formularioRegistro.ciudad.value,
    postal:formularioRegistro.cp.value,
    colonia:formularioRegistro.colonia.value,
    calle:formularioRegistro.calle.value
  }

  //Hay que estudiar cual es la mejor practica para validar cada input de formulario registro
  
  if (entradaFormReg.nombre>=4){
    console.log('se bloquea');
    buttonReg.removeAttribute('disabled');
  }else{
    console.log('se desbloquea');
    buttonReg.setAttribute('disabled','disabled');
  }
  
      
      
   
   //console.log(formularioRegistro.apellidos.value);

 });
