const months = ["tammi", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];

const weekdays = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

const kesäkuu = 5;
const year = 2024;
const daysInJune = getDaysInMonth(kesäkuu, year);
const juneDaysArray = [];

for (let day = 1; day <= daysInJune; day++) {
  const dateObj = new Date(year, kesäkuu, day);
  const weekday = weekdays[dateObj.getDay()];
  juneDaysArray.push({
    date: `${weekday} ${day}.${kesäkuu + 1}.${year}`,
    merkinta: ''
  });
}

const paiva = juneDaysArray;

const tbody = document.querySelector('#data-table tbody');
const totalSumElement = document.getElementById('total-sum');


function updateEntries() {
 
  paiva[0].merkinta = -5; 
  paiva[1].merkinta = 10;
  paiva[2].merkinta = 10; 
  paiva[3].merkinta = 10;
  paiva[4].merkinta = 10; 
  paiva[5].merkinta = 10;
  paiva[6].merkinta = 10; 
  paiva[7].merkinta = 4;
  paiva[8].merkinta = 10; 
  paiva[9].merkinta = 10;
  paiva[10].merkinta = 10;
  paiva[11].merkinta = 10;
  paiva[12].merkinta = 15;
  paiva[13].merkinta = 10;
  paiva[14].merkinta = 10;
  paiva[15].merkinta = 10;
  paiva[16].merkinta = 10;
  paiva[17].merkinta = 10;
  paiva[18].merkinta = 9;
  paiva[19].merkinta = 10;
  paiva[20].merkinta = 10;
  paiva[21].merkinta = 0;
  paiva[22].merkinta = 5; 

 

}


function updateTotalSum() {
  let total = 0;
  paiva.forEach(row => {
    const entryValue = parseFloat(row.merkinta) || 0;
    total += entryValue;
  });
  totalSumElement.textContent = `Kesäkuussa yhteensä: ${total}`;
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
