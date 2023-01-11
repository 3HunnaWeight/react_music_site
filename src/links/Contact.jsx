import React from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
        <Logo/>
        <div className='wrapper'>
        <form name="form"  id="form_message">
            <h2>Свяжиетесь с нами.</h2>
            <div className='input__wrapper'>
                <div className='titles'>Ваше имя</div> <input className='input' id ="name" name="name" type="text"/>
            </div>
            <div className='input__wrapper'>
                  <div className='titles'>Ваша почта</div> <input className='input' name="email" type="text"/>
            </div>
             <div className='input__wrapper'>
                  <div className='titles'>Причина контакта</div> <input className='input' name="reason" type="text"/>
            </div>
            <div className='input__wrapper'>
              <div className='titles'>Сообщение</div> <input className='input' name="mess" type="textarea"/>
            </div>
            <button  id = "submit" type="submit"  name="formSubmit">Отправить</button>
        </form>
        </div>
          <Footer/>
          
    </div>
    
  )
}
