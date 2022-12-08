/* Mau */
let data = [];

function deleteRow(r) {

  let i = r.parentNode.parentNode.rowIndex;
  data.splice(i - 1, 1);
  document.getElementById("tbProductos").deleteRow(i);

}

function imprimirProductos() {
  crearObjetoHTMLProductos();
}

function crearObjetoHTMLProductos() {
  let productos = {};
  const tbProductos = document.getElementById('tbProductos');
  const producto = document.getElementById('nombre');
  const precio = document.getElementById('precio');
  const descripcion = document.getElementById('descripcion');
  const sel = document.getElementById('categoria');
  const categoria = sel.options[sel.selectedIndex].text;
  const cantidad = document.getElementById('cantidad');

/* Ali */
productos = {
  Producto: producto.value,
  Precio: precio.value,
  Descripcion: descripcion.value,
  Categoria: categoria,
  Cantidad: cantidad.value
}
let dataFilter = data.filter(x => x.Producto == productos.Producto);

if (dataFilter.length == 0) {
  data.push(productos);

/* Fabian */
let row = tbProductos.insertRow(-1);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);
cell1.innerHTML = productos.Producto;
cell2.innerHTML = productos.Precio;
cell3.innerHTML = productos.Descripcion;
cell4.innerHTML = productos.Categoria;
cell5.innerHTML = productos.Cantidad;
cell6.innerHTML = '<button onclick="deleteRow(this)" id="btt' + productos.Producto + '">Eliminar</button>';

producto.value = "";
precio.value = "";
descripcion.value = "";
categoria.value = "";
cantidad.value = "";
  } else {
  alert('El producto "' + productos.Producto + '" ya se encuentra agregado.');
}

}

Window.onload = function () {
  imprimirProductos();
}
