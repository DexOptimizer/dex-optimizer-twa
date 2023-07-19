import './header.scss'
import logo from '../../images/logo.svg'

const Header = () => {
    return(
        <>
            <div className='header'><img className='logo' src={logo} style={{width: '5rem'}}/></div>
        </>
    )
}
export default Header