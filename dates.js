const months = ["tammi", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];

const weekdays = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

const heinakuu = 6;
const year = 2024;
const daysInJune = getDaysInMonth(heinakuu, year);
const juneDaysArray = [];

for (let day = 1; day <= daysInJune; day++) {
  const dateObj = new Date(year, heinakuu, day);
  const weekday = weekdays[dateObj.getDay()];
  juneDaysArray.push({
    date: `${weekday} ${day}.${heinakuu + 1}.${year}`,
    merkinta: ''
  });
}

const paiva = juneDaysArray;

const tbody = document.querySelector('#data-table tbody');
const totalSumElement = document.getElementById('total-sum');


function updateEntries() {
 
  paiva[0].merkinta = 10; 
  paiva[1].merkinta = 10;

 
 

}


function updateTotalSum() {
  let total = 0;
  paiva.forEach(row => {
    const entryValue = parseFloat(row.merkinta) || 0;
    total += entryValue;
  });
  totalSumElement.textContent = `Heinäkuussa yhteensä: ${total}`;
}


function updateTableContent() {
  tbody.innerHTML = '';
  paiva.forEach(row => {
    const tr = document.createElement('tr');
    const tdDate = document.createElement('td');
    tdDate.textContent = row.date;
    const tdEntry = document.createElement('td');
    tdEntry.style.textAlign = 'center';
    tdEntry.textContent = row.merkinta;
    tr.appendChild(tdDate);
    tr.appendChild(tdEntry);
    tbody.appendChild(tr);
  });
}


updateEntries();
updateTableContent();
updateTotalSum();
