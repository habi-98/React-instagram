import React, {Component} from 'react';
import Posts from '../components/Posts';
import Users from '../components/Users';
import InstaService from '../services/instaService';

class Feed extends Component{
    InstaService = new InstaService();

    state = {
        users: []
    };

    componentDidMount() {
        this.updateUsers()
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
    }
    onUsersLoaded = (users) => {
        this.setState({
            users: users
        });
    };

    render() {
        return (
            <div className="container feed">
                <Posts/>
                <Users users={this.state.users}/>
            </div>
        );
    }
};

export default Feed;
