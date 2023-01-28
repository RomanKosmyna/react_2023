import {useEffect, useState} from "react";
import {albumsService} from "../../services/albumsService";
import {Album} from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll()
            .then(({data}) => setAlbums(data))
    }, []);
    
    return (
        <div>
            {albums.map(item => <Album key={item.id} album={item}/>)}
        </div>
    );
};

export {Albums};