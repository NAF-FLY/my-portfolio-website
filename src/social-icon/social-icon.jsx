import '../App.css';

import s from '../App.css';

export const SocialIcon = () => {
    return (
        <div className='social__wrapper'>
            <ul>
                <li className='vk'><i className="fa fa-vk" aria-hidden="true"></i></li>
                {/* <li style='--clr:#1da1f2'><i className="fa fa-whatsapp" aria-hidden="true"></i></li>
                <li style='--clr:#1da1f2'><i className="fa fa-instagram" aria-hidden="true"></i></li>
                <li style='--clr:#1da1f2'><i className="fa fa-telegram" aria-hidden="true"></i></li> */}
            </ul>
        </div>
    )
}