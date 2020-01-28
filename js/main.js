function toggle() {
    const monthlyPrice = document.getElementsByClassName('monthly');
    const annualPrice = document.getElementsByClassName('annually');
  
    for (let i = 0; i < annualPrice.length; i++) {
      annualPrice[i].classList.toggle('hidden');
      monthlyPrice[i].classList.toggle('hidden');
    }
}