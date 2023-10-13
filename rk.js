var settingsApp = document.querySelector('.settings');
var settingsCog = document.querySelector('.settings-cog');
var homeButton = document.querySelector('.navigation-bar__home');
var backdrop = document.querySelector('.backdrop');
var notificationPanel = document.querySelector('.notification-panel');
var statusBar = document.querySelector('.status-bar');
var wifiStatusBarIcon = document.querySelector('.status-bar__icon--wifi');
var navigationBar = document.querySelector('.navigation-bar');
var navigationBackButton = document.querySelector('.navigation-bar__back');
var navigationHomeButton = document.querySelector('.navigation-bar__home');



var airplaneIcon = document.querySelector('.i1');
var cellularIcon = document.querySelector('.i2');
var wifiIcon = document.querySelector('.i3');
var bluetoothIcon = document.querySelector('.i4');
var dndIcon = document.querySelector('.i5');
var orientationLockIcon = document.querySelector('.i6');


function enableBackButtonLight() {
  navigationBackButton.classList.add('navigation-bar__back--light');
}
function disableBackButtonLight() {
  navigationBackButton.classList.remove('navigation-bar__back--light');
}

function enableBackButtonDark() {
  navigationBackButton.classList.add('navigation-bar__back--dark');
}
function disableBackButtonDark() {
  navigationBackButton.classList.remove('navigation-bar__back--dark');
}



function enableHomeButtonLight () {
  navigationHomeButton.classList.add('navigation-bar__home--light');
}
function disableHomeButtonLight () {
  navigationHomeButton.classList.remove('navigation-bar__home--light');
}

function enableHomeButtonDark () {
  navigationHomeButton.classList.add('navigation-bar__home--dark');
}
function disableHomeButtonDark () {
  navigationHomeButton.classList.remove('navigation-bar__home--dark');
}



function enableStatusBarLight() {
  statusBar.classList.add('status-bar--light');
}
function disableStatusBarLight() {
  statusBar.classList.remove('status-bar--light');
}

function enableStatusBarDark() {
  statusBar.classList.add('status-bar--dark');
}
function disableStatusBarDark() {
  statusBar.classList.remove('status-bar--dark');
}


function openSettings() {
  settingsApp.classList.add('settings__active');
  navigationBar.classList.add('navigation-bar--light');
  enableBackButtonDark();
  enableHomeButtonDark();
  enableStatusBarLight();
}

function homeButtonToggled() {
  notificationPanel.classList.remove('notification-panel--active');
  backdrop.classList.remove('backdrop--active');
  navigationBar.classList.remove('navigation-bar--light');
  settingsApp.classList.remove('settings__active');
  disableBackButtonLight();
  disableBackButtonDark();
  disableHomeButtonDark();
  disableStatusBarDark();
  disableStatusBarLight();
}

function statusBarToggled() {
  notificationPanel.classList.add('notification-panel--active');
  backdrop.classList.add('backdrop--active');
  disableStatusBarLight();
  enableStatusBarDark();
  disableBackButtonDark();
  enableBackButtonLight();
  disableHomeButtonDark();
}



backdrop.addEventListener('click', function() {
  notificationPanel.classList.remove('notification-panel--active');
  backdrop.classList.remove('backdrop--active');
  
  
  
  if (settingsApp.classList.contains('settings__active')) {
    disableStatusBarDark();
    enableStatusBarLight();
    disableBackButtonLight();
    enableBackButtonDark();
    enableHomeButtonDark();
  } else {
    disableStatusBarDark();
    disableBackButtonLight();
  }
});

navigationBackButton.addEventListener('click', function() {
  if (settingsApp.classList.contains('settings__active') && navigationBackButton.classList.contains('navigation-bar__back--light')) {
    notificationPanel.classList.remove('notification-panel--active');
    backdrop.classList.remove('backdrop--active');
    disableStatusBarDark();
    enableStatusBarLight();
    disableBackButtonLight();
    enableBackButtonDark();
    enableHomeButtonDark();
  } else if (navigationBackButton.classList.contains('navigation-bar__back--dark')) {
    homeButtonToggled();
  } else {
    notificationPanel.classList.remove('notification-panel--active');
    backdrop.classList.remove('backdrop--active');
    disableStatusBarDark();
    disableBackButtonLight();
  }
});


arrRes = [0,1,2];

function resetArray() {
  arrRes[0] = 0;
  arrRes[1] = 0;
  arrRes[2] = 0;
}

airplaneIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  wifiStatusBarIcon.classList.add('hidden');
  

  if (cellularIcon.classList.contains('active')) {
    cellularIcon.classList.remove('active');
    arrRes[0] = 2;
  }
  if (arrRes[0] == 2 && !this.classList.contains('active')) {
    cellularIcon.classList.add('active');
    arrRes[0] = 0;
  }
  
  if (wifiIcon.classList.contains('active')) {
    wifiIcon.classList.remove('active');
    wifiStatusBarIcon.classList.add('hidden');
    arrRes[1] = 3;
  }
  if (arrRes[1] == 3 && !this.classList.contains('active')) {
    wifiIcon.classList.add('active');
    wifiStatusBarIcon.classList.remove('hidden');
    arrRes[1] = 0;
  }

  if (bluetoothIcon.classList.contains('active')) {
    bluetoothIcon.classList.remove('active');
    arrRes[2] = 4;
  }
  if (arrRes[2] == 4 && !this.classList.contains('active')) {
    bluetoothIcon.classList.add('active');
    arrRes[2] = 0;
  }
});

cellularIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  airplaneIcon.classList.remove('active');
  resetArray();
});

wifiIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  wifiStatusBarIcon.classList.toggle('hidden');
  airplaneIcon.classList.remove('active');
  resetArray();
});

bluetoothIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  airplaneIcon.classList.remove('active');
  resetArray();
});

dndIcon.addEventListener('click', function() {
  this.classList.toggle('active');
});

orientationLockIcon.addEventListener('click', function() {
  this.classList.toggle('active');
});

settingsCog.addEventListener('click', openSettings);
homeButton.addEventListener('click', homeButtonToggled);
statusBar.addEventListener('click', statusBarToggled);