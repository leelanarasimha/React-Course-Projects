import { connect } from 'react-redux';
import { incrementCount } from '../../store/actions/PostsActions';

function PostsList(props) {
    return (
        <div style={{ marginLeft: '30px' }}>
            <h2>Posts List</h2>

            <button onClick={() => props.increment()}>
                Increment Count
            </button>
            <div>{props.count}</div>

            <div>
                {props.posts.map((post) => (
                    <div key={post.title}>{post.title}</div>
                ))}
            </div>
        </div>
    );
}

const getActivePosts = (posts, filter) => {
    debugger;
    switch (filter) {
        case 'SHOW_ACTIVE':
            return posts.filter((post) => post.isActive);
        case 'SHOW_INACTIVE':
            return posts.filter((post) => !post.isActive);
        default:
            return posts;
    }
};

const mapStateToProps = (state) => {
    return {
        posts: getActivePosts(state.posts, state.filter),
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCount()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
