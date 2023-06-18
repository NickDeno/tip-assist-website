const bartenderRole = document.getElementById('bartender-role');
const bartenderRoleSelected = document.getElementById('bartender-role-selected');
const bartenderRoleLayer = document.getElementById('bartender-role-layer');
const bartenderTipoutFormat = document.getElementById('bartender-tipout-format');
const bartenderTipoutFormatSelector = document.getElementById('bartender-tipout-format-selector');
const bartenderTipoutMenu = document.getElementById('bartender-tipout-menu');
const bartenderCalcuatedTipoutMenu = document.getElementById('bartender-tipout-menu-calculated');
const bartenderTipoutForm = document.forms['bartender-tipout-menu-form'];
const bartenderCalculatedTipoutForm = document.forms['bartender-tipout-menu-form-calculated'];

const serverRole = document.getElementById('server-role');
const serverRoleSelected = document.getElementById('server-role-selected');
const serverRoleLayer = document.getElementById('server-role-layer');
const serverTipoutFormat = document.getElementById('server-tipout-format');
const serverTipoutFormatSelector = document.getElementById('server-tipout-format-selector');
const serverTipoutMenu = document.getElementById('server-tipout-menu');
const serverCalcuatedTipoutMenu = document.getElementById('server-tipout-menu-calculated');
const serverTipoutForm = document.forms['server-tipout-menu-form'];
const serverCalculatedTipoutForm = document.forms['server-tipout-menu-form-calculated'];

function openBartenderTipoutFormat () {
    bartenderRoleLayer.style.transform = 'translateY(-100%)';
    bartenderTipoutFormat.style.display = 'flex';
    setTimeout(function () {
      bartenderRoleSelected.style.opacity = '1';
      bartenderRoleSelected.style.transition = 'opacity 1s';
      bartenderTipoutFormat.style.opacity = '1';
      bartenderTipoutFormat.style.transition = 'opacity 1s';
    }, 100);
    serverTipoutForm.reset();
    serverCalculatedTipoutForm.reset();
    serverTipoutFormatSelector.selectedIndex = 0;
    serverRoleLayer.style.transform = 'translateY(100%)';
    serverTipoutFormat.style.opacity = '0';
    serverTipoutMenu.style.opacity = '0';
    serverRoleSelected.style.opacity = '0';
    setTimeout(function () {
      serverTipoutFormat.style.display = 'none';
      serverTipoutMenu.style.display = 'none';
      serverCalcuatedTipoutMenu.style.display = 'none';
      document.getElementById('bartender-tipout').scrollIntoView({block: "center" });
    }, 500);
}

function openBartenderTipoutMenu() {
    bartenderTipoutForm.reset();
    bartenderCalculatedTipoutForm.reset();
    const selectedItem = bartenderTipoutFormatSelector.value;
    if(selectedItem == 'fids'){
        document.getElementById('bartender-how-barback-tipout').querySelector('select').selectedIndex = 1;
        document.getElementById('bartender-barback-tipout-percentage').querySelector('select').selectedIndex = 2;
        document.getElementById('bartender-how-foodrunner-tipout').querySelector('select').selectedIndex = 1;
        document.getElementById('bartender-foodrunner-tipout-percentage').querySelector('select').selectedIndex = 1;
    }
    bartenderTipoutMenu.style.display = 'flex';
    setTimeout(function () {
        bartenderTipoutMenu.style.opacity = '1';
        bartenderTipoutMenu.style.transition = 'opacity 1s';
    }, 100);
    serverTipoutMenu.style.opacity = '0';
    bartenderCalcuatedTipoutMenu.style.opacity = '0';
    setTimeout(function () {
        serverTipoutMenu.style.display = 'none';
        bartenderCalcuatedTipoutMenu.style.display = 'none';
        document.getElementById('bartender-tipout-menu').scrollIntoView();
    }, 500);
    }

function handleBartenderFormChange(event){
    const target = event.target;
    if(bartenderCalcuatedTipoutMenu.style.display == 'flex'){
        if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
        bartenderCalculatedTipoutForm.reset();
        bartenderCalcuatedTipoutMenu.style.opacity = '0';
        setTimeout(function () {
            bartenderCalcuatedTipoutMenu.style.display = 'none';
        }, 500); 
        }
    }
}

