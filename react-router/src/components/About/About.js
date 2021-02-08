import { withRouter } from 'react-router-dom';

export function About(props) {
    console.log(props);
    return (
        <div>
            <div>About Page</div>
        </div>
    );
}

export default withRouter(About);
