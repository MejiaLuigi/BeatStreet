export async function pedirArtista(token, query) {
    let URL_ARTISTAS_SERVICE= `https://api.spotify.com/v1/search?q=${query}&type=artist`
    // let URL_ARTISTAS_SERVICE=  `https://api.spotify.com/v1/artists/${query}`
    const PETICON_ARTISTAS={
        method:"GET",
        headers:{"Authorization": token}
    }

    let respuestaServicio =await fetch(URL_ARTISTAS_SERVICE, PETICON_ARTISTAS)
    return await respuestaServicio.json();
}
