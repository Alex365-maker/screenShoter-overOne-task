import './stylesAppeal.css';
import disk from './images/disk.svg';
import piramida from './images/piramida.svg';
const Appeal = () => {
  return (
    <>
    <div className='Container'>
   <div className='AppealContainer'>
       <p>Присоединяйтесь к 50 000 + пользователей, которые ежедневно используют Screenshoter в работе и личной переписке</p>
       <button>Загрузить сейчас</button>
   </div>
   <img src={piramida} className='piramida' alt='piramida'/>
   <div className="blurBlock"></div>
   <img src={disk} className='disk' alt='disk'/>
   </div>
    </>
  );
}

export default Appeal;