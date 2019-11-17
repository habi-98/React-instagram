import React from 'react';

const User = (props) => {
    const {min, src, alt, name, id} = props;
    console.log(props, 'props')
    return (
        <a key={id} href="#" className={min ? "user min": "user"}>
            <img src={src} alt={alt}/>
            <div>{name}</div>
        </a>
    )
};

export default User;