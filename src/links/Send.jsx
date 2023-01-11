import React from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
export default function Send() {
  return (
    <div>
    <Logo/>
    <div className='wrapper'>
    <form name="form"  id="form_message">
        <h2>Отправить свой бит.</h2>
        <div className='input__wrapper'>
            <div className="titles">Ваше имя</div> <input className="input" id ="name" name="name" type="text"/>
        </div>
        <div className='input__wrapper'>
            <div className="titles">Ваша почта</div> <input className="input" name="email" type="text"/> 
        </div>
        <div className='input__wrapper'>
          <div className="titles">Выберите стиль</div>
             <select className="select" name = "select">
             <option>Trap</option>
             <option>Plug</option>
             <option>Memphis</option>
             <option>Detroit</option>
             <option>Hyperpop</option>
             <option>Drill</option>
             </select>
        </div>
        <div className='input__wrapper'>
            <div className="titles">Ссылка</div> <input className="input" name="slink" type="text"/> 
        </div>
        <button  id = "submit" type="submit"  name="formSubmit">Отправить</button>
        </form>
        </div>
        <Footer/>
    </div>
  )
}
