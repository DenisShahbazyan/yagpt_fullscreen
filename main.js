// ==UserScript==
// @name         YaGPT на весь экран
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Раскрывает YaGPT на весь экран.
// @author       OTBEPHNCb
// @match        https://ya.ru/*
// @match        *://*.ya.ru/*
// @match        *://ya.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ya.ru
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict'
  function pressButton() {
    const aliceContainer = document.querySelector(
      '.alice-container.alice-container_alice-show'
    )
    if (aliceContainer) {
      aliceContainer.style.width = '95%'
      aliceContainer.style.height = '100%'

      const aliceInnerDiv = aliceContainer.children[0]
      if (aliceInnerDiv) {
        aliceInnerDiv.style.width = '95%'
        aliceInnerDiv.style.height = '100%'
      }
    } else {
      const aliceContainer = document.querySelector('.alice-container')
      aliceContainer.style.width = ''
      aliceContainer.style.height = ''
    }

    timeClick()
  }
  function timeClick() {
    setTimeout(function () {
      pressButton()
    }, 1000)
  }
  timeClick()
})();
