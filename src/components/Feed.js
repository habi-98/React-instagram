import React from 'react';
import Posts from '../components/Posts';
import Users from '../components/Users';
const Feed = () => {
    return (
        <div className="container feed">
            <Posts/>
            <Users/>
        </div>
    );
};

export default Feed;
