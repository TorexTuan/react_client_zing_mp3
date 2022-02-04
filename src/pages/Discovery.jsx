
import React from 'react';
import { useParams } from 'react-router-dom';

const Discovery = () => {
    let params = useParams() 
    return <div>Discovery Page {params.hello}</div>;
};

export default Discovery;
