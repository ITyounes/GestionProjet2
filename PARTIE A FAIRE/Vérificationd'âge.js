<script>

    document.addEventListener("DOMContentLoaded", function() {

        const modal = document.getElementById('age-modal');

        const fileInput = document.getElementById('id-card-upload');

        const verifyBtn = document.getElementById('btn-verify');

        const fileNameDisplay = document.getElementById('file-name');

        

        // Si déjà vérifié, on n'affiche rien

        if (localStorage.getItem('ageVerifiedSecure') === 'true') {

            modal.style.display = 'none';

            return;

        }


        // Quand l'utilisateur choisit un fichier

        fileInput.addEventListener('change', function() {

            if (this.files && this.files[0]) {

                fileNameDisplay.textContent = "Fichier sélectionné : " + this.files[0].name;

                verifyBtn.disabled = false; // On active le bouton

                verifyBtn.style.backgroundColor = "#000";

            }

        });


        // Quand on clique sur Vérifier

        verifyBtn.addEventListener('click', function() {

            // 1. On cache l'étape 1, on montre le chargement

            document.getElementById('step-1').style.display = 'none';

            document.getElementById('step-loading').style.display = 'block';


            // 2. SIMULATION DU TRAITEMENT (Ici c'est du faux temps d'attente)

            // C'est ici qu'il faudrait envoyer le fichier à une API (Stripe/Veriff)

            setTimeout(function() {

                

                // 3. Succès

                document.getElementById('step-loading').style.display = 'none';

                document.getElementById('step-success').style.display = 'block';

                

                // 4. On ferme et on enregistre après 1.5 secondes

                setTimeout(function() {

                    localStorage.setItem('ageVerifiedSecure', 'true');

                    modal.style.display = 'none';

                }, 1500);


            }, 3000); // Durée du "scan" simulé (3 secondes)

        });


        // Bouton Quitter

        document.getElementById('btn-non').addEventListener('click', function() {

            window.location.href = "https://www.google.fr";
        });

    });

</script>
