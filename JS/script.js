/*----------------Consumo API---------------------*/

const { createApp } = Vue


createApp({
    data() {
        return {
            url: "https://apisimpsons.fly.dev/api/personajes?limit=20&page=2",
            error: false,
            datos: {}
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.datos = data.docs;
                });
                }

    },

        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')

/*----------------Validación de formulario---------------------*/

function validar(){
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let error = false;

    document.getElementById("validar-nombre").innerHTML = "&nbsp;";
    document.getElementById("validar-email").innerHTML = "&nbsp;";
   
    if (nombre.value == ""){
        document.getElementById("validar-nombre").innerHTML = "Debe completar su nombre";
        error = true;
        nombre.focus();
    }

    if (email.value == ""){
        document.getElementById("validar-email").innerHTML = "Debe completar su email";
        error = true;
        email.focus();
    }

    if(document.getElementById("exampleCheck1").checked == false){
        document.getElementById("validar-condiciones").innerHTML = "Debe aceptar los terminos y condiciones";
        error = true;
    }


    if (error == false){
        document.getElementById("nombre").value = ""
        document.getElementById("validar-nombre").innerHTML = "&nbsp;";
        document.getElementById("email").value = ""
        document.getElementById("validar-email").innerHTML = "&nbsp;";
        
        alert("Datos enviados")
    }
   return !error

}
