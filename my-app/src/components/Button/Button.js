const Button = ({ name }) => {
    name = 'leela';
    return (
        <div className='my-2'>
            <button className='bg-red-400 text-white px-5 hover:bg-red-700 py-3 rounded-full'>
                {name}
            </button>
        </div>
    );
};

export default Button;
