const w = document.getElementById("weight"),
    h = document.getElementById("height"),
    r = document.getElementById("result");
document.getElementById("calc").onclick = () => {
    const weight = w.value,
        height = h.value / 100;
    if (!weight || !height) {
        r.textContent = "Enter valid values!";
        return;
    }
    const bmi = (weight / (height * height)).toFixed(1);
    let msg = "";
    if (bmi < 18.5) msg = "Underweight";
    else if (bmi < 25) msg = "Normal";
    else if (bmi < 30) msg = "Overweight";
    else msg = "Obese";
    r.textContent = `BMI: ${bmi} (${msg})`;
};
