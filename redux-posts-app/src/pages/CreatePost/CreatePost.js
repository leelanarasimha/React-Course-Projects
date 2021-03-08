import { Link } from 'react-router-dom';

export default function createPost(props) {
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
        </div>
    );
}
