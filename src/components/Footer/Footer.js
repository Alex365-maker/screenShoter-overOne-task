import './stylesFooter.css';
import logo from '../Header/images/logo.svg'

const Footer = () => {
  return (
    <>
    <footer>
<img src={logo} />
<ul style={{marginTop:'0px'}} ><p>Продукт</p>
    <li>Функции</li>
    <li>Преимущества</li>
    <li>Как использовать</li>
</ul>

<p>Обратная связь</p>
<p>Политика конфиденциальности</p>
    </footer>
    </>
  );
}

export default Footer;