"use strict"
let image = document.querySelectorAll('.image')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let body = document.querySelector('body')

image.forEach(function(el){
    el.addEventListener('click',function(){
        modal.classList.remove('modal')
        modal.classList.add('active')
        body.style.overflow = 'hidden'
    })
})
close.addEventListener('click',function(){
    modal.classList.remove('active')
    modal.classList.add('modal')
    body.style.overflow = ''
})