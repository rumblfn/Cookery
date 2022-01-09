import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div style={{ paddingBottom: '30px', marginTop: '100px' }}>
            <hr className="hr" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <span className='gradient-text heading bottom-heading'>Cookery</span>
                </Link>
                <div className='footer-box'>
                    
                </div>
            </div>
        </div>
    )
}