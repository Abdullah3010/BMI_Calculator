
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import InputField  from './componants/input_field';
import Button from './componants/Button';
import Message from './componants/message';
import { useState } from 'react';
import React from 'react';




function App() {

    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [BMI, setBMI] = useState();

    const onChangeHeight = (e) => setHeight(e.target.value);
    const onChangeWeight = (e) => setWeight(e.target.value);

    const checkValues = () => {
        if(isNaN(weight)){
            return 'Weight must be a number';
        } else if(weight < 0){
            return 'Weight must be more than 0';
        } else if(weight < 20) {
            return 'Weight too small';
        } else if(isNaN(height)){
            return 'Height must be a number';
        } else if(height < 0){
            return 'Height must be more than 0';
        }
        return '';
      };

      const submitButton = () => {
        const check = checkValues();
        if (check === '') {
            let newH = height;
            if(height > 3){
                newH = height/100;
            }
            const BMIValue = (weight / (newH * newH)).toFixed(2);
            setBMI(BMIValue);
            console.log(this.state.BMI);
        } else {
          alert(check);
        }
      };
  return (
    <div className='container'>
        <div className='row my_form'>
            <div className='col-md-6'>
                <InputField
                inputClass='my_input'
                lableClass='my_lable'
                placeholder='Enter your Weight'
                value={weight}
                lable='Weight : ' 
                onChange={onChangeWeight}/>
                <InputField 
                inputClass='my_input'
                lableClass='my_lable'
                placeholder='Enter your Height'
                lable='Height : '   
                value={height}
                onChange={onChangeHeight}/>
                <Button text='Calculate' onClick={submitButton}/>
                <h3 className='resulte'>Your BMI resulte is : {BMI}</h3>
            </div>
            <div className='col-md-6'>
                <Message myClass='info'/>
            </div>
        </div>
    </div>
  );
}

export default App;
