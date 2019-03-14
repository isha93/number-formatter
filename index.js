const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const bulan3digit = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
export function formatDate (date) {
  var dates = new Date(date);
  return dates.getDate() + ' ' + bulan[dates.getMonth()] + ' ' + dates.getFullYear();
}

export function formatDate3digit (date) {
  var dates = new Date(date);
  return dates.getDate() + ' ' + bulan3digit[dates.getMonth()] + ' ' + dates.getFullYear();
}

export function formatDatePlusDay (date) {
  var dates = new Date(date);
  dates.setDate(dates.getDate()+1);
  if (dates.getDate() < 10) {
    return '0' + dates.getDate() + ' ' + bulan[dates.getMonth()] + ' ' + dates.getFullYear();
  }
  else {
    return dates.getDate() + ' ' + bulan[dates.getMonth()] + ' ' + dates.getFullYear();
  }
}

export function formatDatePlusDay3digit (date) {
  var dates = new Date(date);
  dates.setDate(dates.getDate()+1);
  if (dates.getDate() < 10) {
    return '0' + dates.getDate() + ' ' + bulan3digit[dates.getMonth()] + ' ' + dates.getFullYear();
  }
  else {
    return dates.getDate() + ' ' + bulan3digit[dates.getMonth()] + ' ' + dates.getFullYear();
  }
}

export function getMenitDetik (date) {
  var dates = new Date(date);
  if (dates.getMinutes().toString().length < 2 && dates.getHours().toString().length < 2) {
    return '0'+dates.getHours() +'.0' + dates.getMinutes();
  }
  else if (dates.getMinutes().toString().length > 1 && dates.getHours().toString().length < 2) {
    return '0'+dates.getHours() +'.' + dates.getMinutes();
  }
  else if (dates.getMinutes().toString().length < 2 && dates.getHours().toString().length > 1) {
    return dates.getHours() +'.0' + dates.getMinutes();
  }
  else {
    return dates.getHours() +'.' + dates.getMinutes();
  }
}

export function getTimeDate (date) {
  var dates = new Date(date);
  return dates.getTime();
}

export function getLast25Days () {
  var today = new Date();
  var days25ago = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 25);
  return days25ago;
}
export function getTimerSeconds (date) {
  var dates = new Date(date);
  var dateNow = new Date();
  return (dates.getTime()/1000-dateNow.getTime()/1000);
}

export function formatNumber (num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function mathRound (num) {
  return Math.round(num * 100)/100;
}

export function downSizePrice (qty, min_order, price) {
  let addtionalQuantity = qty % 1;
  let fixQuantity = Math.floor(qty);
  let downSizePrice = 0;
  let totalPrice = price * qty;

  const qtyIteration = addtionalQuantity / min_order;

  if (addtionalQuantity != 0 && min_order === 0.1) {
    downSizePrice = price * 0.1;
    let addtionalPrice = (downSizePrice + (downSizePrice * 0.2)) * qtyIteration;
    let fixPrice = price * fixQuantity;
    totalPrice = fixPrice + addtionalPrice;
  }
  if (addtionalQuantity != 0 && min_order === 0.2) {
    downSizePrice = price * 0.2;
    let addtionalPrice = (downSizePrice + (downSizePrice * 0.2)) * qtyIteration;
    let fixPrice = price * fixQuantity;
    totalPrice = fixPrice + addtionalPrice;
  }
  if (addtionalQuantity != 0 && min_order === 0.25) {
    downSizePrice = price * 0.25;
    let addtionalPrice = (downSizePrice + (downSizePrice * 0.2)) * qtyIteration;
    let fixPrice = price * fixQuantity;
    totalPrice = fixPrice + addtionalPrice;
  }
  if (addtionalQuantity != 0 && min_order === 0.5) {
    downSizePrice = price * 0.5;
    let addtionalPrice = downSizePrice + (downSizePrice * 0.1);
    let fixPrice = price * fixQuantity;
    totalPrice = fixPrice + addtionalPrice;
  }
  return Math.round(totalPrice);
}