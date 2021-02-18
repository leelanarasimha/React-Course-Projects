import { lazy, Suspense, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const LazyLoad = lazy(() => import('../LazyLoad/LazyLoad'));

export default function Posts(props) {
    const [showComponent, setShowComponent] = useState(false);
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
                    <a
                        href='#'
                        onClick={() => setShowComponent(!showComponent)}
                    >
                        Toggle Component
                    </a>
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    {showComponent && (
                        <div>
                            <LazyLoad />
                        </div>
                    )}
                </Suspense>

                <div>
                    <Route path='/posts/:id' component={SinglePost} />
                </div>
            </div>
        </div>
    );
}
