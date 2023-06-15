function calcBartenderTipout() {
  const totalSales = parseFloat(document.getElementById('bartender-total-sales').querySelector('input').value);
  const foodSales = parseFloat(document.getElementById('bartender-total-foodsales').querySelector('input').value);
  const barbackTipoutPercentage = parseFloat(document.getElementById('bartender-barback-tipout-percentage').querySelector('select').value).toFixed(2);
  const foodrunnerTipoutPercentage = parseFloat(document.getElementById('bartender-foodrunner-tipout-percentage').querySelector('select').value).toFixed(2);
  const barbackTipoutLine1 = document.getElementById('bartender-barback-tipout-calculated-percent1');
  const barbackTipoutLine2 = document.getElementById('bartender-barback-tipout-calculated-percent2');
  const barbackTipoutLine3 = document.getElementById('bartender-barback-tipout-calculated-final');
  const foodrunnerTipoutLine1 = document.getElementById('bartender-foodrunner-tipout-calculated-percent1');
  const foodrunnerTipoutLine2 = document.getElementById('bartender-foodrunner-tipout-calculated-percent2');
  const foodrunnerTipoutLine3 = document.getElementById('bartender-foodrunner-tipout-calculated-final');
  const requiredFields = bartenderTipoutForm.querySelectorAll('[required]');
  for (let field of requiredFields) {
      if (field.value.trim() === '')
          return;
  }
  bartenderCalcuatedTipoutMenu.style.display = 'flex';
  setTimeout(function() {
      bartenderCalcuatedTipoutMenu.style.opacity = '1';
      bartenderCalcuatedTipoutMenu.style.transition = 'opacity 1s';
      document.getElementById('bartender-tipout-menu-calculated').scrollIntoView();
  }, 500);
  barbackTipoutLine1.querySelector('label').textContent = 'x ' + barbackTipoutPercentage;
  barbackTipoutLine1.querySelector('input').value = (totalSales * barbackTipoutPercentage).toFixed(2);
  barbackTipoutLine2.querySelector('label').textContent = 'x ' + barbackTipoutPercentage;
  barbackTipoutLine2.querySelector('input').value = (totalSales * barbackTipoutPercentage * barbackTipoutPercentage).toFixed(2);
  barbackTipoutLine3.querySelector('input').value = (totalSales * barbackTipoutPercentage * barbackTipoutPercentage).toFixed(0);
  foodrunnerTipoutLine1.querySelector('label').textContent = 'x ' + foodrunnerTipoutPercentage;
  foodrunnerTipoutLine1.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage).toFixed(2);
  foodrunnerTipoutLine2.querySelector('label').textContent = 'x ' + foodrunnerTipoutPercentage;
  foodrunnerTipoutLine2.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage * foodrunnerTipoutPercentage).toFixed(2);
  foodrunnerTipoutLine3.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage * foodrunnerTipoutPercentage).toFixed(0);
}

function calcServerTipout() {
  const totalSales = parseFloat(document.getElementById('server-total-sales').querySelector('input').value) || 0;
  const foodSales = parseFloat(document.getElementById('server-total-foodsales').querySelector('input').value) || 0;
  const drinkSales = parseFloat(document.getElementById('server-total-drinksales').querySelector('input').value) || 0;
  const busserTipoutPercentage = parseFloat(document.getElementById('server-busser-tipout-percentage').querySelector('select').value).toFixed(2);
  const foodrunnerTipoutPercentage = parseFloat(document.getElementById('server-foodrunner-tipout-percentage').querySelector('select').value).toFixed(2);
  const bartenderTipoutPercentage = parseFloat(document.getElementById('server-bartender-tipout-percentage').querySelector('select').value).toFixed(2);
  const busserTipoutLine1 = document.getElementById('server-busser-tipout-calculated-percent1');
  const busserTipoutLine2 = document.getElementById('server-busser-tipout-calculated-percent2');
  const busserTipoutLine3 = document.getElementById('server-busser-tipout-calculated-final');
  const foodrunnerTipoutLine1 = document.getElementById('server-foodrunner-tipout-calculated-percent1');
  const foodrunnerTipoutLine2 = document.getElementById('server-foodrunner-tipout-calculated-percent2');
  const foodrunnerTipoutLine3 = document.getElementById('server-foodrunner-tipout-calculated-final');
  const bartenderTipoutLine1 = document.getElementById('server-bartender-tipout-calculated-percent');
  const bartenderTipoutLine2 = document.getElementById('server-bartender-tipout-calculated-final');
  const requiredFields = serverTipoutForm.querySelectorAll('[required]');
  for (let field of requiredFields) {
      if (field.value.trim() === '')
          return;
  }
  serverCalcuatedTipoutMenu.style.display = 'flex';
  setTimeout(function() {
      serverCalcuatedTipoutMenu.style.opacity = '1';
      serverCalcuatedTipoutMenu.style.transition = 'opacity 1s';
      document.getElementById('server-tipout-menu-calculated').scrollIntoView();
  }, 500);
  busserTipoutLine1.querySelector('label').textContent = 'x ' + busserTipoutPercentage;
  busserTipoutLine1.querySelector('input').value = (totalSales * busserTipoutPercentage).toFixed(2);
  busserTipoutLine2.querySelector('label').textContent = 'x ' + busserTipoutPercentage;
  busserTipoutLine2.querySelector('input').value = (totalSales * busserTipoutPercentage * busserTipoutPercentage).toFixed(2);
  busserTipoutLine3.querySelector('input').value = (totalSales * busserTipoutPercentage * busserTipoutPercentage).toFixed(0);
  foodrunnerTipoutLine1.querySelector('label').textContent = 'x ' + foodrunnerTipoutPercentage;
  foodrunnerTipoutLine1.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage).toFixed(2);
  foodrunnerTipoutLine2.querySelector('label').textContent = 'x ' + foodrunnerTipoutPercentage;
  foodrunnerTipoutLine2.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage * foodrunnerTipoutPercentage).toFixed(2);
  foodrunnerTipoutLine3.querySelector('input').value = (foodSales * foodrunnerTipoutPercentage * foodrunnerTipoutPercentage).toFixed(0);
  bartenderTipoutLine1.querySelector('label').textContent = 'x ' + bartenderTipoutPercentage;
  bartenderTipoutLine1.querySelector('input').value = (drinkSales * bartenderTipoutPercentage).toFixed(2);
  bartenderTipoutLine2.querySelector('input').value = (drinkSales * bartenderTipoutPercentage).toFixed(2);
}
