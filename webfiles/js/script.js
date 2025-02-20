document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const navMenu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        burgerIcon.classList.toggle("open");
    });

    // Fermer le menu lorsqu'un lien est cliqué
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("open");
            burgerIcon.classList.remove("open");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire si invalide

        let isValid = true;

        // Sélection des champs
        const lastname = document.querySelector('input[name="lastname"]');
        const firstname = document.querySelector('input[name="firstname"]');
        const mail = document.querySelector('input[name="mail"]');
        const object = document.querySelector('input[name="object"]');
        const message = document.querySelector('textarea[name="message"]');
        const agreement = document.querySelector('input[name="agreement"]');

        // Fonction pour réinitialiser les erreurs
        function resetError(field) {
            field.style.border = "1px solid #ccc";
        }

        // Fonction pour afficher une erreur
        function showError(field) {
            field.style.border = "2px solid red";
            isValid = false;
        }

        // Validation des noms (firstname & lastname)
        const nameRegex = /^[A-Za-zÀ-ÿ-]{2,50}$/;
        if (!nameRegex.test(lastname.value.trim())) showError(lastname);
        else resetError(lastname);

        if (!nameRegex.test(firstname.value.trim())) showError(firstname);
        else resetError(firstname);

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail.value.trim())) showError(mail);
        else resetError(mail);

        // Validation de l'objet et du message
        if (object.value.trim().length < 3 || object.value.trim().length > 250) showError(object);
        else resetError(object);

        if (message.value.trim().length < 3 || message.value.trim().length > 250) showError(message);
        else resetError(message);

        // Validation de l'accord (checkbox cochée)
        if (!agreement.checked) {
            alert("Vous devez accepter les mentions légales.");
            isValid = false;
        }

        // Si tout est valide, afficher un message de succès
        if (isValid) {
            alert("Formulaire envoyé avec succès !");
            form.reset(); // Réinitialiser le formulaire
        }
    });
});

