var table = document.getElementById('table-task');
const btnAdd = document.getElementById('btn-add');

function addRowToTable () {
  // Crea el contenedor de la tarea
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Crea el elemento <p> para el nombre de la tarea
  const taskElementValue = document.getElementById('task-value');
  const taskNameElement = document.createElement('p');
  taskNameElement.classList.add('value-task-style');
  taskNameElement.textContent = taskElementValue.value;

  // Crea el checkbox
  const checkbox = document.createElement('input');
  checkbox.classList.add('item-center');
  checkbox.type = 'checkbox';

  // Crea el elemento <p> para la fecha (vacía inicialmente)
  const taskDateElement = document.createElement('p');
  taskDateElement.classList.add('item-center');
  taskDateElement.textContent = '-'; // Fecha vacía

  // Evento para actualizar la fecha al marcar el checkbox
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      const currentTime = new Date().toLocaleTimeString(); // Obtiene la hora actual
      taskDateElement.textContent = currentTime; // Actualiza la fecha
    } else {
      taskDateElement.textContent = '-'; // Limpia la fecha si se desmarca
    }
  });

  // Agrega los elementos al contenedor de la tarea
  taskDiv.appendChild(taskNameElement);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskDateElement);

  table.appendChild(taskDiv); // Agrega el contenedor de la tarea a la tabla
}

btnAdd.addEventListener('click', addRowToTable);