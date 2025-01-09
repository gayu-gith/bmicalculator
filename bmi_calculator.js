function calculateBmi() { 
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if (!weight || !height) {
    document.getElementById('message').innerHTML = 'Please enter valid weight and height values';
    document.getElementById('bmi-output').innerHTML = '';
    document.getElementById('heading').innerHTML = '';
    return;
    }
    // Convert height from cm to meters for the BMI formula
    height = height / 100;
    // BMI calculation formula for kg and meters
    let bmi = weight / (height * height);
    document.getElementById('heading').innerHTML = 'Your BMI is:'; 
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2);
    // BMI classification
    if (bmi < 18.5) { 
    document.getElementById('message').innerHTML = 'You are underweight'; 
    } else if (bmi >= 18.5 && bmi <= 24.9) { 
    document.getElementById('message').innerHTML = 'You are healthy'; 
    } else if (bmi >= 25 && bmi <= 29.9) { 
    document.getElementById('message').innerHTML = 'You are overweight'; 
    } else { 
    document.getElementById('message').innerHTML = 'You are obese'; 
    } 
    }
    