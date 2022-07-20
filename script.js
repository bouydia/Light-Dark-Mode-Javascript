const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav =document.getElementById('nav')
const toggleIcon=document.getElementById('toggle-icon')
const image1=document.getElementById('image1')
const image2=document.getElementById('image2')
const image3=document.getElementById('image3')
const txt=document.getElementById('text-box')


function imgMode(color){
    image1.src=`/img/undraw_proud_coder_${color}.svg`
    image2.src=`/img/undraw_feeling_proud_${color}.svg`
    image3.src=`/img/undraw_conceptual_idea_${color}.svg`
}
function toggleLightDarkMode(islight){
    nav.style.backgroundColor=islight?'rgb(255 255 255 /50%)':'rgb(0 0 0 /50%)'
    txt.style.backgroundColor=islight?'rgb(0 0 0 /50%)':'rgb(255 255 255 /50%)'
    toggleIcon.children[0].textContent=islight?'Light Mode':'Dark Mode'
    toggleIcon.children[1].className=islight?'fas fa-sun':'fas fa-moon'
    islight?imgMode('light'):imgMode('dark')
}
/* function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 /50%)'
    txt.style.backgroundColor='rgb(255 255 255 /50%)'
    toggleIcon.children[0].textContent='Dark Mode'
    toggleIcon.children[1].className='fas fa-moon'
    imgMode('dark')
}
function lightMode(){
    nav.style.backgroundColor='rgb(255 255 255 /50%)'
    txt.style.backgroundColor='rgb(0 0 0 /50%)'
    toggleIcon.children[0].textContent='Light Mode'
    toggleIcon.children[1].className='fas fa-sun'
    imgMode('light')
} */
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark')
        //darkMode()   
        toggleLightDarkMode(false)
    }else{
        document.documentElement.setAttribute('data-theme','ligth');
        localStorage.setItem('theme','light')
        //lightMode()
        toggleLightDarkMode(true)
    }   
       
}
//toggle event
toggleSwitch.addEventListener('change',switchTheme)

//keep checked theme
const currentTheme=localStorage.getItem('theme')
if(currentTheme==='dark'){
    toggleSwitch.checked=true
    document.documentElement.setAttribute('data-theme','dark');
    toggleLightDarkMode(false)
}
