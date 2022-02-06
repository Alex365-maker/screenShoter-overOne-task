import './photoEditor.css';
import gif from '../screenRecording/images/gif.jpg';
import superToroid from './images/SuperToroid-Purple-Glossy.jpg'

const photoEditor = () => {


  return (
    <>
    <img className='superToroid' src={superToroid} alt="superToroid"/>
<div className='backgroundPurple'></div>
    <div className="rectangle1">
    <img className='gif' src={gif} alt="gif"/>
</div>
<div className='container'>
    <div className="description1">
    <h2 className="descriptionTitle1">И редактор снимков</h2>
    <p className='descriptionText1'><span class="descriptionColor1">
    Более 5 инструментов </span> для редактирования. Выделяете область и редактируете. </p>
    <p className='descriptionText1'> Если неверно выбрали область — не беда, можно без проблем её передвинуть и/или изменить размер, не удаляя то, что уже нарисовано!</p>
    </div>
</div>
    </>
  );
};

export default photoEditor;