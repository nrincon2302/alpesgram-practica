import { React } from 'react';
import User from './user';
import PhotoGrid from './photoGrid';

function Home(props) {
    
    return (
        <>
        <User usuario={props.usuario} />
        <PhotoGrid />
        </>
    );
}

export default Home;
