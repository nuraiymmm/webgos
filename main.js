document.addEventListener('DOMContentLoaded', function() {

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });


    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.querySelector('.close');

    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    };

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    window.openTab = function(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablink');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = '';
        }
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.style.backgroundColor = '#333';
    };

    document.getElementsByClassName('tablink')[0].click();


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    // Открыть модальное окно
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Закрыть модальное окно
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Закрыть модальное окно при щелчке за его пределами (если нужно)
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});