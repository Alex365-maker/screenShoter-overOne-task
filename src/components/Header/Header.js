import './stylesHeader.css';
import logo from './images/logo.svg'
import textBackground from './images/textBackground.svg'
import bigPicture from './images/bigPicture.svg'

const Header = () => {
  return (
    <>
    <header>
<img src={logo} alt="logo"/>
<div className="HeaderTextContainer">
<p>Функции</p>
<p>Преимущества</p>
<p>Как использовать</p>
<p> Частые вопросы</p>

<select>
    <option>RU</option>
    <option>ENG</option>
</select>

</div>
    </header>
    <div className='textContainer'>
<h1>Делайте снимки и записывайте экран <img src={textBackground} /><span>в 1 клик</span></h1>
<p>
    Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК, чтобы поделиться с кем угодно
    </p>
    <button><span>Скачать бесплатно</span></button>
    </div>
    
    <div className='block'>
    <img src={bigPicture} alt="bigPicture"/>
    <div className='blur'><span>Бесплатная программа для Windows</span></div>
    </div>
    </>
  );
}

export default Header;