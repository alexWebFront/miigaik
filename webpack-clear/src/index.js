// Import of a JavaScript module
// Импорт модуля JavaScript
import example from './js/example'

// Import of a SVG
// Импорт SVG
//import webpackLogo from './images/webpack-logo.svg'

// Import of styles
// Импорт стилей
import './styles/index.scss'

// Appending to the DOM
// Добавление в DOM
//const logo = document.createElement('img')
//logo.src = webpackLogo

//const section = document.createElement('section')
//section.innerHTML = example

//const app = document.querySelector('#root')
//app.append(logo, section)
console.log(window)
document.cookie = "user=John; domain=http://217.67.179.251/"

const menuLink = document.querySelectorAll(".header__mobile-menu-img");
const sideMenuActive = document.querySelectorAll('.side-menu');
const tableShowText = document.querySelectorAll('.table__body-item-show-text')
const dropDownFolder = document.querySelectorAll('.dropdown-folder')
const tableSortAction = document.querySelectorAll('.dropdown__select-mobile')

// Сортировка по таблице
tableSortAction.forEach((itemSort) => {

  itemSort.addEventListener('click', () => {
    const tableSort = document.querySelectorAll('.dropdown__select-mobile-active')
    tableSort.forEach((itemToggle) => {
      itemToggle.classList.add('active')

      const tableSortClose = document.querySelector('.dropdown__select-mobile-active-cancel')
      const tableSortCloseCross = document.querySelector('.dropdown__select-mobile-active-cross svg')

      tableSortCloseCross.addEventListener('click', () => {
        itemToggle.classList.remove('active')
      })

      tableSortClose.addEventListener('click', () => {
        itemToggle.classList.remove('active')
      })
    })
  })
})

// Сортировка с названием акселератора
dropDownFolder.forEach((itemFolder) => {
  const dropDownFolderSelect = document.querySelector('.dropdown-folder__select')
  dropDownFolderSelect.addEventListener('click', () => {
    itemFolder.classList.toggle('active')
  })
})


// Свернуть/показать полностью элементы таблицы - НЕ СДЕЛАНО
tableShowText.forEach((itemShow) => {
  itemShow.addEventListener('click', () => {
    console.log(13)
  })
})

// Мобильное меню
menuLink.forEach((itemLink) => {
  itemLink.addEventListener('click', () => {

    sideMenuActive.forEach((itemActive) => {
      itemActive.classList.add('active')

      const sideMenuClose = document.querySelector('.side-menu__info-close');

      sideMenuClose.addEventListener('click', () => {
        itemActive.classList.remove('active')
      })
    })
  })
})