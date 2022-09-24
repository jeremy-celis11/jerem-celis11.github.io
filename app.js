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

/*Funcion que me limpia los imputs 
*/
function limpiarInputs(){
    ids.value=''
    nombre.value=''
    apellidos.value=''
    nacimiento.value=''
    email.value=''
    
    idsModal.value=''
    nombreModal.value=''
    apellidosModal.value=''
    fechaModal.value=''
    emailModal.value=''
}
/*Funcion que recibe como parametro el id de usuario a modificar para luego tanto modificarlo en 
el localStorage como en el div 
*/
function actulizarUsuarios(id){
    let formulario=JSON.parse(localStorage.getItem('Usuarios'))
    for (let i = 0; i < formulario.length; i++){
        close.addEventListener('click', () => {
            if(idsModal.value.length!=0 &&nombreModal.value.length!=0 && apellidosModal.value.length!=0 && fechaModal.value.length!=0 && emailModal.value.length!=0 ){
                modal_container.classList.remove('show')
                if(formulario[i].id===id){
                    formulario[i].id=idsModal.value
                    formulario[i].nombre=nombreModal.value
                    formulario[i].apellido=apellidosModal.value
                    formulario[i].nacimiento=nacimientoModal.value
                    formulario[i].email=emailModal.value
                    localStorage.setItem('Usuarios',JSON.stringify(formulario))
                    alert(`Se actulizo correctamente el usuario con id ${id}`)
                    obtenerUsuarios()
                }
            }else{
                alert('Formulario vacio')
                limpiarInputs()
            }
        });
    }
    
}
/*Este la funcion me permitira obtener los usuarios del localStorage
con la que creare un div con la informacion de cada usuario 
*/
function obtenerUsuarios(){
    if(localStorage.getItem("Usuarios") === null){
        alert('localStorage vacio!!')

    }else{
        let formulario=JSON.parse(localStorage.getItem('Usuarios'))
        crudBox.innerHTML=''
        for (let i = 0; i < formulario.length; i++){
            let id =  formulario[i].id;
            let nombre =  formulario[i].nombre;
            let apellido =  formulario[i].apellido;
            let nacimiento =  formulario[i].nacimiento
            let Correo= formulario[i].email

            let caja=document.createElement('div')
            let pid=document.createElement('h4')
            let pNombre=document.createElement('p')
            let pApellidos=document.createElement('p')
            let pNacimiento=document.createElement('p')
            let pCorreo=document.createElement('p')
            let deletebtn=document.createElement('button')
            let update=document.createElement('button')
            deletebtn.setAttribute('class','Crud')
            update.setAttribute('id','open')
            caja.setAttribute('class','boxInfo')

            pid.innerHTML=id
            pNombre.innerHTML=nombre
            pApellidos.innerHTML=apellido
            pNacimiento.innerHTML=nacimiento
            pCorreo.innerHTML=Correo
            deletebtn.innerHTML='Borrar'
            update.innerHTML='Actulizar'

            crudBox.appendChild(caja)
            caja.appendChild(pid)
            caja.appendChild(pNombre)
            caja.appendChild(pApellidos)
            caja.appendChild(pNacimiento)
            caja.appendChild(pCorreo)
            caja.appendChild(deletebtn)
            caja.appendChild(update)

            deletebtn.addEventListener('click',e=>{
                if(formulario[i].id===id){
                 alert(`Eliminando el usuario con id ${id}`)
                    formulario.splice(i,1)
                    caja.remove()
                    localStorage.setItem('Usuarios',JSON.stringify(formulario))
                }
                if(localStorage.getItem("Usuarios")==='[]'){
                    alert('localStorage clear')
                    localStorage.clear()
                }
            })
            update.addEventListener('click', () => {
                modal_container.classList.add('show');
            });
            actulizarUsuarios(id)

        }
    }
}
obtenerUsuarios()
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
            alert('El localStorage almaceno el usuario correctamente')
        }else{
            let formulario=JSON.parse(localStorage.getItem('Usuarios'))
            formulario.push(newuser)
            localStorage.setItem('Usuarios',JSON.stringify(formulario))
            alert('El localStorage almaceno el usuario correctamente')
        }
        limpiarInputs()
        obtenerUsuarios()
    }else{
        alert('Formulario vacio')
        limpiarInputs()
    }
})
