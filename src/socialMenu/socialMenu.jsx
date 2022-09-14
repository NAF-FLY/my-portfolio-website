import './socialMenu.css';

export const SocialMenu = (props) => {

    let cssProperties = {},
        cssProperties1 = {},
        cssProperties2 = {},
        cssProperties3 = {};

    cssProperties['--i'] = '#0077FF'

    cssProperties1['--i'] = '#3390EC'

    cssProperties2['--i'] = '#982DA9'

    cssProperties3['--i'] = '#24292F'


    return (
      <div className={props.classes}>
        <a href="https://vk.com/elfiex666" target="_blank">
            <ion-icon name="logo-vk" style={cssProperties}></ion-icon>
        </a>
        <a href="https://tlgg.ru/elfiex666" target="_blank">
            <ion-icon name="paper-plane-outline" style={cssProperties1}></ion-icon>
        </a>
        <a
          href="https://www.instagram.com/x_radiation_x" target="_blank"> 
            <ion-icon name="logo-instagram" style={cssProperties2}></ion-icon> 
        </a>
        <a href="https://github.com/NAF-FLY" target="_blank">
            <ion-icon name="logo-github" style={cssProperties3}></ion-icon>
        </a>
      </div>
    );
};
  