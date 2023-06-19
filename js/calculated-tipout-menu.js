function calcTipout(role){
  const totalSales = parseFloat(document.getElementById(`${role}-total-sales`).querySelector('input').value) || 0;
  const foodSales = parseFloat(document.getElementById(`${role}-total-foodsales`).querySelector('input').value) || 0;
  const drinkSales = parseFloat(document.getElementById(`${role}-total-drinksales`).querySelector('input').value) || 0;
  const calculatedTipoutMenu = document.getElementById(`${role}-tipout-menu-calculated`); 
  const tipoutRoleMapping = {
    bartender: {
      barback: ['bartender-how-barback-tipout', 'bartender-barback-tipout-percentage'],
      foodrunner: ['bartender-how-foodrunner-tipout', 'bartender-foodrunner-tipout-percentage'],
    },
    server: {
      busser: ['server-how-busser-tipout', 'server-busser-tipout-percentage'],
      foodrunner: ['server-how-foodrunner-tipout', 'server-foodrunner-tipout-percentage'],
      bartender: ['server-how-bartender-tipout', 'server-bartender-tipout-percentage'],
    },
  };

  Object.keys(tipoutRoleMapping[role]).forEach(function(subRole){
    const tipoutSalesType = document.getElementById(tipoutRoleMapping[role][subRole][0]).querySelector('select').value;
    const tipoutSales = tipoutSalesType === 'total' ? totalSales : (tipoutSalesType === 'food' ? foodSales : drinkSales);
    const tipoutPercentage = parseFloat(document.getElementById(tipoutRoleMapping[role][subRole][1]).querySelector('select').value).toFixed(2);
    const tipoutTypeLabel = document.getElementById(`${role}-${subRole}-tipout-sales-type`);
    const tipoutLine1 = document.getElementById(`${role}-${subRole}-tipout-calculated-percent1`);
    const tipoutLine2 = document.getElementById(`${role}-${subRole}-tipout-calculated-percent2`);
    const tipoutLine3 = document.getElementById(`${role}-${subRole}-tipout-calculated-final`);
    tipoutTypeLabel.textContent = (tipoutSalesType === 'total' ? 'Total Sales: ' : (tipoutSalesType === 'food' ? 'Food Sales: ' : 'Drink Sales: ')) + "$" + tipoutSales;
    tipoutLine1.querySelector('label').textContent = 'x ' + tipoutPercentage;
    tipoutLine1.querySelector('input').value = (tipoutSales * tipoutPercentage).toFixed(2);
    if(tipoutLine2 !== null){
      tipoutLine2.querySelector('label').textContent = 'x ' + tipoutPercentage;
      tipoutLine2.querySelector('input').value = (tipoutSales * tipoutPercentage * tipoutPercentage).toFixed(2);
      tipoutLine3.querySelector('input').value = (tipoutSales * tipoutPercentage * tipoutPercentage).toFixed(0);
    } else {
      tipoutLine3.querySelector('label').textContent = 'Tipout:';
      tipoutLine3.querySelector('input').value = (tipoutSales * tipoutPercentage).toFixed(0);
    }
  });

  calculatedTipoutMenu.style.display = 'flex';
  setTimeout(function() {
    calculatedTipoutMenu.style.opacity = '1';
    calculatedTipoutMenu.style.transition = 'opacity 1s';
    calculatedTipoutMenu.scrollIntoView();
  }, 500);
}

