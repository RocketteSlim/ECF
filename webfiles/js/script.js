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

    // ====== GESTION DU FORMULAIRE ======
    // Sélection du formulaire
    const form = document.querySelector("form");

    // Ajout de l'écouteur d'événements sur la soumission du formulaire
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

        // Validation des noms avec une expression régulière
        // Accepte les lettres, les accents et les tirets, longueur entre 2 et 50 caractères
        const nameRegex = /^[A-Za-zÀ-ÿ-]{2,50}$/;
        
        // Validation du nom
        if (!nameRegex.test(lastname.value.trim())) showError(lastname);
        else resetError(lastname);

        // Validation du prénom
        if (!nameRegex.test(firstname.value.trim())) showError(firstname);
        else resetError(firstname);

        // Validation de l'email avec une expression régulière basique
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail.value.trim())) showError(mail);
        else resetError(mail);

        // Validation de la longueur de l'objet
        if (object.value.trim().length < 3 || object.value.trim().length > 250) showError(object);
        else resetError(object);

        // Validation de la longueur du message
        if (message.value.trim().length < 3 || message.value.trim().length > 250) showError(message);
        else resetError(message);

        // Validation de la case à cocher des mentions légales
        if (!agreement.checked) {
            alert("Vous devez accepter les mentions légales.");
            isValid = false;
        }

        // Si le formulaire est valide
        if (isValid) {
            // Important : On sélectionne le bouton submit AVANT la réinitialisation
            const submitButton = form.querySelector('input[type="submit"]');
            
            // Message de succès
            alert("Formulaire envoyé avec succès !");
            
            // Désactivation du bouton
            submitButton.setAttribute("disabled", "");
            
            // Réinitialisation du formulaire
            form.reset();
        }
    });
});