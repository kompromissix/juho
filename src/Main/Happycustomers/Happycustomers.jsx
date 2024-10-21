import './Happycustomers.css'
import left from './Happycustomers-assets/IMAGE.png'
import mid from './Happycustomers-assets/Landing-page.png'
import right from './Happycustomers-assets/Landing-page2.png'

export default function Happycustomers() {
    return(
        <>
            <section className='background4'>
                <div>
                    <div className='top-SFB'>
                        <h3>Our process</h3>
                        <h2>How we do what we do.</h2>
                    </div>
                    <div className='SFB'>
                            <div>
                                <img src={left} alt="" />
                                <h4>Sketching</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.</p>
                            </div>
                            <div>
                                <img src={mid} alt="" />
                                <h4>Finalizing</h4>
                                <p>Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.</p>
                            </div>
                            <div>
                                <img src={right} alt="" />
                                <h4>Building</h4>
                                <p>Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}