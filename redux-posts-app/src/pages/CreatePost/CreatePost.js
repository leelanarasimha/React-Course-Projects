import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPostAction } from '../../store/actions/PostActions';

export default function CreatePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    function onCreatePost(e) {
        e.preventDefault();
        const postData = {
            title,
            description,
        };

        dispatch(createPostAction(postData, props.history));
    }

    return (
        <div>
            <div className='flex items-center justify-between my-4'>
                <h2>Create Post</h2>
                <div>
                    <Link
                        to='/posts'
                        className='bg-gray-500 text-white p-2'
                    >
                        Back to Posts
                    </Link>
                </div>
            </div>

            <div>
                <form onSubmit={onCreatePost}>
                    <div>
                        <label>Title</label>
                        <div>
                            <input
                                type='text'
                                className='border border-gray-500 w-full px-1'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='my-2'>
                        <label>Description</label>
                        <div>
                            <textarea
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                className='border border-gray-500 w-full px-1 h-28'
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='px-2 py-1 bg-red-500 text-white'
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
