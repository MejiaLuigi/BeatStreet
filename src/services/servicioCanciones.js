

export async function pedirCancionesTop(token, artistId){
    const URL_TOPTRACKS_SERVICE=`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`
    
    const PETICON_CANCIONES={
        method:"GET",
        headers:{"Authorization": token}
    }
    
    let respuestaServicio =await fetch(URL_TOPTRACKS_SERVICE, PETICON_CANCIONES)
    let canciones = await respuestaServicio.json()
    console.log(respuestaServicio)
    return canciones  
    }
     