const card_num_col1 = document.querySelector(
  ".card__data__numbers__col-1"
).children;
const card_num_col2 = document.querySelector(
  ".card__data__numbers__col-2"
).children;
const card_num_col3 = document.querySelector(
  ".card__data__numbers__col-3"
).children;
const card_num_col4 = document.querySelector(
  ".card__data__numbers__col-4"
).children;

const obDate = document.querySelector(
  ".card__data__valid-date__container"
).children;

const owner_name = document.querySelector(".card__data__owner__name").children;
const input_number_card = document.querySelector(".input-data__card-numbers");
const input_validity_card = document.querySelector(
  ".input-data__card-validity"
);
const input_number_card_owner = document.querySelector(
  ".input-data__card-owner"
);

input_number_card.value = "";

function innerText(htmlEl, cuurrentText) {
  for (const iter of htmlEl) {
    const currenClass = Number(iter.className);
    if (iter.classList.contains(iter.className)) {
      iter.textContent = cuurrentText.charAt(currenClass).trim();
    } else if (iter.classList.contains(iter.className)) {
      iter.textContent = cuurrentText.charAt(currenClass).trim();
    } else if (iter.classList.contains(iter.className)) {
      iter.textContent = cuurrentText.charAt(currenClass).trim();
    } else if (iter.classList.contains(iter.className)) {
      iter.textContent = cuurrentText.charAt(currenClass).trim();
    }
  }
}

function verifyNext(htmlEl) {
  htmlEl.textContent = htmlEl.textContent !== "X" ? "X" : htmlEl.textContent;
}

function verifyEmpityStr(htmlEl, previusHtmlEl) {
  const arrEl = Array.from(htmlEl);
  const previusHtmlElArr = Array.from(previusHtmlEl);
  arrEl.forEach((el) => {
    el.textContent = el.textContent === "" ? "X" : el.textContent;
  });
  verifyNext(previusHtmlElArr[0]);
}

function innerDefaultValue(htmlEl) {
  const arrEl = Array.from(htmlEl);
  arrEl.map((e) => (e.textContent = "X"));
}

function initCard() {
  const full_number = input_number_card.value;

  if (full_number.length === 0) {
    console.log("in condition");
    innerDefaultValue(card_num_col1);
    innerDefaultValue(card_num_col2);
    innerDefaultValue(card_num_col3);
    innerDefaultValue(card_num_col4);
  }

  if (full_number.length < 5) {
    innerText(card_num_col1, full_number);
    verifyEmpityStr(card_num_col1, card_num_col2);
    console.log("if one");
  } else if (full_number.length > 4 && full_number.length <= 8) {
    innerText(card_num_col2, full_number);
    verifyEmpityStr(card_num_col2, card_num_col3);
    console.log("if two");
  } else if (full_number.length > 8 && full_number.length <= 12) {
    innerText(card_num_col3, full_number);
    verifyEmpityStr(card_num_col3, card_num_col4);
    console.log("if tree");
  } else if (full_number.length > 8 && full_number.length <= 16) {
    innerText(card_num_col4, full_number);
    verifyEmpityStr(card_num_col4, [false]);
    console.log("if fuor");
  }
}

input_number_card.value = "Agua";
input_number_card.addEventListener("input", initCard);
