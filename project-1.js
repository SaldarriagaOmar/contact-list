// Contact-list

// 1. Crear una lista de contactos con datos predefinidos
let contactList = ["Juancho Pérez", "María Dolores", "Luisa Martínez"];

// 2. Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  contactList.push(contacto);
}

// 3. Función para borrar un contacto existente de la lista
function borrarContacto(contacto) {
  const index = contactList.indexOf(contacto);
  if (index !== -1) {
    contactList.splice(index, 1);
  }
}

// 4. Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let i = 0; i < contactList.length; i++) {
    console.log(contactList[i]);
  }
}

// Ejemplo de uso
console.log("---------- Mostrar contactos ----------");
imprimirContactos();

console.log("---------- Nuevo contacto añadido 'Pedro García' ----------");

agregarContacto("Pedro García");

imprimirContactos();

console.log("---------- Contacto borrado 'María Dolores' ----------");

borrarContacto("María Dolores");
imprimirContactos();