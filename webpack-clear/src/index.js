// Import of a JavaScript module
// Импорт модуля JavaScript
import example from "./js/example";

// Import of a SVG
// Импорт SVG
//import webpackLogo from './images/webpack-logo.svg'

// Import of styles
// Импорт стилей
import "./styles/index.scss";

// Appending to the DOM
// Добавление в DOM
//const logo = document.createElement('img')
//logo.src = webpackLogo

//const section = document.createElement('section')
//section.innerHTML = example

//const app = document.querySelector('#root')
//app.append(logo, section)
document.cookie = "user=John; domain=http://217.67.179.251/";

const menuLink = document.querySelectorAll(".header__mobile-menu-img");
const sideMenuActive = document.querySelectorAll(".side-menu");
const tableShowText = document.querySelectorAll(".table__body-item-show-text");
const dropDownFolder = document.querySelectorAll(".dropdown-folder");
const tableSortAction = document.querySelectorAll(".dropdown__select-mobile");

// Сортировка по таблице
tableSortAction.forEach((itemSort) => {
  itemSort.addEventListener("click", () => {
    const tableSort = document.querySelectorAll(".dropdown__select-mobile-active");
    tableSort.forEach((itemToggle) => {
      itemToggle.classList.add("active");

      const tableSortClose = document.querySelector(".dropdown__select-mobile-active-cancel");
      const tableSortCloseCross = document.querySelector(".dropdown__select-mobile-active-cross svg");

      tableSortCloseCross.addEventListener("click", () => {
        itemToggle.classList.remove("active");
      });

      tableSortClose.addEventListener("click", () => {
        itemToggle.classList.remove("active");
      });
    });
  });
});

// Сортировка с названием акселератора
dropDownFolder.forEach((itemFolder) => {
  const dropDownFolderSelect = document.querySelector(".dropdown-folder__select");
  dropDownFolderSelect.addEventListener("click", () => {
    itemFolder.classList.toggle("active");
  });
});

// Мобильное меню
menuLink.forEach((itemLink) => {
  itemLink.addEventListener("click", () => {
    sideMenuActive.forEach((itemActive) => {
      itemActive.classList.add("active");

      const sideMenuClose = document.querySelector(".side-menu__info-close");

      sideMenuClose.addEventListener("click", () => {
        itemActive.classList.remove("active");
      });
    });
  });
});

function hideElements(elements, count) {
  elements.forEach((element, i) => {
    if (i > count - 1 && !element.classList.contains("table__body-item-actions") && !element.classList.contains("table__body-item-favorite")) {
      element.setAttribute("hidden", "hidden");
    }
  });
}

function showElements(elements) {
  elements.forEach((element) => {
    element.removeAttribute("hidden");
  });
}

function initOpenCloseItem(element, count, showAll = false) {
  if (!element) {
    return;
  }

  const bodyItems = document.querySelectorAll(".table__body-item");

  bodyItems.forEach((item) => {
    const mobileTableItemSort = item.querySelectorAll(".mobile-table-item-sort");

    if (showAll) {
      mobileTableItemSort.forEach((elem, i) => {
        elem.removeAttribute("hidden");
      })

      return
    }

    mobileTableItemSort.forEach((elem, i) => {
      if (elem.classList.contains("table__body-item-show")) {
        elem.addEventListener("click", () => {
          console.log(elem, 'elem')
          const text = elem.querySelector("p");
          const svg = elem.querySelector("svg");

          if (text.innerText.toLowerCase() == "раскрыть полностью") {
            text.innerText = "Свернуть";
            svg.style.transform = "rotate(0)";
            showElements(mobileTableItemSort, count);
          } else {
            text.innerText = "Раскрыть полностью";
            svg.style.transform = "rotate(180deg)";
            hideElements(mobileTableItemSort, count);
          }
        });
      }

      if (elem.classList.contains("table__body-item-actions")) {
        elem.addEventListener("click", () => {
          const menu = elem.querySelector(".actions-menu");

          if (menu.classList.contains("active")) {
            menu.classList.remove("active");
          } else {
            menu.classList.add("active");
          }
        });
      }

      if (elem.classList.contains("table__body-item-favorite")) {
        elem.addEventListener("click", () => {
          const svg = elem.querySelector("svg path");

          if (svg.style.fill == "rgb(255, 255, 255)") {
            svg.style.fill = "rgb(62, 128, 255)";
          } else {
            svg.style.fill = "#ffffff"
          }
        });
      }

      if (i < count) {
        elem.removeAttribute("hidden");
      } else {
        elem.setAttribute("hidden", "hidden");
      }

      if (elem.classList.contains("table__body-item-favorite")) {
        elem.removeAttribute("hidden");
      }

      if (elem.classList.contains("table__body-item-actions")) {
        elem.removeAttribute("hidden");
      }
    });
  });
}


if (window.innerWidth <= 1200) {
  const accessRightsTable = document.querySelector(".access-rights-table");
  initOpenCloseItem(accessRightsTable, 4);

  const bankProjectsTable = document.querySelector(".bank-projects-table");
  initOpenCloseItem(bankProjectsTable, 5);

  const administratorCaseSuccessTable = document.querySelector(".administrator-case-success-table");
  initOpenCloseItem(administratorCaseSuccessTable, 4);

  const expertCaseNameTable = document.querySelector(".expert-case-name-table");
  initOpenCloseItem(expertCaseNameTable, 3);

  const caseAcceleratorsTable = document.querySelector(".case-accelerators-table");
  initOpenCloseItem(caseAcceleratorsTable, 0, true);

  const expertBankProjectsTable = document.querySelector(".expert-bank-projects-table");
  initOpenCloseItem(expertBankProjectsTable, 3);

  const caseNameTable = document.querySelector(".case-name-table");
  initOpenCloseItem(caseNameTable, 3);

  const moderatorBankProjects = document.querySelector(".moderator-bank-projects");
  initOpenCloseItem(moderatorBankProjects, 3);

  const caseSuccessTable = document.querySelector(".case-success-table");
  initOpenCloseItem(caseSuccessTable, 4);

  const moderatorRequestTeam = document.querySelector(".moderator-request-team");
  initOpenCloseItem(moderatorRequestTeam, 4);

  const studentMyCase = document.querySelector(".student-my-case");
  initOpenCloseItem(studentMyCase, 3);

  const studentAcceleratorsCaseName = document.querySelector(".student-accelerators-case-name");
  initOpenCloseItem(studentAcceleratorsCaseName, 3);

  const studentCaseAcceleratorsTable = document.querySelector(".student-case-accelerators-table");
  initOpenCloseItem(studentCaseAcceleratorsTable, 2);

  const studentBankProjectsBank = document.querySelector(".student-bank-projects-bank");
  initOpenCloseItem(studentBankProjectsBank, 3);

  const studentCaseRequest = document.querySelector(".student-case-request");
  initOpenCloseItem(studentCaseRequest, 3);

  const studentFavoriteTable = document.querySelector(".student-favorite-table");
  initOpenCloseItem(studentFavoriteTable, 3);

  const studentTeamRequest = document.querySelector(".student-team-request");
  initOpenCloseItem(studentTeamRequest, 4);

} else {
  const mobileTableItemSort = document.querySelectorAll(".mobile-table-item-sort");

  mobileTableItemSort.forEach((elem) => {
    elem.removeAttribute("hidden");
  })
}