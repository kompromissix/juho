import logotip from './Footer-assets/IMAGE.png'
import logotipx from './Footer-assets/Frame.png'
import logotipi from './Footer-assets/Logoi.png'
import logotipf from './Footer-assets/Frame2.png'
import './footer.css'
export default function Footer() {
    return(
        <>
            <footer>
                <div>
                    <div className='footer-left'>
                        <img src={logotip} alt="" />
                        <p>Powered by Webflow</p>
                        <p>All rights reserved Wishbone+Partners, Inc. Licensing</p>
                    </div>
                    <div>
                        <img src={logotipx} alt="" />
                        <img src={logotipi} alt="" />
                        <img src={logotipf} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}