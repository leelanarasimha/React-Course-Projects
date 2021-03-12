import { connect } from 'react-redux';
import { incrementCount } from '../../store/actions/PostsActions';
import { getActivePosts } from '../../store/selectors/PostSelectors';

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

const mapStateToProps = (state) => {
    return {
        posts: getActivePosts(state),
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCount()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
