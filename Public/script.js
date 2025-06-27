// --------------------- GENERACIÓN DE PRODUCTOS ---------------------
const productos = [
  {
    id: 1,
    nombre: 'Zapatillas Urban Street',
    descripcion: 'Diseñadas para impactar en cada movimiento.',
    categoria: 'Hombre',
    imagen: 'imagen/producto1.jpg',
    precio: 242091,
    tallas: ['43', '41', '40', '44']
  },
  {
    id: 2,
    nombre: 'Zapatillas RetroWave',
    descripcion: 'Inspiradas en la cultura sneaker digital.',
    categoria: 'Hombre',
    imagen: 'imagen/producto2.jpg',
    precio: 104457,
    tallas: ['43', '39', '42', '40']
  },
  {
    id: 3,
    nombre: 'Zapatillas FuturoX',
    descripcion: 'Estilo urbano con detalles tecnológicos.',
    categoria: 'Hombre',
    imagen: 'imagen/producto3.jpg',
    precio: 114035,
    tallas: ['40', '39', '41', '38']
  },
  {
    id: 4,
    nombre: 'Zapatillas CyberRun',
    descripcion: 'Zapatillas de diseño moderno y materiales premium.',
    categoria: 'Hombre',
    imagen: 'imagen/producto4.jpg',
    precio: 177827,
    tallas: ['41', '39', '38', '42']
  },
  {
    id: 5,
    nombre: 'Zapatillas ShadowCore',
    descripcion: 'Inspiradas en la cultura sneaker digital.',
    categoria: 'Hombre',
    imagen: 'imagen/producto5.jpg',
    precio: 224426,
    tallas: ['40', '38', '42', '43']
  },
  {
    id: 6,
    nombre: 'Zapatillas PixelBoost',
    descripcion: 'Diseñadas para impactar en cada movimiento.',
    categoria: 'Hombre',
    imagen: 'imagen/producto6.jpg',
    precio: 151772,
    tallas: ['38', '44', '42', '39']
  },
  {
    id: 7,
    nombre: 'Zapatillas NeonDrive',
    descripcion: 'Diseñadas para impactar en cada movimiento.',
    categoria: 'Hombre',
    imagen: 'imagen/producto7.jpg',
    precio: 216638,
    tallas: ['40', '44', '41', '38']
  },
  {
    id: 8,
    nombre: 'Zapatillas AirShock',
    descripcion: 'Estilo urbano con detalles tecnológicos.',
    categoria: 'Hombre',
    imagen: 'imagen/producto8.jpg',
    precio: 142888,
    tallas: ['40', '38', '39', '42']
  },
  {
    id: 9,
    nombre: 'Zapatillas DataStep',
    descripcion: 'Zapatillas de diseño moderno y materiales premium.',
    categoria: 'Hombre',
    imagen: 'imagen/producto9.jpg',
    precio: 103662,
    tallas: ['44', '41', '42', '43']
  },
  {
    id: 10,
    nombre: 'Zapatillas CloudRunner',
    descripcion: 'Inspiradas en la cultura sneaker digital.',
    categoria: 'Hombre',
    imagen: 'imagen/producto10.jpg',
    precio: 139379,
    tallas: ['43', '42', '41', '40']
  },
  {
    id: 11,
    nombre: 'Zapatillas PrimeCode',
    descripcion: 'Comodidad y estilo para cada paso.',
    categoria: 'Hombre',
    imagen: 'imagen/producto11.jpg',
    precio: 156217,
    tallas: ['44', '42', '43', '39']
  },
  {
    id: 12,
    nombre: 'Zapatillas ByteGrip',
    descripcion: 'Inspiradas en la cultura sneaker digital.',
    categoria: 'Hombre',
    imagen: 'imagen/producto12.jpg',
    precio: 142489,
    tallas: ['41', '44', '39', '43']
  },
  {
    id: 13,
    nombre: 'Zapatillas ThunderHack',
    descripcion: 'Estilo urbano con detalles tecnológicos.',
    categoria: 'Hombre',
    imagen: 'imagen/producto13.jpg',
    precio: 110491,
    tallas: ['42', '38', '39', '40']
  },
  {
    id: 14,
    nombre: 'Zapatillas CircuitStyle',
    descripcion: 'Estilo urbano con detalles tecnológicos.',
    categoria: 'Hombre',
    imagen: 'imagen/producto14.jpg',
    precio: 103722,
    tallas: ['41', '39', '44', '42']
  },
  {
    id: 15,
    nombre: 'Zapatillas QuantumJump',
    descripcion: 'Estilo urbano con detalles tecnológicos.',
    categoria: 'Hombre',
    imagen: 'imagen/producto15.jpg',
    precio: 112374,
    tallas: ['41', '40', '38', '42']
  },
  {
    id: 16,
    nombre: 'Zapatillas ReactoPro',
    descripcion: 'Inspiradas en la cultura sneaker digital.',
    categoria: 'Hombre',
    imagen: 'imagen/producto16.jpg',
    precio: 177422,
    tallas: ['43', '44', '41', '39']
  },
  {
    id: 17,
    nombre: 'Zapatillas InfinityFlex',
    descripcion: 'Zapatillas de diseño moderno y materiales premium.',
    categoria: 'Hombre',
    imagen: 'imagen/producto17.jpg',
    precio: 100444,
    tallas: ['38', '44', '40', '43']
  },
  {
    id: 18,
    nombre: 'Zapatillas HardCode',
    descripcion: 'Zapatillas de diseño moderno y materiales premium.',
    categoria: 'Hombre',
    imagen: 'imagen/producto18.jpg',
    precio: 148228,
    tallas: ['38', '42', '40', '44']
  },
  {
    id: 19,
    nombre: 'Zapatillas OmegaTech',
    descripcion: 'Comodidad y estilo para cada paso.',
    categoria: 'Hombre',
    imagen: 'imagen/producto19.jpg',
    precio: 200239,
    tallas: ['41', '43', '44', '42']
  },
  {
    id: 20,
    nombre: 'Zapatillas VoltStream',
    descripcion: 'Zapatillas de diseño moderno y materiales premium.',
    categoria: 'Hombre',
    imagen: 'imagen/producto20.jpg',
    precio: 226282,
    tallas: ['40', '43', '39', '42']
  }
];


