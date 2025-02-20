// Attendons que le DOM soit complètement chargé avant d'exécuter notre code
document.addEventListener("DOMContentLoaded", function () {
    // ====== GESTION DU MENU BURGER ======
    // Sélection des éléments nécessaires pour le menu
    const mainBurgerIcon = document.getElementById("main-burger-icon");
    const menuBurgerIcon = document.getElementById("menu-burger-icon");
    const navMenu = document.getElementById("menu");

    // Fonction qui gère l'ouverture/fermeture du menu et la visibilité des boutons
    function toggleMenu() {
        // Vérifie si le menu est actuellement fermé
        const isOpening = !navMenu.classList.contains("open");

        // Bascule les classes pour le menu et les boutons
        navMenu.classList.toggle("open");
        mainBurgerIcon.classList.toggle("open");
        menuBurgerIcon.classList.toggle("open");

        // Gère la visibilité du bouton principal en fonction de l'état du menu
        mainBurgerIcon.style.display = isOpening ? "none" : "block";
    }

    // Ajoute les écouteurs d'événements sur les boutons burger
    mainBurgerIcon.addEventListener("click", toggleMenu);
    menuBurgerIcon.addEventListener("click", toggleMenu);

    // Gère la fermeture du menu quand on clique sur un lien
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggleMenu();
            // S'assure que le bouton principal est visible après la fermeture
            mainBurgerIcon.style.display = "block";
        });
    });

    // Sélection du formulaire
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Empêche l'envoi du formulaire par défaut pour notre validation
        event.preventDefault();

        // Variable qui tracke si le formulaire est valide
        let isValid = true;

        // Sélection de tous les champs du formulaire
        const lastname = document.querySelector('input[name="lastname"]');
        const firstname = document.querySelector('input[name="firstname"]');
        const mail = document.querySelector('input[name="mail"]');
        const object = document.querySelector('input[name="object"]');
        const message = document.querySelector('textarea[name="message"]');
        const agreement = document.querySelector('input[name="agreement"]');

        // Fonction pour réinitialiser l'état d'erreur d'un champ
        function resetError(field) {
            field.style.border = "1px solid #ccc";
        }

        // Fonction pour afficher une erreur sur un champ
        function showError(field) {
            field.style.border = "2px solid red";
            isValid = false;
        }

        // Validation des différentes inputs selon les restrictions demandées à l'aide d'expressions régulières
        // Accepte les lettres, les accents et les tirets, longueur entre 2 et 50 caractères
        const nameRegex = /^[A-Za-zÀ-ÿ-]{2,50}$/;
        
        if (!nameRegex.test(lastname.value.trim())) showError(lastname);
        else resetError(lastname);

        if (!nameRegex.test(firstname.value.trim())) showError(firstname);
        else resetError(firstname);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail.value.trim())) showError(mail);
        else resetError(mail);

        if (object.value.trim().length < 3 || object.value.trim().length > 250) showError(object);
        else resetError(object);

        if (message.value.trim().length < 3 || message.value.trim().length > 250) showError(message);
        else resetError(message);

        if (!agreement.checked) {
            alert("Vous devez accepter les mentions légales.");
            isValid = false;
        }

        // Si le formulaire est valide
        if (isValid) {
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Message de succès
            alert("Formulaire envoyé avec succès !");
            
            // Réinitialisation du formulaire
            form.reset();
            // Désactivation du bouton
            submitButton.setAttribute("disabled", "disabled");
            
        }
    });
});

// Au clic sur une image du main elle s'affiche en pleine écran 
document.querySelectorAll('main img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        const imgFull = document.createElement('img');
        imgFull.src = img.src;
        imgFull.className = 'full-screen';
        overlay.appendChild(imgFull);
        document.body.classList.add('no-scroll');

        // Fermeture de l'overlay au clic
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
            document.body.classList.remove('no-scroll');
        });
    });
});