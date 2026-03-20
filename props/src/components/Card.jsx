import { Bookmark } from 'lucide-react'
const Card = () => {

    return (
        <div className='parent'>
            <div className='card'>
                <div className="top">
                    <img src="https://i.pinimg.com/1200x/a9/63/b3/a963b31cb9910acd1674d0745542fa4c.jpg" alt="" />
                    <button>Save <Bookmark /></button>
                </div>
                <div className='center'>
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div>
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>

                <div className='bottom'>
                            <h3>120$/hr</h3>
                            <p>Ghaziabad, India</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
            </div>
    )
}

export default Card
