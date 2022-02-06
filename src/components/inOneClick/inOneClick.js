import './inOneClick.css';
import cube from './images/RoundCube-Purple-Glossy.jpg';
import elipse from './images/Ellipse 1.png';
import gif from '../screenRecording/images/gif.jpg';

const inOneClick = () => {


  return (
    <>
  <img className='cube' src={cube} alt='cube'/>  
  <img className='elipse' src={elipse} alt='elipse'/>
    <div className="rectangle1">
    <img className='gif' src={gif} alt="gif"></img>
</div>
<div className='container'>
    <div className="description1">
    <h2 className="descriptionTitle1">В один клик</h2>
    <p className='descriptionText1'><span class="descriptionColor1">
        Не нужно запоминать комбинации клавиш </span>на клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана. </p>
    <p className='descriptionText1'> Просто нажмите две кнопки мыши или настройте горячую кнопку на любую удобную клавишу</p>
    </div>
</div>
    </>
  );
};

export default inOneClick;