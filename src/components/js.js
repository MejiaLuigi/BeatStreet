// IDs de los artistas
// const metallicaArtistID = '2ye2Wgw4gimLv2eAKyk1NB';
// const ledZeppelinArtistID = '7K3zpFXBvPcvzhj7zlGJdO'; 

// useEffect(() => {
//   const fetchTokenAndTracks = async () => {
//     await generateToken(setAccessToken, setTokenType);
//   };
//   fetchTokenAndTracks();
// }, []);


// useEffect(() => {
//   if (accessToken && tokenType) {
//     // Suponiendo que queremos las 10 primeras canciones de cada artista
//     getTopTracksOfArtists([metallicaArtistID, ledZeppelinArtistID], tokenType, accessToken, setAllTracks, 10);
//   }
// }, [accessToken, tokenType]);


// ${artistID}
// top-tracks?market=us
// .slice(0, numberOfTracks)

{/* <div className="row row-cols-1 row-cols-md-5"> */}




// useEffect(()=> {
//     obtenerTokenSpotify()
//     .then((respuestaToken)=>{
//         pedirCancionesTop(respuestaToken)
//         .then((respuestaCanciones)=>{
//             console.log(respuestaCanciones)
//             setCarga(false)
//             setCanciones(respuestaCanciones.tracks)

//         })
//     })
// }, [])

// //artistas
// useEffect(()=> {
//     obtenerTokenSpotify()
//     .then((respuestaToken)=>{
//         pedirArtista(respuestaToken)
//         .then((respuestaArtista)=>{
//             console.log(respuestaArtista)
//             // setCarga(false)
//             // setCanciones(respuestaArtista)

//         })
//     })
// }, [])

// return carga === true ? (<><h1>cargando...</h1></>) : 
// (<>
//     <h1>pailas</h1> 
//     <section className='container'>
//         <div className="row row-cols-1 row-cols-md-5">
//             {
//                 canciones.map((cancion)=>{
//                     return(
//                         <div class="card my-3 mx-3">
//                             <div class="card-body h-100 shadow ">
//                                 <h5 class="card-title">{cancion.name}</h5>
//                                 {/* <img src={cancion.images} /> */}
//                                 <audio src={cancion.preview_url} controls className='w-100'></audio>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </section></>)


// }


<div className="row row-cols-1 row-cols-md-5">
                {
                    canciones.map((cancion)=>{
                        return(
                            <div className="card my-3 mx-3">
                                <div className="card-body h-100 shadow ">
                                    <h5 className="card-title">{cancion.name}</h5>
                                    {/* <img src={cancion.images} /> */}
                                    <audio src={cancion.preview_url} controls className='w-100'></audio>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
