export function Post(props) {
    return (
        <a
            href='#'
            onClick={props.postclicked}
            className='mx-2 p-2 border shadow border-gray-300 inline-block'
        >
            <div>Id: {props.post.id}</div>
            <div>Title: {props.post.title}</div>
            <div>Description: {props.post.description}</div>
        </a>
    );
}
