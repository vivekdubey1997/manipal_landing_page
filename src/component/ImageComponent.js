import React from 'react';

const ImageComponent = () => {
    return (
        <div style={{ width: '100px',height:"100px" ,textAlign: 'center', backgroundColor:"red", position:'absolute',top:'-15%' }}>
            <img
                src="https://via.placeholder.com/150"  // replace this with the actual image source
                alt="Business Analytics"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
};

export default ImageComponent;
