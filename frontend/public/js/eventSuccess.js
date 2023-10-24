document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backToHome').addEventListener('click', () => {
        window.location.href = '/?e=s';
    });

    let tickMark = document.getElementById('tickMark');
    let mainBoxHeading = document.getElementById('mainBoxHeading');
    let mainBox = document.getElementById('mainBox');
    let mainBoxText = document.getElementById('mainBoxText');
    let backToHome = document.getElementById('backToHome');

    setTimeout(() => {
        tickMark.classList.add('tickMarkAnimation');
    }, 2000);

    setTimeout(() => {
        tickMark.style.display = 'none';
        mainBox.style.display = 'flex';
        mainBoxHeading.style.display = 'flex';
        mainBoxText.style.display = 'flex';
        mainBoxHeading.classList.add('popup');
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 2500);

    setTimeout(() => {
        mainBoxHeading.classList.add('popup');
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 3500);

    setTimeout(() => {
        backToHome.classList.add('popup');
        backToHome.style.opacity = '1';
    }, 4500);

    setTimeout(() => {
        tickMark.style.display = 'none';
        mainBox.style.display = 'flex';
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 5500);

})