
import React, {useState} from "react";

const Form = (props) => {
    const [albumName, setAlbumName] = useState('');
    const [releaseYear, setReleaseYear] = useState(1930);

    const handleAlbumName = (event) => {
    }

    const handleReleaseYear = (event) => {
    }

    return (
        <div>
            <form>
                <label htmlFor="albumName"></label>
                <input type="text" value={albumName} onChange= {(event) => handleAlbumName(event)}/>
                <label htmlFor="releaseYear"></label>
                <input type="text" value={releaseYear} onChange= {(event) => handleReleaseYear(event)}/>
            </form>

        </div>

    )}

export default Form;