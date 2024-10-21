import fotkadeb from './Ourfirm-assets/IMAGE.png'
import './Ourfirm.css'
export default function Ourfirm(){
    return(
        <>
            <section className='background2'>
                <div>
                    <div>
                        <h2>Our firm</h2>
                    </div>
                    <div className='text-right-lorem'>
                        <div className='text-right-lorem-top'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        </div>
                        <div className='text-right-lorem-bootom'>
                            <img src={fotkadeb} alt="" />
                            <div>
                                <h3>Stephen Collier</h3>
                                <p>Senior Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}