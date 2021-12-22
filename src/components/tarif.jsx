import React from 'react';
import './tarif.scss'

class Tarif extends React.Component{
  render() {
    const {header, main,text,isSelected,id} = this.props;
    let classTarif = "" ;
    if (isSelected) classTarif="selected";
    return (
      <div className={`tarif-card"+ ${classTarif}`} id={id}>
      <div className='card-header'>Безлимитный {header} </div>
      <div className='card-main'> 
      <span className='main-cost'>руб</span> {main} <span className='main-month'>/мес</span>
      </div>
      <div className='card-text'>до {text} Мбит/сек</div>
      <div className='card-footer'> Объем включенного траффика не ограничен</div>
      </div>
          );
  }
}


export default Tarif; 