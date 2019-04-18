let toggleNavStatus = false;

const toggleNav = function() {
  const getSideBar = document.querySelector(".nav-sidebar");
  const getSideBarUl = document.querySelector(".nav-sidebar ul");
  const getSideBarTitle = document.querySelector(".nav-sidebar span");
  const getSideBarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSideBar.style.visibility = "visible";
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "272px";
    getSideBarTitle.style.opacity = "0.6";

    let arrayLength = getSideBarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSideBarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSideBar.style.width = "50px";
    getSideBarTitle.style.opacity = "0";

    let arrayLength = getSideBarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSideBarLinks[i].style.opacity = "0";
    }

    getSideBarUl.style.visibility = "hidden";
    getSideBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
