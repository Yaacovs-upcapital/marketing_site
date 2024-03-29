import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import useWindowSize from '../windowSize';
import { i18n } from '../../translations/i18n';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Avatar, LogoBlue } from '../../assets/icons';
import avatar from "../../assets/images/avatar.png";
import "./navbaritems.css";
// import avatar from "../../assets/images/Asset 49.png";
const useStyles = makeStyles(theme => ({
  footerStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 38,
    backgroundImage: `url(/bottom-shape.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 199,
    display: 'flex',
    justifyContent: 'center',
  },
  langDivStyle: {
    width: '54%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
  },
  selectedLangText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
    // borderBottom: '1px solid rgb(47, 67, 154)',
  },

  // Web css
  mainDiv: {
    display: 'flex',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    direction: 'rtl',
    marginRight: "2rem"
  },
  langTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#2f439a',
    marginLeft: 12,
    marginRight: 3,

  },
  selectedLangTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#2f439a',
    // borderBottom: '1px solid #2f439a',
    marginLeft: 3,
    marginRight: 24,

  },
  isScrolled: {
    borderBottom: '1px solid #2f439a',
  }
}));

const NavbarItems = (props) => {
  // const { func } = props

  let avatarBrandRef =useRef<HTMLAnchorElement>(null);
  let langBrandRef =useRef<HTMLDivElement>(null);
  let [avatarBrandToggle,setAvatarBrandToggle] = useState("none");
  let [langBrandToggle,setLangBrandToggle] = useState("none");
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);



  useEffect(() => {
    // clean up code
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavbar=()=>{
   avatarBrandRef.current!.style.display=avatarBrandToggle;
   langBrandRef.current!.style.display=langBrandToggle;
   if(avatarBrandToggle==="none"){
    setAvatarBrandToggle("block");
    setLangBrandToggle("block");
   }
   else{
    setAvatarBrandToggle("none");
    setLangBrandToggle("none");
   }
   
  }

  const classes = useStyles();

  const [language, setLanguage] = useState("he");
  const handleOnclick = (e: any) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  props.lang.navLang.getlang(language)

  const { t } = useTranslation()
  return (
<>
<nav className="navbar fixed-top navbar-expand-lg bg-light" >
  <div className="container-fluid">
   
  
   <NavLink className="navbar-brand" to={"/"}> <LogoBlue className='brnd' /> </NavLink>
    <NavLink to={"/app/"} ref={avatarBrandRef} className="navbar-brand avatar_brand"><img src={avatar} className="avatar"/></NavLink>

    <div className='langSetting' ref={langBrandRef}>
   
          <button
            value='en'
          
            onClick={(e) => handleOnclick(e)}
          >
            {t('en')}
          </button>
          <span>|</span>
          <button
            
            value='he'
          
            onClick={(e) => handleOnclick(e)}
          >
            {t('he')}
          </button>
          </div> 

<NavLink  to={"/app/"} className="vendors_login_lg" >{t("vendors_login")}</NavLink>
   
   
    <button className="navbar-toggler" style={{position:"fixed",right:"10px", top:"19px"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"  onClick={handleNavbar }></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item"><NavLink to={"/"} className="nav-link" >{t("home")}</NavLink></li>
            <li className="nav-item"><NavLink to={"/our-solution/"} className="nav-link">{t('solution')}</NavLink></li>
            <li className="nav-item"><NavLink to={"/about-us/"} className="nav-link">{t('about')}</NavLink></li>
            <li className="nav-item"><NavLink to={"/blog/"} className="nav-link">{t("blog")}</NavLink></li>
            <li className="nav-item"><NavLink to={"/career/"} className="nav-link" style={{pointerEvents:"none"}} >{t("career")}</NavLink></li>
            <li className="nav-item"><NavLink to={"/contact-us/"} className="nav-link"  style={{pointerEvents:"none"}}>{t("contact")}</NavLink></li>
       
        <li className="nav-item">
        <NavLink to={"/app/"} className="nav-link vendors_login_sm">{t("vendors_login")} <img src={avatar} className="avatar2"/></NavLink>

        </li>
        <li className="nav-item">
        <div className='langSetting2'>  
              <button
                value='en'
              
                onClick={(e) => handleOnclick(e)}
              >
                {t('en')}
              </button>
              <span >|</span>
              <button
                
                value='he'
              
                onClick={(e) => handleOnclick(e)}
              >
                {t('he')}
              </button>
              </div> 
        </li>

      </ul>
      
     
     
  
    </div>

 
    
  </div>
  
</nav>


    </>
  )
}

export default NavbarItems