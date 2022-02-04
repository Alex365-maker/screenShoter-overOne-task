import './screenRecording.css';
import toroid from './images/SuperToroid-White-Glossy.jpg';
import gif from './images/gif.jpg';

const screenRecording = () => {


  return (
    <>
    <img className="toroid" src={toroid} alt="toroid"/>
<div className='container'>
    <div className='background'>
    <div className='backgroundGradient'>
    <div className="rectangle">
    <img className='gif' src={gif} alt="gif"></img>
    </div>
    </div>
    </div>
    <div className="description">
    <h2 className="descriptionTitle">Запись экрана</h2>
    <p className='descriptionText'>Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы.</p>
    <p className='descriptionText'><span class="descriptionColor">
    Достаточно нажать две кнопки мыши,</span>выделить 
    необходимую область и начнется запись видео с экрана. Быстро и без сложных настроек</p>
    </div>
</div>

    </>
  );
};

export default screenRecording;