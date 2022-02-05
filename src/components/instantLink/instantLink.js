import './instantLink.css';
import roundCube from './images/RoundCube-White-Glossy.jpg';
import gif from '../screenRecording/images/gif.jpg';

const instantLink = () => {


  return (
    <>
    <img className="roundCube" src={roundCube} alt="roundCube"/>
<div className='container'>
    <div className='background'>
    <div className='backgroundGradient'>
    <div className="rectangle">
    <img className='gif' src={gif} alt="gif"></img>
    <div className='backgroundFrame'>
            <p className='frameText'><strong>Файлы хранятся в течение 1 года</strong> с момента создания. Можно их удалять самостоятельно. В истории программы доступны последние 5 скриншотов</p>
        </div>
    </div>
    </div>
    </div>
    <div className="description">
    <h2 className="descriptionTitle">Мгновенная ссылка</h2>
    <p className='descriptionText'>Мгновенное получение ссылки на снимок или видео. Вы только нажали Enter, а ссылка уже в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео</p>
    </div>
</div>
    </>
  );
};

export default instantLink;