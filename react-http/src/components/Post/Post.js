export function Post(props) {
    return (
        <a
            href='#'
            onClick={props.postclicked}
            className='mx-2 p-2 border shadow border-gray-300 inline-block flex-1 my-2'
        >
            <div>Id: {props.post.id}</div>
            <div>Title: {props.post.title}</div>
            <div>Description: {props.post.description}</div>
            <div className='text-right'>
                <button
                    onClick={props.postDeleted}
                    className='bg-red-400 text-white px-2 py-1'
                >
                    Delete Post
                </button>
            </div>
        </a>
    );
}
