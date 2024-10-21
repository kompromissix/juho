import './Thehome.css'
import fotosprava from './Thehome-assets/fotosprava.png'
export default function Thehome(){
    return(
        <>
            <section className="background1">
                <div className='textsleva'>
                    <div>
                        <p>Wishbone+Partners</p>
                        <h1>The home of beautiful architecture.</h1>
                        <p>We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.</p>
                        <button type="button">
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <img className='fotosprava' src={fotosprava} alt="" />
            </section>
        </>
    )
}