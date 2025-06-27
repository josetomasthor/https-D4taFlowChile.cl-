console.log("�Hola desde mi primer proyecto Node.js!") 
const totalProductos = 20; // Total de productos disponibles
const productosPorPagina = 10;
let paginaActual = 1;

function mostrarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * productosPorPagina + 1;
  const fin = Math.min(inicio + productosPorPagina - 1, totalProductos);

  for (let i = inicio; i <= fin; i++) {
    contenedor.innerHTML += `
      <div class="col-md-3 mb-4" id="producto${i}">
        <div class="card">
          <img src="public/img/producto${i}.jpg" class="card-img-top" alt="Producto ${i}">
          <div class="card-body">
            <h5 class="card-title">Producto ${i}</h5>
            <p class="card-text">Descripción breve del producto ${i}.</p>
          </div>
        </div>
      </div>
    `;
  }

  generarPaginacion();
}



