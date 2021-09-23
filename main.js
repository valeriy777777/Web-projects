


import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

import { toggleShow } from "./toggleshow.js";
import { runCountdown } from "./countdown.js";



const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
function handleCalcDates(event) {
    dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}




const countdownDiv = document.querySelector('#countdown');
countdownDiv.style.display = 'none';

toggleShow(dateCalcForm, countdownDiv);

const deadline = '2021-10-31';

runCountdown('#countdown', deadline);