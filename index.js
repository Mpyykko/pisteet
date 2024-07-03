document.addEventListener('DOMContentLoaded', function () {
    const image1 = document.getElementById('image1');
    const lock1 = document.getElementById('lock1');

    image1.addEventListener('click', function () {
        lock1.style.display = 'block';
    });

    lock1.addEventListener('click', function () {
        this.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const image2 = document.getElementById('image2');
    const lock2 = document.getElementById('lock2');

    image2.addEventListener('click', function () {
        lock2.style.display = 'block';
    });

    lock2.addEventListener('click', function () {
        this.style.display = 'none';
    });
});


/* document.addEventListener('DOMContentLoaded', function () {
    const image3 = document.getElementById('image3');
    
    image3.addEventListener('click', function () {
        if (image3.classList.contains('enlarged')) {
            image3.classList.remove('enlarged');
        } else {
            image3.classList.add('enlarged');
        }
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    const image3 = document.getElementById('image3');
    const lock3 = document.getElementById('lock3');

    image3.addEventListener('click', function () {
        lock3.style.display = 'block';
    });

    lock3.addEventListener('click', function () {
        this.style.display = 'none';
    });
});



