let button = document.getElementById("button");
let texto = document.getElementById("texto");
let container = document.getElementById("container");
let complete = document.getElementById("complete")
complete.style.display = "none";
let listIncomplete = document.getElementById("listIncomplete");
let listComplete = document.getElementById("listComplete");


button.addEventListener("click", function(e) {
    // console.log(texto.value);

    let div = document.createElement("div");
    div.innerHTML = `
    <hr />
    <div class="tarea">
      <div class="cont-tarea">
        <i class="check far fa-check-circle"></i>
        <p>${texto.value}</p>
      </div>
      <i class="delete fas fa-trash-alt"></i>
    </div>
    
    `;
    container.appendChild(div);
    texto.value = "";

    //eliminar las tareas que se escriben

    div.querySelector(".delete").addEventListener("click" , function() {
      confirm("Estas seguro que quieres eliminar la tarea?") ? div.remove() : "";
    })

    div.querySelector(".check").addEventListener("click" , function() {
      complete.appendChild(div);

    })
})

// Evento click Complete

listComplete.addEventListener("click", function() {
  container.style.display = "none";
  complete.style.display = "block";

})

// Evento click Inomplete

listIncomplete.addEventListener("click", function() {
  container.style.display = "block";
  complete.style.display = "none";

})