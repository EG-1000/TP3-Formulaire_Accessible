/* variables */
const COURRIEL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
const TELEPHONE_REGEX = /^\d{10}$/;
const REGEX_POSTAL = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$|^[0-9]{5}$/;
const REGEX_ADRESSE = /^\d+\s[A-z]+\s[A-z]+/;
 
// CORRECTIONS: IDs corrigés pour correspondre exactement au HTML
const formatbrochure = document.querySelectorAll('input[type="radio"]'); // radio buttons
const champCourriel = document.getElementById('email');
const champTelephone = document.getElementById('téléphone');        // CORRIGÉ: accent sur le é
const champpostale = document.getElementById('code postal');        // NOTE: espace dans l'ID fonctionne mais non recommandé
const champAdresse = document.getElementById('address');            // CORRIGÉ: 'address' et non 'addresse'
const champPrenom = document.getElementById('prénomtext');
const champNom = document.getElementById('nom');
const selectPays = document.getElementById('pays');
const selectProvince = document.getElementById('provinceetat');
 
let iconeCourriel = document.querySelector('.validation-courriel .icone');
let iconeTelephone = document.querySelector('.validation-telephone .icone');
let iconePays = document.querySelector('.validation-pays .icone');
let iconeProvince = document.querySelector('.validation-province .icone');
let iconeCodePostal = document.querySelector('.validation-codepostal .icone');
let iconeAdresse = document.querySelector('.validation-adresse .icone');
let iconePrenom = document.querySelector('.validation-prenom .icone');
let iconeNom = document.querySelector('.validation-nom .icone');
let iconeFormat = document.querySelector('.validation-format .icone');
let messageErreurFormat = document.querySelector('.message-erreur_format');
let messageErreurNom = document.querySelector('.message-erreur_nom');
let messageErreurPrenom = document.querySelector('.message-erreur_prenom');
let messageErreurPays = document.querySelector('.message-erreur_pays');
let messageErreurProvince = document.querySelector('.message-erreur_province');
let messageErreurCourriel = document.querySelector('.message-erreur_courriel');
let messageErreurTelephone = document.querySelector('.message-erreur_telephone');
let messageErreurCodePostal = document.querySelector('.message-erreur_codepostal');
let messageErreurAdresse = document.querySelector('.message-erreur_adresse');
 
/* événements */
document.getElementById('bouton_envoyer').addEventListener('click', validerformulaire);
champCourriel.addEventListener('blur', validerCourriel);
champTelephone.addEventListener('blur', validerTelephone);
champpostale.addEventListener('blur', validerCodePostal);
champAdresse.addEventListener('blur', validerAdresse);
champPrenom.addEventListener('blur', validerPrenom);
champNom.addEventListener('blur', validerNom);
selectPays.addEventListener('change', validerPays);
selectProvince.addEventListener('change', validerProvince);
formatbrochure.forEach(radio => radio.addEventListener('change', validerFormatBrochure));
 
/* fonctions de validation */
function validerCourriel() {
    // CORRIGÉ: vérifier le champ vide EN PREMIER, avant le regex
    if (champCourriel.value === '') {
        champCourriel.style.backgroundColor = 'white';
        iconeCourriel.classList.add('icone--avertissement');
        iconeCourriel.classList.remove('icone--ok');
        messageErreurCourriel.textContent = 'Ce champ est requis.';
        return false;
    } else if (!COURRIEL_REGEX.test(champCourriel.value)) {
        champCourriel.style.backgroundColor = 'red';
        iconeCourriel.classList.add('icone--avertissement');
        iconeCourriel.classList.remove('icone--ok');
        messageErreurCourriel.textContent = 'Format de courriel invalide.';
        return false;
    } else {
        champCourriel.style.backgroundColor = 'green';
        iconeCourriel.classList.remove('icone--avertissement');
        iconeCourriel.classList.add('icone--ok');
        messageErreurCourriel.textContent = '';
        return true;
    }
}
 
function validerTelephone() {
    // CORRIGÉ: vérifier le champ vide EN PREMIER, avant le regex
    if (champTelephone.value === '') {
        champTelephone.style.backgroundColor = 'white';
        iconeTelephone.classList.add('icone--avertissement');
        iconeTelephone.classList.remove('icone--ok');
        messageErreurTelephone.textContent = 'Ce champ est requis.';
        return false;
    } else if (!TELEPHONE_REGEX.test(champTelephone.value)) {
        champTelephone.style.backgroundColor = 'red';
        iconeTelephone.classList.add('icone--avertissement');
        iconeTelephone.classList.remove('icone--ok');
        messageErreurTelephone.textContent = 'Format de téléphone invalide. (10 chiffres sans espaces)';
        return false;
    } else {
        champTelephone.style.backgroundColor = 'green';
        iconeTelephone.classList.remove('icone--avertissement');
        iconeTelephone.classList.add('icone--ok');
        messageErreurTelephone.textContent = '';
        return true;
    }
}
 
