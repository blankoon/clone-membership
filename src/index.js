// 구매버튼 클릭 후, 구매방법선택 열기
const openModalBtn = document.getElementById("btn-purchase");
const modal = document.querySelector(".modal");
const openModal = () => {
  modal.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);

// 구매방법선택 닫기
const overlay = modal.querySelector(".modal__overlay");
const closeModal = () => {
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);

// 구매방법선택 후, 결제버튼 클릭
const payBtn = document.getElementById("btn-payment");
const submitPayment = () => {
  const v = document.querySelector(`input[name="payment-radio"]:checked`).value;
  console.log(`User want to use ${v} as payment`);
};
payBtn.addEventListener("click", submitPayment);
