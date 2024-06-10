
const kysymys1 = {
    kysymys: "Kysymys 1",
    aanet: [100, 300]
};

const kysymys2 = {
    kysymys: "Kysymys 2",
    aanet: [50, 150]
};


const saavutetutPisteet1 = kysymys1.aanet[0];
const kokonaisPisteet1 = kysymys1.aanet[1];

const saavutetutPisteet2 = kysymys2.aanet[0];
const kokonaisPisteet2 = kysymys2.aanet[1];


const aanet1_1 = kokonaisPisteet1 > 0 ? (saavutetutPisteet1 / kokonaisPisteet1 * 100).toFixed(1) : 0;
const aanet1_2 = kokonaisPisteet2 > 0 ? (saavutetutPisteet2 / kokonaisPisteet2 * 100).toFixed(1) : 0;


document.getElementById('circle1').style.borderColor = `linear-gradient(to right, #4CAF50 ${aanet1_1}%, #ffffff ${aanet1_1}%)`;
document.getElementById('circle2').style.borderColor = `linear-gradient(to right, #4CAF50 ${aanet1_2}%, #ffffff ${aanet1_2}%)`;


document.getElementById('points1').innerText = `Pisteet ${saavutetutPisteet1} / ${kokonaisPisteet1}`;
document.getElementById('points2').innerText = `Pisteet ${saavutetutPisteet2} / ${kokonaisPisteet2}`;
