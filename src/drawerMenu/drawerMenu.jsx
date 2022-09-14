import { useState } from 'react';
import { Link } from 'react-router-dom';
import './drawerMenu.module.css';

export const DrawerMenu = () => {

    const [click, setClick] = useState(false);

    let cssProperties = {},
        cssProperties1 = {},
        cssProperties2 = {},
        cssProperties3 = {},
        cssProperties4 = {};

    cssProperties['--i'] = '#a955ff'
    cssProperties['--j'] = '#ea51ff'

    cssProperties1['--i'] = '#56ccf2'
    cssProperties1['--j'] = '#2f80ed'

    cssProperties2['--i'] = '#ff9966'
    cssProperties2['--j'] = '#ff5e62'

    cssProperties3['--i'] = '#80ff72'
    cssProperties3['--j'] = '#7ee8fa'

    cssProperties4['--i'] = '#ffa9c6'
    cssProperties4['--j'] = '#f434e2'


    return (
        <ul>
            <Link to='/'>
                <li style={cssProperties}>
                    <span className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <small className="title">Home</small>
                </li>
            </Link>
            <Link to='/skills'>
                <li style={cssProperties1}>
                    <span className="icon">
                        <ion-icon name="flash-outline"></ion-icon>
                    </span>
                    <small className="title">Skills</small>
                </li>
            </Link>
            <Link to='/projects'>
                <li style={cssProperties2}>
                    <span className="icon">
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </span>
                    <small className="title">Projects</small>
                </li>
            </Link>
            <Link to='/sources'>
                <li style={cssProperties3}>  
                    <span className="icon">
                        <ion-icon name="share-social-outline"></ion-icon>
                    </span>
                    <small className="title">Sources</small>
                </li>
            </Link>
            <Link to='/contact'>
                <li style={cssProperties4}>
                    <span className="icon">
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <small className="title">Contact</small>
                </li>
            </Link>
        </ul>
    )
}