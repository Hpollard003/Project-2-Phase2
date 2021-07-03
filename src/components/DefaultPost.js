import img from '../imgs/Post2.jpg'

const DefaultPost = () => {
    return (
        <div className="card-img-top">
            <h2>Whats your favourite old anime?</h2>
            <img className='img-thumbnail' src={img} alt='anime' />
        </div>
    )
}

export default DefaultPost