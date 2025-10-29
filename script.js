// Lista de productos
const productos = 
    [
        { nombre: "Televisor Samsung 50''", precio: "$8,999", imagen: "img/tv.avif" },
        { nombre: "LG Smart TV 55''", precio: "$10,499", imagen: "img/lg.jpeg" },
        { nombre: "Sony Bravia 65''", precio: "$13,299", imagen: "img/sn.jpeg" },
        { nombre: "Hisense 43'' UHD", precio: "$6,999", imagen: "img/ss.jpeg" },
        { nombre: "TCL Roku TV 32''", precio: "$4,999", imagen: "img/rk.jpeg" }
    
      
  ];
  
  // Contenedor principal
  const catalogo = document.getElementById("catalogo");
  
  // Crear dinámicamente las tarjetas
  productos.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p class="precio">${producto.precio}</p>
      <button class="boton">Comprar</button>
    `;
    catalogo.appendChild(tarjeta);
  });
  