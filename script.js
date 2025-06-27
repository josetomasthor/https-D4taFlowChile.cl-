// --------------------- VARIABLES Y CONFIG ---------------------
const productosPorPagina = 10;
let paginaActual = 1;
let filtro = '';
let busqueda = '';
let carrito = [];

const productos = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  nombre: `Producto ${i + 1}`,
  descripcion: 'Descripción breve del producto.',
  categoria: ['Hombre', 'Mujer', 'Niños'][i % 3],
  imagen: `public/img/producto${i + 1}.jpg`, // <-- aquí cambia la ruta
  precio: (Math.random() * 50 + 10).toFixed(2)
}));


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
