import React from 'react';
import axios from 'axios';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
            const posts = res.data.map(obj => obj);
            this.setState({posts});
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post => <li key={post.title}>{post.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default Test;
