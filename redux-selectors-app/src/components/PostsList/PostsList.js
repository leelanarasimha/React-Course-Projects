import { useState } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from '../../store/actions/PostsActions';
import { getActivePosts } from '../../store/selectors/PostSelectors';
import SinglePost from '../SinglePost/SinglePost';

function PostsList(props) {
    const [postId, setPostId] = useState('');

    function onPostClick(id) {
        setPostId(id);
    }

    return (
        <div style={{ marginLeft: '30px' }}>
            <h2>Posts List</h2>

            <button onClick={() => props.increment()}>
                Increment Count
            </button>
            <div>{props.count}</div>

            <div>
                {props.posts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => onPostClick(post.id)}
                    >
                        {post.title}
                    </div>
                ))}
            </div>

            <div>
                {postId && (
                    <div>
                        <SinglePost id='1' />
                        <SinglePost id='2' />
                    </div>
                )}
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
