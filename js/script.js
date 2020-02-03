// (function () {
    const popup = document.getElementById('popup');
    const btn = document.getElementById('btn-modal');

    // btn.onclick = (e) => {
    //     e.preventDefault();
    //     popup.style.display = "block";
    //     popup.style.visibility = "visible";
    // };

    btn.addEventListener('click',  (e) => {
        e.preventDefault();
        popup.style.display = "block";
        popup.style.visibility = "visible";
    });

// close modal with escape btn
    document.addEventListener("keydown", (e) => {
        if (e.keycode === 27) {
            popup.style.display = "none";
        }
    });

// close modal on outside click, or x
    window.onclick = function(e) {
        const x = document.querySelector('popup-x');
        if (e.target === popup || e.target === x) {
            popup.style.display = "none";
        }
    };
// })(); //iief for scope