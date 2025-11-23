const w = document.getElementById("weight"),
  h = document.getElementById("height"),
  r = document.getElementById("result");
document.getElementById("calc").onclick = () => {
  const w = +weight.value,
    h = +height.value / 100,
    bmi = w / (h * h);
  if (!w || !h) {
    result.textContent = "Enter values";
    return;
  }
  let color, msg;
  if (bmi < 18.5) {
    color = "blue";
    msg = "Underweight";
  } else if (bmi < 25) {
    color = "green";
    msg = "Normal";
  } else if (bmi < 30) {
    color = "orange";
    msg = "Overweight";
  } else {
    color = "red";
    msg = "Obese";
  }
  result.textContent = `BMI: ${bmi.toFixed(1)} (${msg})`;
  result.style.color = color;
};
