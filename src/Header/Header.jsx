import './Header.css'
import logo from './Header-assets/IMAGE.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div>   
                        <img src={logo} alt="" />
                        <div>
                            <p>Projects</p>
                            <p>About</p>
                            <p>News</p>
                            <p>Team</p>
                            <p>Contact</p>
                            <button type="button">Get template</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}