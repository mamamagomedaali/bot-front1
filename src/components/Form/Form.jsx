 import { useTelegram } from '../../hooks/useTelegram';
import {React, useCallBack, useEffect, useState} from 'react';
 
export const Form =()=>{
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();
    const onSendData = useCallBack(()=>{
      const data = {
        country, city, subject
      }
      tg.sendData(JSON.stringify(data))
    }, [city, country, subject])
    useEffect(()=>{
      tg.onEvent('mainButtonClicked', onSendData)
      return() =>{
        tg.offEvent('mainButtonClicked', onSendData)
      }
    })
    useEffect(()=>{
      tg.MainButon.setParams({
        text: 'Отправить данные'
      })
      }, [])

      useEffect(()=>{
        if(!country || !city){
          tg.MainButton.hide();
        }else{
          tg.MainButtonshow();
        }
    }, [country, city])
    const onChangeCity = (e) =>{
      setCity(e.target.value);
    }
    const onChangeCountry = (e) =>{
      setCountry(e.target.value);
    }
    const onChangeSubject = (e) =>{
      setSubject(e.target.value);
    }
    return(
    <>
    <h3>Введите ваши данные:</h3>
    <input
    className='input'
    type='text'
    placehoIder='Город'
    value = {city}
    onChange= {onChangeCity}
    />
    <input 
    className='input'
    type='text'
    placehoIder='Улица'
    value = {country}
    onChange= {onChangeCountry}
    />
    <select value ={subject} onChange={onChangeSubject} className='select'>
      <option value={'legal'}>Физ.лицо</option>
      <option value={'legal'}>Юр.лицо</option>
      </select>
    </>)
    }