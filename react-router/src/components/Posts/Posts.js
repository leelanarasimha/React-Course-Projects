import { Link, Route } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

export function Posts(props) {
    return (
        <div>
            <div>Posts Page</div>
            <div>
                <ul>
                    <li>
                        <Link to='/posts/1'>Post 1</Link>
                    </li>
                    <li>
                        <Link to='/posts/2'>Post 2</Link>
                    </li>
                    <li>
                        <Link to='/posts/3'>Post 3</Link>
                    </li>
                </ul>

                <div>
                    <Route path='/posts/:id' component={SinglePost} />
                </div>
            </div>
        </div>
    );
}
