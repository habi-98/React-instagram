import React from 'react';
import User from './User';

const Users = (props) => {
    const renderItem = (users) => {
        return users.map(user => {
            return (
                <User
                    id={user.id}
                    src={user.src}
                    alt={user.alt}
                    name={user.name}
                    min
                />
            )
        })
    };

    const items = renderItem(props.users);

    return (
        <div className="right">
            <User
                src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg"
                alt="man"
                name="Scot"
            />
            <div className="users__block">
                {items}
            </div>
        </div>
    )
};

export default Users;