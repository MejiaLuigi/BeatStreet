//El asincronismo es basicamente la capacidad que tiene nuestra función de realizar algo de manera indepentiente sin afectar el flujo normal del resto del codigo
export async function obtenerTokenSpotify(){
    //Primero se pone la url, dirección de a donde va la petición
    const url ="https://accounts.spotify.com/api/token"

    //En esta parte lo que hacemos es configurar lo que se va a realizar
    const grant_type ="client_credentials"
    const client_id ="c928b24e2d1a42eb9dadeb3f93482f8f"
    const client_secret ="d25b5d95b6de456f835bb8d42a7a0914"

    //Aquí estamos cocatenando los atributos con las variables definidas arriba
    const datos =`grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`

    //Aquí creamos y organizamos la petición
    const peticion = {
        method:"POST",
        headers:{"Content-Type": "application/x-www-form-urlencoded"},
        body:datos
    }

    //El try intenta ejecutar un bloque de codigo, nos permite manejar una excepción (errores)
    try{
        //Aquí ya consumimos el API, estamos indicando a donde vamos y a que vamos

                        //este await pausa la ejecución de nuestro bloque de codigo
        let respuesta = await fetch (url, peticion)
        let tokenRespuesta = await respuesta.json()
        // console.log(JSON)
        return `${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

    }catch(error){
        console.log(error)

    }
}
