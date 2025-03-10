document.addEventListener("DOMContentLoaded",function(){const mainBurgerIcon=document.getElementById("main-burger-icon");const menuBurgerIcon=document.getElementById("menu-burger-icon");const navMenu=document.getElementById("menu");function toggleMenu(){const isOpening=!navMenu.classList.contains("open");navMenu.classList.toggle("open");mainBurgerIcon.classList.toggle("open");menuBurgerIcon.classList.toggle("open");mainBurgerIcon.style.display=isOpening?"none":"block"}
mainBurgerIcon.addEventListener("click",toggleMenu);menuBurgerIcon.addEventListener("click",toggleMenu);navMenu.querySelectorAll("a").forEach(link=>{link.addEventListener("click",()=>{toggleMenu();mainBurgerIcon.style.display="block"})});const form=document.querySelector("form");form.addEventListener("submit",function(event){event.preventDefault();let isValid=!0;const lastname=document.querySelector('input[name="lastname"]');const firstname=document.querySelector('input[name="firstname"]');const mail=document.querySelector('input[name="mail"]');const object=document.querySelector('input[name="object"]');const message=document.querySelector('textarea[name="message"]');const agreement=document.querySelector('input[name="agreement"]');function resetError(field){field.style.border="1px solid #ccc"}
function showError(field){field.style.border="2px solid red";isValid=!1}
const nameRegex=/^[A-Za-zÀ-ÿ-]{2,50}$/;if(!nameRegex.test(lastname.value.trim()))showError(lastname);else resetError(lastname);if(!nameRegex.test(firstname.value.trim()))showError(firstname);else resetError(firstname);const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!emailRegex.test(mail.value.trim()))showError(mail);else resetError(mail);if(object.value.trim().length<3||object.value.trim().length>250)showError(object);else resetError(object);if(message.value.trim().length<3||message.value.trim().length>250)showError(message);else resetError(message);if(!agreement.checked){alert("Vous devez accepter les mentions légales.");isValid=!1}
if(isValid){const submitButton=form.querySelector('button[type="submit"]');alert("Formulaire envoyé avec succès !");form.reset();submitButton.setAttribute("disabled","disabled")}})});document.querySelectorAll('main img').forEach(img=>{img.addEventListener('click',()=>{const overlay=document.createElement('div');overlay.className='overlay';document.body.appendChild(overlay);const imgFull=document.createElement('img');imgFull.src=img.src;imgFull.className='full-screen';overlay.appendChild(imgFull);document.body.classList.add('no-scroll');overlay.addEventListener('click',()=>{document.body.removeChild(overlay);document.body.classList.remove('no-scroll')})})})