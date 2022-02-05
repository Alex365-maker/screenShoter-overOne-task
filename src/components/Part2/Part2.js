import './stylesPart2.css';
import img1 from './images/img1.svg'
import img2 from './images/img2.svg'
import img3 from './images/img3.svg'
import img4 from './images/img4.svg'

const Part2 = () => {
  return (
   <>
   <div className='Part2'>
   <div className='Part2Container'>
<h2>Встречайте — скриншоты и запись экрана <span>2 в 1</span></h2>
<span>Больше не нужно искать две отдельные программы для скриншотов и записи экрана. Screenshoter поможет сделать <strong>снимок экрана, записать видео и поделиться</strong> им <strong>с кем угодно</strong>. Можно выделить весь экран, определенную область или активное окно</span>
   </div>
   <div className='CardsContainer'>
       <div>
           <img src={img1} />
           <h4>Снимок и запись экрана в 1 клик</h4>
           </div>
       <div>
       <img src={img2} />
       <h4>Моментальная ссылка на файл</h4></div>
       <div>
       <img src={img3} />
       <h4>Удобный редактор снимков</h4></div>
       <div>
       <img src={img4} />
       <h4>Бесплатно и без регистрации</h4></div>
   </div>
   </div>
   </>
  );
}

export default Part2;