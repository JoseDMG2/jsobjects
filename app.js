let usuarios = [
    {nombre: "Josefina", edad:22},
    {nombre: 'Luis', edad:30},
    {nombre: 'Romina', edad:18}
];

function mostrarUsuario(){
    let lista = document.getElementById('userList');
    lista.innerHTML= '';

    usuarios.forEach(usuario => {
        let item = document.createElement('li');
        item.textContent= `${usuario.nombre} - ${usuario.edad} años`;
        lista.appendChild(item);
    })
}

function agregarUsuario(event){
    event.preventDefault();

    let nombreInput = document.getElementById('nombre');
    let edadInput = document.getElementById('edad');

    let nuevoUsuario = {
        nombre: nombreInput.value,
        edad: parseInt(edadInput.value)
    };

    usuarios.push(nuevoUsuario);
    mostrarUsuario();

    nombreInput.value = '';
    edadInput.value = '';
}

mostrarUsuario();

document.getElementById('userForm').addEventListener('submit', agregarUsuario);