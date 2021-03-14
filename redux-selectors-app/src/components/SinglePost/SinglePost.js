import { connect } from 'react-redux';
import { getPost } from '../../store/selectors/PostSelectors';

function SinglePost(props) {
    return (
        <div>
            <div>Single Post Page</div>
            <div>Id: {props.post.id}</div>
            <div>Title: {props.post.title}</div>
        </div>
    );
}

const makeStateToProps = () => {
    const getPostDetails = getPost();
    return (state, props) => {
        return {
            post: getPostDetails(state, props),
        };
    };
};

export default connect(makeStateToProps)(SinglePost);
