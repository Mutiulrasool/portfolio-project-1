//accessing the nav icon
document.getElementById("bar-icon").addEventListener("click", function () {
    var myModal = new bootstrap.Modal(document.getElementById("centeredModal"), {
    });
    myModal.show()
});

var showTheNavItemsOnClick = () => {
    let navBarList = document.getElementById("navToShowOnclick");
    navBarList.style.display = "flex";
    let navBarListItems = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navBarListItems.length; i++) {
        setTimeout(() => {
            navBarListItems[i].classList.add("show");
        }, 200);
    }

    let alertBox = document.getElementsByClassName("alert")[0];
    if (alertBox) {
        alertBox.style.display = 'none';
    }
};


document.getElementsByClassName("closeAlert&showNavItems")[0].addEventListener("click", showTheNavItemsOnClick);
document.getElementsByClassName("closeAlert&showNavItems")[1].addEventListener("click", showTheNavItemsOnClick);




