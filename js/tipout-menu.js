function openTipoutFormat(role){
    const scrollToId = document.getElementById(`${role}-tipout`);
    const roleLayer = document.getElementById(`${role}-role-layer`);
    const roleTipoutFormat = document.getElementById(`${role}-tipout-format`);
    const roleSelected = document.getElementById(`${role}-role-selected`);
    const inverseRole = role === 'bartender' ? 'server' : 'bartender';
    const inverseRoleLayer = document.getElementById(`${inverseRole}-role-layer`);
    const inverseRoleTipoutFormat = document.getElementById(`${inverseRole}-tipout-format`);
    const inverseRoleSelected = document.getElementById(`${inverseRole}-role-selected`);
    const inverseRoleTipoutForm = document.forms[`${inverseRole}-tipout-menu-form`];
    const inverseRoleCalculatedTipoutForm = document.forms[`${inverseRole}-tipout-menu-form-calculated`];
    const inverseRoleTipoutFormatSelector = document.getElementById(`${inverseRole}-tipout-format-selector`);
    const inverseRoleTipoutMenu = document.getElementById(`${inverseRole}-tipout-menu`);
    const inverseRoleCalculatedTipoutMenu = document.getElementById(`${inverseRole}-tipout-menu-calculated`);
    roleLayer.style.transform = 'translateY(-100%)';
    roleTipoutFormat.style.display = 'flex';
    setTimeout(function () {
      roleSelected.style.opacity = '1';
      roleSelected.style.transition = 'opacity 1s';
      roleTipoutFormat.style.opacity = '1';
      roleTipoutFormat.style.transition = 'opacity 1s';
    }, 100);
    inverseRoleTipoutForm.reset();
    inverseRoleCalculatedTipoutForm.reset();
    inverseRoleTipoutFormatSelector.selectedIndex = 0;
    inverseRoleLayer.style.transform = 'translateY(100%)';
    inverseRoleTipoutFormat.style.opacity = '0';
    inverseRoleTipoutMenu.style.opacity = '0';
    inverseRoleSelected.style.opacity = '0';
    setTimeout(function () {
      inverseRoleTipoutFormat.style.display = 'none';
      inverseRoleTipoutMenu.style.display = 'none';
      inverseRoleCalculatedTipoutMenu.style.display = 'none';
      scrollToId.scrollIntoView({block: "center" });
    }, 500);
}

function openTipoutMenu(role){
    const scrollToId = document.getElementById(`${role}-tipout-menu`);
    const selectedItem = document.getElementById(`${role}-tipout-format-selector`).value;
    const roleTipoutForm = document.forms[`${role}-tipout-menu-form`];
    const roleCalculatedTipoutForm = document.forms[`${role}-tipout-menu-form-calculated`];
    const roleTipoutMenu = document.getElementById(`${role}-tipout-menu`);
    const roleCalculatedTipoutMenu = document.getElementById(`${role}-tipout-menu-calculated`);
    const inverseRole = role === 'bartender' ? 'server' : 'bartender';
    const inverseRoleTipoutMenu = document.getElementById(`${inverseRole}-tipout-menu`);
    roleTipoutForm.reset();
    roleCalculatedTipoutForm.reset();
    if(selectedItem == 'fids'){
        if(role == 'bartender'){
            document.getElementById('bartender-how-barback-tipout').querySelector('select').selectedIndex = 1;
            document.getElementById('bartender-barback-tipout-percentage').querySelector('select').selectedIndex = 2;
            document.getElementById('bartender-how-foodrunner-tipout').querySelector('select').selectedIndex = 1;
            document.getElementById('bartender-foodrunner-tipout-percentage').querySelector('select').selectedIndex = 1;    
        } else {
            document.getElementById('server-how-busser-tipout').querySelector('select').selectedIndex = 1;
            document.getElementById('server-busser-tipout-percentage').querySelector('select').selectedIndex = 1;
            document.getElementById('server-how-foodrunner-tipout').querySelector('select').selectedIndex = 1;
            document.getElementById('server-foodrunner-tipout-percentage').querySelector('select').selectedIndex = 1;
            document.getElementById('server-how-bartender-tipout').querySelector('select').selectedIndex = 1;
            document.getElementById('server-bartender-tipout-percentage').querySelector('select').selectedIndex = 1;    
        }
    }
    roleTipoutMenu.style.display = 'flex';
    setTimeout(function () {
        roleTipoutMenu.style.opacity = '1';
        roleTipoutMenu.style.transition = 'opacity 1s';
    }, 100);
    inverseRoleTipoutMenu.style.opacity = '0';
    roleCalculatedTipoutMenu.style.opacity = '0';
    setTimeout(function () {
        inverseRoleTipoutMenu.style.display = 'none';
        roleCalculatedTipoutMenu.style.display = 'none';
        scrollToId.scrollIntoView();
    }, 500);
}

function handleFormChange(role, event){
    const calculatedTipoutMenu = document.getElementById(`${role}-tipout-menu-calculated`);
    const calculatedTipoutForm = document.forms[`${role}-tipout-menu-form-calculated`];
    if (calculatedTipoutMenu.style.display === 'flex') {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
            calculatedTipoutForm.reset();
            calculatedTipoutMenu.style.opacity = '0';
            setTimeout(function () {
                calculatedTipoutMenu.style.display = 'none';
            }, 500);
        }
    } 
}

function validateServerSales(){
    return;
}

