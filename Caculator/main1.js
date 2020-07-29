const supplyValue = document.querySelector(".valueOfSupply__value");
const expenseValue = document.querySelector(".expense__value");
const incomeValue = document.querySelector(".income__value");
const dividendFirst = document.querySelector(".dividend__first__value");
const dividendSecond = document.querySelector(".dividend__second__value");
const dividendThird = document.querySelector(".dividend__third__value");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  // 1. 버튼 클릭시에 데이터를 텍스트로 받아옴

  const text = input.value;
  console.log(text);

  // 2. 텍스트를 supplyValue에 넣어줌
  // 3. supplyValue의 30% 가격을 expenseValue에 넣음
  // 4. 나머지 가격을 비율에 따라 나눠서 first second third에 입력
  // 5. input초기화
}
input.addEventListener("click", (event) => {
  onAdd();
});
