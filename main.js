document.addEventListener('DOMContentLoaded', function () {

    const kysymys1 = { kysymys: "Kysymys 1", aanet: [99, 300] };
    const kysymys2 = { kysymys: "Kysymys 2", aanet: [40, 150] };
    const kysymys3 = { kysymys: "Kysymys 3", aanet: [40, 100] };

    const saavutetutPisteet1 = kysymys1.aanet[0];
    const kokonaisPisteet1 = kysymys1.aanet[1];
    const saavutetutPisteet2 = kysymys2.aanet[0];
    const kokonaisPisteet2 = kysymys2.aanet[1];
    const saavutetutPisteet3 = kysymys3.aanet[0];
    const kokonaisPisteet3 = kysymys3.aanet[1];

    const aanet1_1 = kokonaisPisteet1 > 0 ? (saavutetutPisteet1 / kokonaisPisteet1 * 100).toFixed(1) : 0;
    const aanet1_2 = kokonaisPisteet2 > 0 ? (saavutetutPisteet2 / kokonaisPisteet2 * 100).toFixed(1) : 0;
    const aanet1_3 = kokonaisPisteet3 > 0 ? (saavutetutPisteet3 / kokonaisPisteet3 * 100).toFixed(1) : 0;

    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    if (bar1) {
        bar1.style.width = `${aanet1_1}%`;
        bar1.style.backgroundColor = `linear-gradient(to right, #4CAF50 ${aanet1_1}%, #ffffff ${aanet1_1}%)`;
        const points1 = document.getElementById('points1');
        if (points1) {
            points1.innerText = `Pisteet ${saavutetutPisteet1} / ${kokonaisPisteet1}`;
        }
    }

    if (bar2) {
        bar2.style.width = `${aanet1_2}%`;
        bar2.style.backgroundColor = `linear-gradient(to right, #4CAF50 ${aanet1_2}%, #ffffff ${aanet1_2}%)`;
        const points2 = document.getElementById('points2');
        if (points2) {
            points2.innerText = `Pisteet ${saavutetutPisteet2} / ${kokonaisPisteet2}`;
        }
    }
    if (bar3) {
        bar3.style.width = `${aanet1_3}%`;
        bar3.style.backgroundColor = `linear-gradient(to right, #4CAF50 ${aanet1_3}%, #ffffff ${aanet1_3}%)`;
        const points3 = document.getElementById('points3');
        if (points3) {
            points3.innerText = `Pisteet ${saavutetutPisteet3} / ${kokonaisPisteet3}`;
        }
    }

});

const paivamaaraElement = document.getElementById('paivamaara');


function muotoilePaivamaara() {
  const nyt = new Date();
  const vuosi = nyt.getFullYear();
  const kuukausi = nyt.getMonth() + 1;
  const paiva = nyt.getDate();

  paivamaaraElement.textContent = ` Tänään on ${paiva.toString().padStart(2, '0')}.${kuukausi.toString().padStart(2, '0')}.${vuosi.toString().padStart(2, '0')}`;

}


muotoilePaivamaara();