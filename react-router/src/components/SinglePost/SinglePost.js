import { Component } from 'react';

export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: '',
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log('gettings posts');
            this.getPosts();
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        let postName = '';
        switch (this.props.match.params.id) {
            case '1':
                postName = 'Post 1 Details';
                break;
            case '2':
                postName = 'POst 2 Details';
                break;
            default:
                postName = 'POst 3 Details';
        }
        this.setState({
            postName: postName,
        });
    };

    render() {
        return (
            <div>
                <div>{this.state.postName}</div>
            </div>
        );
    }
}
