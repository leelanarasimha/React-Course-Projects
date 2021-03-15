import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updatePostAction } from '../../store/actions/PostActions';
import { getPost } from '../../store/selectors/PostSelectors';

function EditPost(props) {
    const [post, setPost] = useState(props.post);

    const dispatch = useDispatch();

    useEffect(() => {
        setPost(props.post);
    }, [props.post]);

    function onUpdatePost(e) {
        e.preventDefault();
        dispatch(updatePostAction(post, props.history));
    }

    return (
        <div>
            <div>Edit Post</div>
            <div>
                <form onSubmit={onUpdatePost}>
                    <div className='my-2'>
                        <label>Title</label>
                        <div>
                            <input
                                type='text'
                                className='border border-gray-500 p-1 w-full'
                                value={post.title}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className='my-2'>
                        <label>Description</label>
                        <div>
                            <textarea
                                className='border border-gray-500 p-1 w-full'
                                value={post.description}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-red-500 text-white px-3 py-2'
                        >
                            Edit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const makeStateToProps = () => {
    const post = getPost();
    return (state, props) => {
        return {
            post: post(state, props.match.params.id),
        };
    };
};

export default connect(makeStateToProps)(EditPost);
