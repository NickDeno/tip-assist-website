function calcBartenderTipout() {
  const totalSales = parseFloat(document.getElementById('bartender-total-sales').querySelector('input').value) || 0;
  const foodSales = parseFloat(document.getElementById('bartender-total-foodsales').querySelector('input').value) || 0;
  const drinkSales = totalSales - foodSales;
  const barbackTipoutType = document.getElementById('bartender-how-barback-tipout').querySelector('select').value;
  const foodrunnerTipoutType = document.getElementById('bartender-how-foodrunner-tipout').querySelector('select').value;
  const barbackTipoutPercentage = parseFloat(document.getElementById('bartender-barback-tipout-percentage').querySelector('select').value).toFixed(2);
  const foodrunnerTipoutPercentage = parseFloat(document.getElementById('bartender-foodrunner-tipout-percentage').querySelector('select').value).toFixed(2);
  const barbackTipoutTypeLabel = document.getElementById('bartender-barback-tipout-sales-type');
  const barbackTipoutLine1 = document.getElementById('bartender-barback-tipout-calculated-percent1');
  const barbackTipoutLine2 = document.getElementById('bartender-barback-tipout-calculated-percent2');
  const barbackTipoutLine3 = document.getElementById('bartender-barback-tipout-calculated-final');
  const foodrunnerTipoutTypeLabel = document.getElementById('bartender-foodrunner-tipout-sales-type');
  const foodrunnerTipoutLine1 = document.getElementById('bartender-foodrunner-tipout-calculated-percent1');
  const foodrunnerTipoutLine2 = document.getElementById('bartender-foodrunner-tipout-calculated-percent2');
  const foodrunnerTipoutLine3 = document.getElementById('bartender-foodrunner-tipout-calculated-final');

  bartenderCalcuatedTipoutMenu.style.display = 'flex';
  setTimeout(function() {
      bartenderCalcuatedTipoutMenu.style.opacity = '1';
      bartenderCalcuatedTipoutMenu.style.transition = 'opacity 1s';
      document.getElementById('bartender-tipout-menu-calculated').scrollIntoView();
  }, 500);
  if (barbackTipoutType == 'total') {
    calculateAndSetTipout("Total Sales: ", barbackTipoutTypeLabel, barbackTipoutLine1, barbackTipoutLine2, barbackTipoutLine3, totalSales, barbackTipoutPercentage);
  } else if (barbackTipoutType == 'food') {
    calculateAndSetTipout("Food Sales: ", barbackTipoutTypeLabel, barbackTipoutLine1, barbackTipoutLine2, barbackTipoutLine3, foodSales, barbackTipoutPercentage);
  } else {
    calculateAndSetTipout("Drink Sales: ", barbackTipoutTypeLabel, barbackTipoutLine1, barbackTipoutLine2, barbackTipoutLine3, drinkSales, barbackTipoutPercentage);
  }
  if (foodrunnerTipoutType == 'total') {
    calculateAndSetTipout("Total Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, totalSales, foodrunnerTipoutPercentage);
  } else if (foodrunnerTipoutType == 'food') {
    calculateAndSetTipout("Food Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, foodSales, foodrunnerTipoutPercentage);
  } else {
    calculateAndSetTipout("Drink Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, drinkSales, foodrunnerTipoutPercentage);
  }
}

function calcServerTipout() {
  const totalSales = parseFloat(document.getElementById('server-total-sales').querySelector('input').value) || 0;
  const foodSales = parseFloat(document.getElementById('server-total-foodsales').querySelector('input').value) || 0;
  const drinkSales = parseFloat(document.getElementById('server-total-drinksales').querySelector('input').value) || 0;
  const busserTipoutType = document.getElementById('server-how-busser-tipout').querySelector('select').value;
  const foodrunnerTipoutType = document.getElementById('server-how-foodrunner-tipout').querySelector('select').value;
  const bartenderTipoutType = document.getElementById('server-how-bartender-tipout').querySelector('select').value;
  const busserTipoutPercentage = parseFloat(document.getElementById('server-busser-tipout-percentage').querySelector('select').value).toFixed(2);
  const foodrunnerTipoutPercentage = parseFloat(document.getElementById('server-foodrunner-tipout-percentage').querySelector('select').value).toFixed(2);
  const bartenderTipoutPercentage = parseFloat(document.getElementById('server-bartender-tipout-percentage').querySelector('select').value).toFixed(2);
  const busserTipoutTypeLabel = document.getElementById('server-busser-tipout-sales-type');
  const busserTipoutLine1 = document.getElementById('server-busser-tipout-calculated-percent1');
  const busserTipoutLine2 = document.getElementById('server-busser-tipout-calculated-percent2');
  const busserTipoutLine3 = document.getElementById('server-busser-tipout-calculated-final');
  const foodrunnerTipoutTypeLabel = document.getElementById('server-foodrunner-tipout-sales-type');
  const foodrunnerTipoutLine1 = document.getElementById('server-foodrunner-tipout-calculated-percent1');
  const foodrunnerTipoutLine2 = document.getElementById('server-foodrunner-tipout-calculated-percent2');
  const foodrunnerTipoutLine3 = document.getElementById('server-foodrunner-tipout-calculated-final');
  const bartenderTipoutTypeLabel = document.getElementById('server-bartender-tipout-sales-type');
  const bartenderTipoutLine1 = document.getElementById('server-bartender-tipout-calculated-percent');
  const bartenderTipoutLine2 = document.getElementById('server-bartender-tipout-calculated-final');

  serverCalcuatedTipoutMenu.style.display = 'flex';
  setTimeout(function() {
      serverCalcuatedTipoutMenu.style.opacity = '1';
      serverCalcuatedTipoutMenu.style.transition = 'opacity 1s';
      document.getElementById('server-tipout-menu-calculated').scrollIntoView();
  }, 500);
  if (busserTipoutType == 'total') {
    calculateAndSetTipout("Total Sales: ", busserTipoutTypeLabel, busserTipoutLine1, busserTipoutLine2, busserTipoutLine3, totalSales, busserTipoutPercentage);
  } else if (busserTipoutType == 'food') {
    calculateAndSetTipout("Food Sales: ", busserTipoutTypeLabel, busserTipoutLine1, busserTipoutLine2, busserTipoutLine3, foodSales, busserTipoutPercentage);
  } else {
    calculateAndSetTipout("Drink Sales: ", busserTipoutTypeLabel, busserTipoutLine1, busserTipoutLine2, busserTipoutLine3, drinkSales, busserTipoutPercentage);
  }
  if (foodrunnerTipoutType == 'total') {
    calculateAndSetTipout("Total Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, totalSales, foodrunnerTipoutPercentage);
  } else if (foodrunnerTipoutType == 'food') {
    calculateAndSetTipout("Food Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, foodSales, foodrunnerTipoutPercentage);
  } else {
    calculateAndSetTipout("Drink Sales: ", foodrunnerTipoutTypeLabel, foodrunnerTipoutLine1, foodrunnerTipoutLine2, foodrunnerTipoutLine3, drinkSales, foodrunnerTipoutPercentage);
  }
  if (bartenderTipoutType == 'total') {
    calculateAndSetTipout("Total Sales: ", bartenderTipoutTypeLabel, bartenderTipoutLine1, bartenderTipoutLine2, null, totalSales, bartenderTipoutPercentage);
  } else if (bartenderTipoutType == 'food') {
    calculateAndSetTipout("Food Sales: ", bartenderTipoutTypeLabel, bartenderTipoutLine1, bartenderTipoutLine2, null, foodSales, bartenderTipoutPercentage);
  } else {
    calculateAndSetTipout("Drink Sales: ", bartenderTipoutTypeLabel, bartenderTipoutLine1, bartenderTipoutLine2, null, drinkSales, bartenderTipoutPercentage);
  }
}

function calculateAndSetTipout(typeSales, label, line1, line2, line3, sales, tipoutPercentage) {
  label.textContent = typeSales + "$" + sales;
  line1.querySelector('label').textContent = 'x ' + tipoutPercentage;
  line1.querySelector('input').value = (sales * tipoutPercentage).toFixed(2);
  line2.querySelector('label').textContent = 'x ' + tipoutPercentage;
  if(line3 !== null){
    line2.querySelector('input').value = (sales * tipoutPercentage * tipoutPercentage).toFixed(2);
    line3.querySelector('input').value = (sales * tipoutPercentage * tipoutPercentage).toFixed(0);
  } else {
    line2.querySelector('input').value = (sales * tipoutPercentage).toFixed(2);
  }
}