function validerCodePostal() {
    if (champpostale.value === '') {
        champpostale.style.backgroundColor = 'white';
        iconeCodePostal.classList.add('icone--avertissement');
        iconeCodePostal.classList.remove('icone--ok');
        messageErreurCodePostal.textContent = 'Ce champ est requis.';
        return false;
    } else if (!REGEX_POSTAL.test(champpostale.value)) {
        champpostale.style.backgroundColor = 'red';
        iconeCodePostal.classList.add('icone--avertissement');
        iconeCodePostal.classList.remove('icone--ok');
        messageErreurCodePostal.textContent = 'Format de code postal invalide.';
        return false;
    } else {
        champpostale.style.backgroundColor = 'green';
        iconeCodePostal.classList.remove('icone--avertissement');
        iconeCodePostal.classList.add('icone--ok');
        messageErreurCodePostal.textContent = '';
        return true;
    }
}
 
function validerAdresse() {
    if (champAdresse.value === '') {
        champAdresse.style.backgroundColor = 'white';
        iconeAdresse.classList.add('icone--avertissement');
        iconeAdresse.classList.remove('icone--ok');
        messageErreurAdresse.textContent = 'Ce champ est requis.';
        return false;
    } else if (!REGEX_ADRESSE.test(champAdresse.value)) {
        champAdresse.style.backgroundColor = 'red';
        iconeAdresse.classList.add('icone--avertissement');
        iconeAdresse.classList.remove('icone--ok');
        messageErreurAdresse.textContent = 'Format d\'adresse invalide. (ex: 123 Rue Exemple)';
        return false;
    } else {
        champAdresse.style.backgroundColor = 'green';
        iconeAdresse.classList.remove('icone--avertissement');
        iconeAdresse.classList.add('icone--ok');
        messageErreurAdresse.textContent = '';
        return true;
    }
}
 
function validerFormatBrochure() {
   
    const radioSelectionne = document.querySelector('input[name="brochure"]:checked');
    if (radioSelectionne) {
        iconeFormat.classList.remove('icone--avertissement');
        iconeFormat.classList.add('icone--ok');
        messageErreurFormat.textContent = '';
        return true;
    } else {
        iconeFormat.classList.add('icone--avertissement');
        iconeFormat.classList.remove('icone--ok');
        messageErreurFormat.textContent = 'Ce champ est requis.';
        return false;
    }
}
 
function validerPays() {
    if (selectPays.value !== 'selectionner' && selectPays.value !== '') {
        selectPays.style.backgroundColor = 'green';
        iconePays.classList.remove('icone--avertissement');
        iconePays.classList.add('icone--ok');
        messageErreurPays.textContent = '';
        return true;
    } else {
        selectPays.style.backgroundColor = 'white';
        iconePays.classList.add('icone--avertissement');
        iconePays.classList.remove('icone--ok');
        messageErreurPays.textContent = 'Ce champ est requis.';
        return false;
    }
}
 
function validerProvince() {
    if (selectProvince.value !== 'selectionner' && selectProvince.value !== '') {
        selectProvince.style.backgroundColor = 'green';
        iconeProvince.classList.remove('icone--avertissement');
        iconeProvince.classList.add('icone--ok');
        messageErreurProvince.textContent = '';
        return true;
    } else {
        selectProvince.style.backgroundColor = 'white';
        iconeProvince.classList.add('icone--avertissement');
        iconeProvince.classList.remove('icone--ok');
        messageErreurProvince.textContent = 'Ce champ est requis.';
        return false;
    }
}
 
function validernom() {
    // CORRIGÉ: utiliser champNom au lieu de la variable globale 'nom' non déclarée
    if (champNom.value !== '') {
        champNom.style.backgroundColor = 'green';
        iconeNom.classList.remove('icone--avertissement');
        iconeNom.classList.add('icone--ok');
        messageErreurNom.textContent = '';
        return true;
    } else {
        champNom.style.backgroundColor = 'white';
        iconeNom.classList.add('icone--avertissement');
        iconeNom.classList.remove('icone--ok');
        messageErreurNom.textContent = 'Ce champ est requis.';
        return false;
    }
}
 
function validerPrenom() {
    // CORRIGÉ: utiliser champPrenom au lieu de la variable globale 'prenom' non déclarée
    if (champPrenom.value !== '') {
        champPrenom.style.backgroundColor = 'green';
        iconePrenom.classList.remove('icone--avertissement');
        iconePrenom.classList.add('icone--ok');
        messageErreurPrenom.textContent = '';
        return true;
    } else {
        champPrenom.style.backgroundColor = 'white';
        iconePrenom.classList.add('icone--avertissement');
        iconePrenom.classList.remove('icone--ok');
        messageErreurPrenom.textContent = 'Ce champ est requis.';
        return false;
    }
}
 
function validerformulaire(e) {
    e.preventDefault();
 
    const isEmailValid = validerCourriel();
    const isPhoneValid = validerTelephone();
    const isPostalCodeValid = validerCodePostal();
    const isAddressValid = validerAdresse();
    const isFormatValid = validerFormatBrochure();
    const isCountryValid = validerPays();
    const isProvinceValid = validerProvince();
    const isFirstNameValid = validerPrenom();
    const isLastNameValid = validernom();
 
    if (isEmailValid && isPhoneValid && isPostalCodeValid && isAddressValid &&
        isFormatValid && isCountryValid && isProvinceValid && isFirstNameValid && isLastNameValid) {
        alert('Formulaire soumis avec succès!');
    } else {
        alert('Veuillez corriger les erreurs dans le formulaire avant de soumettre.');
    }
}