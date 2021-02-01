export function Post(props) {
    return (
        <div className='mx-2 p-2 border shadow border-gray-300'>
            <div>Id: {props.post.id}</div>
            <div>Title: {props.post.title}</div>
            <div>Description: {props.post.description}</div>
        </div>
    );
}
