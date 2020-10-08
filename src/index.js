import React from 'react';

import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {
    return (
        <>
            <Logo />
            <Photo count={13} file={require('./assets/img/gato1.jpg')} />
            <Photo count={10} file={require('./assets/img/gato2.jpg')} />
        </>
    );
}

export default Main;