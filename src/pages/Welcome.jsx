import React,{useEffect, useState} from "react";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";
import StepOne from "./StepOne";

  const Welcome = () => {
  const [nameValue, setNameValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")


  const [nameError, setNameError]= useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const clickHandler = ()=>{
 if(!nameValue){
      setNameError(true)
    }
      else{
        setNameError(false)
      }
    if(!phoneValue){
      setNameError(true)
    }
      else{
        setNameError(false)
      }
  }

    useEffect(() =>{
   
  }, [nameValue, phoneValue] )



  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading Headingtype="h1" headingText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppInput
             hasErr={nameError}
             value={nameValue}
             inputType="text" 
             inputLabel="Ваше имя"
             id="username"
             inputPlaceholder="Ваш ответ"
             isRequired={true}
             inputErr="Введите номер"
             onChange={setNameValue}
             />
            <AppInput
             hasErr={phoneError}
             value={phoneValue}
             inputLabel="Ваш номер" 
             inputType="tel"
             id="usernumber"
             inputPlaceholder="+998 9- --- -- --"
             onChange={setPhoneValue}
            />
            {/* <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <AppButton buttonType="submit" onClick={clickHandler} isDisabled={true}/>
          </form>
        </div>
      </div>
      <div>
        <StepOne />
      </div>
    </div>
  );
};

export default Welcome;
