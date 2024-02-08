import {obtenerTokenSpotify} from '../services/servicioSpotify'
import {pedirCancionesTop} from '../services/servicioCanciones'
import { pedirArtista } from '../services/servicioArtistas'
import {useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/style-home.css'
import myLG from '../img/my_lg.png'

export function Footer() {
    const [query, setQuery] = useState('');
    const [artistsListResponse, setArtistsListResponse] = useState('');
    const [topTracksListResponse, setTopTracksListResponse] = useState('');
    const onSearcHandler = (event) => {
        event.preventDefault();

        obtenerTokenSpotify()
        .then((tokenResponse) => {
            pedirArtista(tokenResponse, query)
            .then((artistsResponse) => {
                setArtistsListResponse(artistsResponse);
                console.log(artistsResponse)
            })
        })
    }

    const artistHandler = (artistId) => {
        console.log("click aqui", artistId)
        obtenerTokenSpotify()
        .then((tokenResponse)=>{
            pedirCancionesTop(tokenResponse, artistId)
            .then((topTracksList)=>{
                setTopTracksListResponse(topTracksList);
                console.log(topTracksList)
            })
        })
    }

    return(
        <>
        <section className='container content-main'>
           <div className='nav-menu'>
                <img src={myLG} alt="logo" className='logo'/>
                <form onSubmit={onSearcHandler}>
                    <div className="mb-3 search" >
                        <input type="text" className="form-control" value={query} placeholder="search" onChange={e => setQuery(e.target.value)}/>
                        <button type="submit" className="btn btn-dark my-3"><span>🔍</span></button>
                    </div>
                </form>
           </div>
            {artistsListResponse && artistsListResponse.artists && artistsListResponse.artists.total > 0 &&
                <div className='container content-artist'>
                    {artistsListResponse.artists.items.map((artist, index) => {
                        return (
                        <div className='artist' key={index} onClick={() => { artistHandler(artist.id)}}>
                            <div className='card my-2 mx-2 '>
                                <div className='card-body h-100 shadow'>
                                    <img src={artist.images[0].url} alt="artista" className='img-track' />
                                    <h5 className='card-title'>{artist.name}</h5>
                                </div>
                            </div>  
                        </div>
                        );
                    })}
                </div>
            }
            {topTracksListResponse && topTracksListResponse.tracks && topTracksListResponse.tracks.length > 0 &&
                <div className='container content-track'>
                    {topTracksListResponse.tracks.map((track, index) => {
                        return (
                        <div className=' track'  key={index}>
                            <div className='card my-3 mx-3'>
                                <div className='card-body h-100 w-100 shadow body-track'>
                                    <h5 className='card-title'>{track.name}</h5>
                                    <img src={track.album.images[0].url} alt="" className='img-track my-2' />
                                    <audio src={track.preview_url} controls></audio>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            }
        </section>
        </>
    )
}
