const tableBody = document.getElementById('table-body');


const data = [
  { paivays: "Lauantai 1.6.2024 kiukuttelu", pisteet: -5 },
  

];


function createTableRows(data) {
  data.forEach(entry => {
    const tr = document.createElement('tr');
    const tdDate = document.createElement('td');
    const tdPoints = document.createElement('td');
    tdDate.textContent = entry.paivays;
    tdPoints.textContent = entry.pisteet;
    tr.appendChild(tdDate);
    tr.appendChild(tdPoints);
    tableBody.appendChild(tr);
  });
}

createTableRows(data);
