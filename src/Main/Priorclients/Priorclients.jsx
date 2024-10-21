import './Priorclients.css'
import logo1 from './Priorclients-assets/IMAGE.png'
import logo2 from './Priorclients-assets/IMAGE2.png'
import logo3 from './Priorclients-assets/Logo-Group-8.png'
import logo4 from './Priorclients-assets/Logo-Group-6.png'

export default function Priorclients() {
    return(
        <>
            <section className='background6'>
                <div>
                    <div>
                        <h5>prior clients</h5>
                        <h3>Happy customers.</h3>
                        <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                    </div>
                    <div className='img-div-logo'>
                        <div>
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                        </div>
                        <div>
                            <img src={logo3} alt="" />
                            <img src={logo4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}