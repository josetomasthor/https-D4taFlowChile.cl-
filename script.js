// --------------------- VARIABLES Y CONFIG ---------------------
const productosPorPagina = 10;
let paginaActual = 1;
let filtro = '';
let busqueda = '';
let carrito = [];

const productos = [
  { id: 1, nombre: 'Nike Air More Uptempo "Triple White', descripcion: 'Zapatilla Nike Air', categoria: 'Hombre', imagen: 'public/img/producto1.jpg', precio: 159.999 },
  { id: 2, nombre: 'Nike Air More Uptempo "Volt"', descripcion: 'Zapatilla Nike Air', categoria: 'Mujer', imagen: 'public/img/producto2.jpg', precio: 154.990 },
  { id: 3, nombre: 'Nike SB Dunk Low "Jarritos"', descripcion: 'Zapatilla Nike Sb Dunk', categoria: 'Niños', imagen: 'public/img/producto3.jpg', precio: 149990 },
  { id: 4, nombre: 'Air Jordan 1 Retro High OG "Chicago"', descripcion: 'Comodidad con cámara de aire', categoria: 'Hombre', imagen: 'public/img/producto4.jpg', precio: 274.990 },
  { id: 5, nombre: 'Air Jordan 1 Retro High OG x Travis Scott "Mocha"', descripcion: 'Leyenda urbana', categoria: 'Mujer', imagen: 'public/img/producto5.jpg', precio: 159.990 },
  { id: 6, nombre: 'Nike Air Max 97 "Triple White"', descripcion: 'Blancas y versátiles', categoria: 'Niños', imagen: 'public/img/producto6.jpg', precio: 139.990 },
  { id: 7, nombre: 'Nike Air Max 97 SE "Shanghai Kaleidoscope" (On Air Collection)', descripcion: 'Cuero suave con estilo retro', categoria: 'Hombre', imagen: 'public/img/producto7.jpg', precio: 251.990 },
  { id: 8, nombre: 'Air Jordan 4 Retro "White Oreo" (también conocida como "Tech White")', descripcion: 'Skate y estilo urbano', categoria: 'Mujer', imagen: 'public/img/producto8.jpg', precio: 144.990 },
  { id: 9, nombre: 'Nike Blazer Mid', descripcion: 'Diseño vintage renovado', categoria: 'Niños', imagen: 'public/img/producto9.jpg', precio: 246.990 },
  { id: 10, nombre: 'Air Jordan 3 Retro "Fire Red""', descripcion: 'Balance entre deporte y moda', categoria: 'Hombre', imagen: 'public/img/producto10.jpg', precio: 257.990 },
  { id: 11, nombre: 'Adidas Forum Low "Off White / Grey"', descripcion: 'Estilo retro reimaginado', categoria: 'Mujer', imagen: 'public/img/producto11.jpg', precio: 153.990 },
  { id: 12, nombre: 'Nike Air Max 97 "Summit White/Pure Platinum"', descripcion: 'Diseño chunky y colorido', categoria: 'Niños', imagen: 'public/img/producto12.jpg', precio: 149.990 },
  { id: 13, nombre: ' Nike Air Max Plus "Black/University Gold"', descripcion: 'Inspiración en el básquet', categoria: 'Hombre', imagen: 'public/img/producto13.jpg', precio: 164.990 },
  { id: 14, nombre: 'Nike Air Max Plus "Triple Black"', descripcion: 'Tecnología Boost al máximo', categoria: 'Mujer', imagen: 'public/img/producto14.jpg', precio: 269.990 },
  { id: 15, nombre: 'Nike Air Flight Huarache OG "White/Black-University Red"', descripcion: 'Diseño robusto y actual', categoria: 'Niños', imagen: 'public/img/producto15.jpg', precio: 241.990 },
  { id: 16, nombre: 'Nike Court Borough Mid 2 "Black/Blue" (versión infantil o casual)', descripcion: 'Herencia deportiva legendaria', categoria: 'Hombre', imagen: 'public/img/producto16.jpg', precio: 184.990 },
  { id: 17, nombre: 'Nike Air DT Max '96 (Deion Sanders)', descripcion: 'Diseño retro y funcional', categoria: 'Mujer', imagen: 'public/img/producto17.jpg', precio: 255.990 },
  { id: 18, nombre: 'Puma RS-X3 "Puzzle" (White/Black/Multicolor)', descripcion: 'Máximo ajuste y confort', categoria: 'Niños', imagen: 'public/img/producto18.jpg', precio: 153.990 },
  { id: 19, nombre: 'Nike Dunk High "Racer Blue/Sail-Gum"', descripcion: 'Diseño futurista para moverte', categoria: 'Hombre', imagen: 'public/img/producto19.jpg', precio: 162.990 },
  { id: 20, nombre: 'Nike Blazer Low Platform "White/Purple Pulse"', descripcion: 'Minimalismo clásico', categoria: 'Mujer', imagen: 'public/img/producto20.jpg', precio: 148.990 }
];



// --------------------- ELEMENTOS DOM ---------------------
const contenedorProductos = document.getElementById('contenedor-productos');
const paginacion = document.getElementById('paginacion');
const filtroCategoria = document.getElementById('filtro-categoria');
const campoBusqueda = document.getElementById('buscador');
const contadorCarrito = document.getElementById('contador-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');
const userDisplay = document.getElementById('userDisplay');
const cerrarSesionBtn = document.getElementById('cerrarSesion');
const mensajeBienvenida = document.getElementById('mensajeBienvenida');
const btnIrCatalogo = document.getElementById('btnIrCatalogo');

// --------------------- FUNCIONES ---------------------
function filtrarProductos() {
  return productos.filter(p => {
    const coincideCategoria = !filtro || p.categoria === filtro;
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });
}

function mostrarProductos() {
  const filtrados = filtrarProductos();
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = filtrados.slice(inicio, fin);

  contenedorProductos.innerHTML = '';

  if (productosPagina.length === 0) {
    contenedorProductos.innerHTML = '<p class="text-center">No se encontraron productos.</p>';
    return;
  }

  productosPagina.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'col-md-3 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <span class="badge bg-secondary mb-2">${producto.categoria}</span>
          <p class="fw-bold">$${producto.precio}</p>
          <button class="btn btn-outline-primary mt-auto" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(card);
  });

  mostrarPaginacion(filtrados.length);
}

