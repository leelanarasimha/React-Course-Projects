import { withRouter } from 'react-router-dom';
import Team from '../Team/Team';

export function About(props) {
    console.log(props);
    return (
        <div>
            <div>About Page</div>
            <Team />
        </div>
    );
}

export default withRouter(About);
