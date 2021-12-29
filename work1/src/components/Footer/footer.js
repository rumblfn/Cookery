import { Link } from 'react-router-dom';
import inst from '../../images/inst.png'

export const Footer = () => {
    return (
        <div style={{ paddingBottom: '30px', marginTop: '100px' }}>
            <hr className="hr" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <span className='gradient-text heading bottom-heading'>Cookery</span>
                </Link>
                <div className='footer-box'>
                    <div>
                        <h3>Information</h3>
                        <p>Advertising on the website</p>
                    </div>
                    <div>
                        <h3>Contact us</h3>
                        email: <a></a>
                    </div>
                    <div>
                        <a target='_blank' href='https://instagram.com/_it_mania_?utm_medium=copy_link'><img className='instImg' src={inst} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}