function mostrarPaginacion(totalProductos) {
  paginacion.innerHTML = '';
  const totalPaginas = Math.ceil(totalProductos / productosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === paginaActual ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      paginaActual = i;
      mostrarProductos();
    });
    paginacion.appendChild(li);
  }
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) carrito.push(producto);
  actualizarCarrito();

  const toast = document.getElementById("toastAgregado");
  if (toast) {
    toast.classList.add("show", "animate__animated", "animate__fadeInUp");
    setTimeout(() => {
      toast.classList.remove("show", "animate__animated", "animate__fadeInUp");
    }, 2000);
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.length;
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((p, index) => {
    total += parseFloat(p.precio);
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `
      <div>${p.nombre} <span class="text-muted">($${p.precio})</span></div>
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(item);
  });

  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

// --------------------- EVENTOS ---------------------
filtroCategoria.addEventListener('change', e => {
  filtro = e.target.value;
  paginaActual = 1;
  mostrarProductos();
});

campoBusqueda.addEventListener('input', e => {
  busqueda = e.target.value;
  paginaActual = 1;
  mostrarProductos();
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});

// --------------------- LOGIN ---------------------
const formLogin = document.getElementById('formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    localStorage.setItem('usuario', email);
    if (mensajeBienvenida) mensajeBienvenida.textContent = `Hola ${email}, gracias por iniciar sesión.`;
    if (userDisplay) userDisplay.innerHTML = `👤 ${email}`;
    if (cerrarSesionBtn) cerrarSesionBtn.classList.remove('d-none');

    const modal = new bootstrap.Modal(document.getElementById('modalBienvenida'));
    modal.show();
    formLogin.reset();
  });
}

if (localStorage.getItem('usuario') && userDisplay) {
  userDisplay.innerHTML = `👤 ${localStorage.getItem('usuario')}`;
  if (cerrarSesionBtn) cerrarSesionBtn.classList.remove('d-none');
}

if (cerrarSesionBtn) {
  cerrarSesionBtn.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    location.reload();
  });
}

// --------------------- BOTÓN IR AL CATÁLOGO ---------------------
if (btnIrCatalogo) {
  btnIrCatalogo.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalBienvenida'));
    modal.hide();
    setTimeout(() => {
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });
}