function openServerTipoutFormat() {
    serverRoleLayer.style.transform = 'translateY(-100%)';
    serverTipoutFormat.style.display = 'flex';
    setTimeout(function () {
        serverRoleSelected.style.opacity = '1';
        serverRoleSelected.style.transition = 'opacity 1s';
        serverTipoutFormat.style.opacity = '1';
        serverTipoutFormat.style.transition = 'opacity 1s';
    }, 100);
    bartenderTipoutForm.reset();
    bartenderCalculatedTipoutForm.reset();
    bartenderTipoutFormatSelector.selectedIndex = 0;
    bartenderRoleLayer.style.transform = 'translateY(100%)';
    bartenderTipoutFormat.style.opacity = '0';
    bartenderTipoutMenu.style.opacity = '0';
    bartenderRoleSelected.style.opacity = '0';
    setTimeout(function () {
        bartenderTipoutFormat.style.display = 'none';
        bartenderTipoutMenu.style.display = 'none';
        bartenderCalcuatedTipoutMenu.style.display = 'none';
        document.getElementById('server-tipout').scrollIntoView({block: "center"});
    }, 500);
}

function openServerTipoutMenu() {
    serverTipoutForm.reset();
    serverCalculatedTipoutForm.reset();
    const selectedItem = serverTipoutFormatSelector.value;
    if(selectedItem == 'fids'){
        document.getElementById('server-how-busser-tipout').querySelector('select').selectedIndex = 1;
        document.getElementById('server-busser-tipout-percentage').querySelector('select').selectedIndex = 1;
        document.getElementById('server-how-foodrunner-tipout').querySelector('select').selectedIndex = 1;
        document.getElementById('server-foodrunner-tipout-percentage').querySelector('select').selectedIndex = 1;
        document.getElementById('server-how-bartender-tipout').querySelector('select').selectedIndex = 1;
        document.getElementById('server-bartender-tipout-percentage').querySelector('select').selectedIndex = 1;
    }
    serverTipoutMenu.style.display = 'flex';
    setTimeout(function () {
        serverTipoutMenu.style.opacity = '1';
        serverTipoutMenu.style.transition = 'opacity 1s';
    }, 100);
    bartenderTipoutMenu.style.opacity = '0';
    serverCalcuatedTipoutMenu.style.opacity = '0';
    setTimeout(function () {
        bartenderTipoutMenu.style.display = 'none';
        serverCalcuatedTipoutMenu.style.display = 'none';
        document.getElementById('server-tipout-menu').scrollIntoView();
    }, 500);
}

function handleServerFormChange(event){
    const target = event.target;
    if(serverCalcuatedTipoutMenu.style.display == 'flex'){
        if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
        serverCalculatedTipoutForm.reset();
        serverCalcuatedTipoutMenu.style.opacity = '0';
        setTimeout(function () {
            serverCalcuatedTipoutMenu.style.display = 'none';
        }, 500); 
        }
    }
}

function validateServerSales(){
    return; //still gotta figure this shit out
    const totalSalesInput = document.getElementById('server-total-sales').querySelector('input');
    const foodSalesInput = document.getElementById('server-total-foodsales').querySelector('input');
    const drinkSalesInput = document.getElementById('server-total-drinksales').querySelector('input');
    const totalSales = parseFloat(totalSalesInput.value);
    const foodSales = parseFloat(foodSalesInput.value);
    const drinkSales = parseFloat(drinkSalesInput.value);
    if (!isNaN(totalSales) && !isNaN(foodSales) && !isNaN(drinkSales)) {
        foodSalesInput.value = totalSales-drinkSales;
        totalSalesInput.value = foodSales+drinkSales;
        drinkSalesInput.value = totalSales-foodSales;
    } else if (!isNaN(totalSales) && !isNaN(drinkSales)) {
        const calculatedFoodSales = totalSales - drinkSales;
        foodSalesInput.value = isNaN(calculatedFoodSales) ? '' : calculatedFoodSales.toFixed(2);
    } else if (!isNaN(foodSales) && !isNaN(drinkSales)) {
        const calculatedTotalSales = foodSales + drinkSales;
        totalSalesInput.value = isNaN(calculatedTotalSales) ? '' : calculatedTotalSales.toFixed(2);
    } else if (!isNaN(totalSales) && !isNaN(foodSales)) {
        const calculatedDrinkSales = totalSales - foodSales;
        drinkSalesInput.value = isNaN(calculatedDrinkSales) ? '' : calculatedDrinkSales.toFixed(2);
    }
}