const productosPorPagina = 10;
let paginaActual = 1;
let filtro = '';
let busqueda = '';
const carrito = [];

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


function filtrarProductos() {
  return productos.filter(p => {
    const coincideCategoria = !filtro || p.categoria === filtro;
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });
}

// --------------------- MOSTRAR PRODUCTOS ---------------------
function mostrarProductos() {
  contenedorProductos.innerHTML = '';
  const filtrados = filtrarProductos();
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = filtrados.slice(inicio, fin);

  if (productosPagina.length === 0) {
    contenedorProductos.innerHTML = '<p class="text-center">No se encontraron productos.</p>';
    return;
  }

  productosPagina.forEach(producto => {
    const card = document.createElement('div');
    card.style.opacity = 0;
card.style.transform = 'translateY(30px)';
setTimeout(() => {
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  card.style.opacity = 1;
  card.style.transform = 'translateY(0)';
}, 100);

    card.className = 'col-md-4';
    card.innerHTML = `
      <article class="card h-100 shadow">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <span class="badge bg-secondary">${producto.categoria}</span>
          <p class="mt-2"><strong>${parseInt(producto.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</strong></p>
          <button class="btn btn-outline-primary mt-2" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
      </article>
    `;
    contenedorProductos.appendChild(card);
  });
}

// --------------------- PAGINACIÓN ---------------------
function mostrarPaginacion() {
  paginacion.innerHTML = '';
  const totalPaginas = Math.ceil(filtrarProductos().length / productosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const li = document.createElement('li');
    li.className = `page-item ${i === paginaActual ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault();
      paginaActual = i;
      mostrarProductos();
      mostrarPaginacion();
    });
    paginacion.appendChild(li);
  }
}

// --------------------- CARRITO ---------------------
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();

  const toast = new bootstrap.Toast(document.getElementById('toastAgregado'), {
    delay: 2000
  });
  toast.show();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  
}

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.length;
  contadorCarrito.classList.add('animate__animated', 'animate__rubberBand');
setTimeout(() => {
  contadorCarrito.classList.remove('animate__animated', 'animate__rubberBand');
}, 800);

  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((p, index) => {
    total += parseFloat(p.precio);
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `
  <div class="d-flex justify-content-between align-items-center py-2 px-1">
    <div class="d-flex flex-column">
      <span class="fw-semibold text-dark">${p.nombre}</span>
      <small class="text-muted">$${p.precio}</small>
    </div>
    <div class="ms-3">
      <button class="btn btn-sm btn-outline-danger rounded-pill px-3" onclick="eliminarDelCarrito(${index})">
        <i class="bi bi-trash-fill me-1"></i> Eliminar
      </button>
    </div>
  </div>
`;


    listaCarrito.appendChild(item);
  });

  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

// --------------------- FILTRO Y BUSQUEDA ---------------------
filtroCategoria.addEventListener('change', e => {
  filtro = e.target.value;
  paginaActual = 1;
  mostrarProductos();
  mostrarPaginacion();
});

campoBusqueda.addEventListener('input', e => {
  busqueda = e.target.value;
  paginaActual = 1;
  mostrarProductos();
  mostrarPaginacion();
});

// --------------------- LOGIN PROFESIONAL ---------------------
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

    if (mensajeBienvenida) {
      mensajeBienvenida.textContent = `Hola ${email}, gracias por iniciar sesión.`;
    }

    const modal = new bootstrap.Modal(document.getElementById('modalBienvenida'));
    modal.show();

    if (userDisplay) userDisplay.innerHTML = `👤 ${email}`;
    if (cerrarSesionBtn) cerrarSesionBtn.classList.remove('d-none');

    formLogin.reset();
  });
}

// --------------------- SESIÓN ACTIVA ---------------------
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

// --------------------- MODAL Y SCROLL ---------------------
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

function cerrarModalYIrACatalogo() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalBienvenida'));
  modal.hide();
  setTimeout(() => {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

// --------------------- INICIALIZACIÓN ---------------------
mostrarProductos();
mostrarPaginacion();



function obtenerTallasAleatorias() {
  const cantidad = Math.floor(Math.random() * 4) + 4; // entre 4 y 7 tallas
  const copia = [...tallasDisponibles];
  const resultado = [];

  for (let i = 0; i < cantidad; i++) {
    const indice = Math.floor(Math.random() * copia.length);
    resultado.push(copia.splice(indice, 1)[0]);
  }

  return resultado.sort((a, b) => parseFloat(a) - parseFloat(b));
}
