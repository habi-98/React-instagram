import React, {Component} from 'react';
import User from './User'
class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg"
                    alt="man"
                    name="Scot"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some acount
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque blanditiis corporis cum delectus dolorem ducimus earum eius
                    enim et ipsam itaque nam numquam omnis perspiciatis placeat, quaerat
                    quisquam reprehenderit soluta!
                </div>
            </div>
        );
    }
}

export default Post;