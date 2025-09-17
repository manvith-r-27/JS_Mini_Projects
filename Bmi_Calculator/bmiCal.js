const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid input ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid input ${weight}`
    }
    else{
        const output = (weight/((height*height)/10000)).toFixed(2)
        if(output < 18.6){
            result.innerHTML = `BMI is ${output} : You are underweight`
        }
        else if(output > 18.6 && output < 24.9){
            result.innerHTML = `BMI is ${output} : You are Normal`
        }
        else{
            result.innerHTML = `BMI is ${output} : You are overweight`
        }
    }
})