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
}
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
  }
