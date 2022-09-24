// DOM
let ids=document.getElementById('id')
let nombre=document.getElementById('nombre')
let apellidos=document.getElementById('apellidos')
let fecha=document.getElementById('nacimiento')
let email=document.getElementById('email')
let guardar=document.getElementById('guardar')
let crudBox=document.getElementById('CrudBox')
//Modal
let idsModal=document.getElementById('idModal')
let nombreModal=document.getElementById('nombreModal')
let apellidosModal=document.getElementById('apellidosModal')
let fechaModal=document.getElementById('nacimientoModal')
let emailModal=document.getElementById('emailModal')

const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

function limpiarInputs(){
    ids.value=''
    nombre.value=''
    apellidos.value=''
    nacimiento.value=''
    email.value=''
    
    idsModal.value=''
    nombreModal.value=''
    apellidosModal.value=''
    fechaModalModal.value=''
    emailModal.value=''
}

guardar.addEventListener('click',e=>{
    if(id.value.length!=0 &&nombre.value.length!=0 && apellidos.value.length!=0 && fecha.value.length!=0 && email.value.length!=0 ){
        let newuser={
            id:id.value,
            nombre:nombre.value,
            apellido:apellidos.value,
            nacimiento:fecha.value,
            email:email.value
        }
        if(localStorage.getItem("Usuarios") === null || localStorage.getItem("Usuarios") === [] || localStorage.getItem("Usuarios") === undefined ){
            
            let formulario=[]
            formulario.push(newuser)
            localStorage.setItem('Usuarios',JSON.stringify(formulario))
            alert('LocalStorage update new user correctly')
        }else{
            let formulario=JSON.parse(localStorage.getItem('Usuarios'))
            formulario.push(newuser)
            localStorage.setItem('Usuarios',JSON.stringify(formulario))
            alert('LocalStorage update new user correctly')
        }
        limpiarInputs()
        obtenerUsuarios()
    }else{
        alert('empty form')
        limpiarInputs()
    }
})
