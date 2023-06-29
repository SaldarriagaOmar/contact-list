// 1. Crear una lista de contactos con datos predefinidos como objetos
// contactList = [{id, nombres, apellidos, telefono, ubicacion}]

/*
Primero definir las variables de cada clave 

*/

let contactList = [
    {
        id: 1,
        nombres: "Juan",
        apellidos: "Pérez",
        telefono: "300xxxxxxx",
        ubicacion: 
            {
                ciudad: "Bogotá",
                direccion: "Calle 1 cra 2"
            }
        
    },

    {
        id: 2,
        nombres: "María",
        apellidos: "Dolores",
        telefono: "301xxxxxxx",
        ubicacion: 
            {
                ciudad: "Medellín",
                direccion: "Cra 3 calle 4"
            }
        
        },
        
        {
            id: 3,
            nombres: "Luisa",
            apellidos: "Martínez",
            telefono: "302xxxxxxx",
            ubicacion: 
            {
                ciudad: "Bucaramanga",
                direccion: "av 8 calle 2"
            },
            
        }
    ];
    
    function agregarContacto(id, nombres, apellidos, telefono, ubicacion) {
        contactList.push({id, nombres, apellidos, telefono, ubicacion});
  }
    console.log("---------- Lista de contactos ----------")
  
console.log(contactList);

    console.log("---------- Agregar nuevo contacto ----------")

agregarContacto(5, "Pablo", "Montiel", "3456789", {ciudad: "Bello", direccion: "segunda loma a la derecha"})

console.log(contactList)

    console.log("---------- Borrar un contacto ----------")

function deleteContact(id) {
    const contacto = contactList.find((contact) => contact.id === id)
    contactList.splice(contactList.indexOf(contacto), 1)
  }
  
  deleteContact(3)
  
  console.log(contactList)