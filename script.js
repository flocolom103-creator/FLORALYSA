document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. BASE DE DONNÉES COMPLÈTE
       ========================================= */
    const dbPlantes = {
        "P1": {
            nom: "Lavande Vraie", sci: "Lavandula angustifolia", com: "Lavande officinale", fam: "Lamiacées", zone_dist: "Sud de l'Europe",
            type: "Sous-arbrisseau vivace", taille_glob: "30-60 cm", forme: "Boule compacte", aspect: "Argenté", origine: "Méditerranée", sol: "Calcaire", exi: "Soleil",
            f_type: "Simples", f_forme: "Linéaires", f_taille: "2-4 cm", f_coul: "Gris-vert", f_disp: "Opposées",
            t_type: "Ligneuse/Herbacée", t_coul: "Grise", t_tex: "Quadrangulaire", t_poil: "Tomenteuse", t_epi: "Aucune", t_carac: "Aromatique",
            fl_inf: "Épi terminal", fl_taille: "1 cm", fl_forme: "Bilabiée", fl_coul: "Violet", fl_odeur: "Florale, herbacée et légèrement camphrée", fl_petales: "5 soudés", fl_sepales: "5 soudés", fl_etamines: "4", fl_pistil: "1", fl_per: "Juin-Août",
            cyc_type: "Vivace", cyc_vie: "15-20 ans", cyc_rep: "Bouturage", det_part: "Parfumerie", det_prob: "Pourriture",eau: "faible", taille: "moyenne", entretien: "faible"
        },
        "P2": {
            nom: "Fougère Scolopendre", sci: "Asplenium scolopendrium", com: "Langue de cerf", fam: "Aspléniacées", zone_dist: "Europe, Asie",
            type: "Fougère vivace", taille_glob: "40-60 cm", forme: "Rosette", aspect: "Luisant", origine: "Hémisphère Nord", sol: "Frais", exi: "Ombre",
            f_type: "Simples", f_forme: "Lancéolée", f_taille: "15-60 cm", f_coul: "Vert vif", f_disp: "Rosette",
            t_type: "Pétiole rigide", t_coul: "Brun", t_tex: "Écailleuse", t_poil: "Écailles", t_epi: "Aucune", t_carac: "Sores au revers",
            fl_inf: "Sores (spores)", fl_taille: "N/A", fl_forme: "Linéaire", fl_coul: "Brun", fl_odeur: "Terre humide et sous-bois", fl_petales: "0", fl_sepales: "0", fl_etamines: "0", fl_pistil: "0", fl_per: "Été",
            cyc_type: "Ptéridophyte", cyc_vie: "20 ans", cyc_rep: "Spores", det_part: "Médicinale", det_prob: "Limaces",eau: "eleve", taille: "moyenne", entretien: "modere"
        },
        "P3": {
            nom: "Romarin Officinal", sci: "Salvia rosmarinus", com: "Romarin", fam: "Lamiacées", zone_dist: "Méditerranée",
            type: "Arbuste", taille_glob: "1.5 m", forme: "Érigée", aspect: "Dense", origine: "Sud Europe", sol: "Sec", exi: "Soleil",
            f_type: "Simples", f_forme: "Linéaires", f_taille: "2-3 cm", f_coul: "Vert sombre", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Brune", t_tex: "Exfoliante", t_poil: "Pubescente", t_epi: "Aucune", t_carac: "Camphré",
            fl_inf: "Grappes", fl_taille: "1.2 cm", fl_forme: "Bilabiée", fl_coul: "Bleu", fl_odeur: "Puissante, résineuse et boisée", fl_petales: "5", fl_sepales: "5", fl_etamines: "2", fl_pistil: "1", fl_per: "Printemps",
            cyc_type: "Arbrisseau", cyc_vie: "30 ans", cyc_rep: "Semis", det_part: "Cuisine", det_prob: "Chrysomèle",eau: "faible", taille: "grande", entretien: "faible"
        },
        "P4": {
            nom: "Hellébore Noire", sci: "Helleborus niger", com: "Rose de Noël", fam: "Renonculacées", zone_dist: "Alpes",
            type: "Vivace", taille_glob: "30 cm", forme: "Touffe", aspect: "Coriace", origine: "Europe Centrale", sol: "Humifère", exi: "Mi-ombre",
            f_type: "Composées", f_forme: "Palmée", f_taille: "15 cm", f_coul: "Vert foncé", f_disp: "Basale",
            t_type: "Hampe charnue", t_coul: "Vert tacheté", t_tex: "Lisse", t_poil: "Aucune", t_epi: "Aucune", t_carac: "Toxique",
            fl_inf: "Cyme", fl_taille: "6 cm", fl_forme: "Coupe", fl_coul: "Blanc", fl_odeur: "Quasiment inodore", fl_petales: "5", fl_sepales: "5", fl_etamines: "Nombreuses", fl_pistil: "5-10", fl_per: "Hiver",
            cyc_type: "Vivace", cyc_vie: "15 ans", cyc_rep: "Semis", det_part: "Hivernale", det_prob: "Taches noires",eau: "eleve", taille: "moyenne", entretien: "modere"
        },
        "P5": {
            nom: "Hortensia", sci: "Hydrangea macrophylla", com: "Hortensia", fam: "Hydrangéacées", zone_dist: "Asie Est",
            type: "Arbuste caduc", taille_glob: "1.5 m", forme: "Boule", aspect: "Massif", origine: "Japon", sol: "Acide", exi: "Mi-ombre",
            f_type: "Simples", f_forme: "Ovale", f_taille: "15 cm", f_coul: "Vert", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Gris", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Caduc",
            fl_inf: "Corymbe", fl_taille: "20 cm", fl_forme: "Boule", fl_coul: "Rose/Bleu", fl_odeur: "Légère, neutre à végétale", fl_petales: "4", fl_sepales: "4", fl_etamines: "10", fl_pistil: "3", fl_per: "Été",
            cyc_type: "Arbuste", cyc_vie: "40 ans", cyc_rep: "Bouturage", det_part: "Sol dépendant", det_prob: "Oïdium",eau: "modere", taille: "moyenne", entretien: "faible"
        },
        "P6": {
            nom: "Hosta de Siebold", sci: "Hosta sieboldiana", com: "Hosta", fam: "Hostacées", zone_dist: "Asie",
            type: "Vivace", taille_glob: "60 cm", forme: "Étalée", aspect: "Large", origine: "Japon", sol: "Frais", exi: "Ombre",
            f_type: "Simples", f_forme: "Cordiforme", f_taille: "30 cm", f_coul: "Bleuté", f_disp: "Rosette",
            t_type: "Hampe", t_coul: "Verte", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Pruine",
            fl_inf: "Grappe", fl_taille: "5 cm", fl_forme: "Entonnoir", fl_coul: "Mauve", fl_odeur: "Suave, comme le jasmin", fl_petales: "6", fl_sepales: "6", fl_etamines: "6", fl_pistil: "1", fl_per: "Juillet",
            cyc_type: "Vivace", cyc_vie: "20 ans", cyc_rep: "Division", det_part: "Feuillage", det_prob: "Limaces",eau: "faible", taille: "petite", entretien: "faible"
        },
        "P7": {
            nom: "Thym Commun", sci: "Thymus vulgaris", com: "Thym", fam: "Lamiacées", zone_dist: "Europe Sud",
            type: "Arbrisseau", taille_glob: "25 cm", forme: "Coussin", aspect: "Tortueux", origine: "Méditerranée", sol: "Sec", exi: "Soleil",
            f_type: "Simples", f_forme: "Lancéolée", f_taille: "5 mm", f_coul: "Gris-vert", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Brune", t_tex: "Rugueuse", t_poil: "Courts", t_epi: "Aucune", t_carac: "Odorant",
            fl_inf: "Glomérules", fl_taille: "4 mm", fl_forme: "Bilabiée", fl_coul: "Rose", fl_odeur: "Aromatique, chaude et épicée", fl_petales: "5", fl_sepales: "Calyx", fl_etamines: "4", fl_pistil: "1", fl_per: "Printemps",
            cyc_type: "Persistant", cyc_vie: "8 ans", cyc_rep: "Semis", det_part: "Aromatique", det_prob: "Humidité",eau: "modere", taille: "grande", entretien: "modere"
        },
        "P8": {
            nom: "Fuchsia", sci: "Fuchsia magellanica", com: "Fuchsia", fam: "Onagracées", zone_dist: "Chili",
            type: "Arbuste", taille_glob: "1.2 m", forme: "Retombante", aspect: "Gracieux", origine: "Amérique Sud", sol: "Humifère", exi: "Mi-ombre",
            f_type: "Simples", f_forme: "Ovale", f_taille: "4 cm", f_coul: "Vert/Rouge", f_disp: "Opposées",
            t_type: "Ligneuse fine", t_coul: "Rouge", t_tex: "Exfoliante", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Souple",
            fl_inf: "Pendantes", fl_taille: "5 cm", fl_forme: "Clochette", fl_coul: "Bicolore", fl_odeur: "Inodore", fl_petales: "4", fl_sepales: "4", fl_etamines: "8", fl_pistil: "1", fl_per: "Été",
            cyc_type: "Vivace", cyc_vie: "15 ans", cyc_rep: "Bouturage", det_part: "Décoratif", det_prob: "Pucerons",eau: "modere", taille: "grande", entretien: "modere"
        },
        "P9": {
            nom: "Rosier Buisson", sci: "Rosa hybrida", com: "Rosier", fam: "Rosacées", zone_dist: "Hémisphère Nord",
            type: "Arbuste caduc", taille_glob: "1.2 m", forme: "Buisson", aspect: "Épineux", origine: "Monde", sol: "Argileux", exi: "Soleil",
            f_type: "Composées", f_forme: "Pennées", f_taille: "10 cm", f_coul: "Vert", f_disp: "Alternes",
            t_type: "Ligneuse", t_coul: "Brun", t_tex: "Rugueuse", t_poil: "Nulle", t_epi: "Aiguillons", t_carac: "Florifère",
            fl_inf: "Cyme", fl_taille: "10 cm", fl_forme: "Coupe", fl_coul: "Variée", fl_odeur: "Sucrée, poudrée et florale", fl_petales: "Nombreux", fl_sepales: "5", fl_etamines: "Nombreuses", fl_pistil: "Nombreux", fl_per: "Été",
            cyc_type: "Vivace", cyc_vie: "25 ans", cyc_rep: "Greffe", det_part: "Parfumé", det_prob: "Mildiou",eau: "eleve", taille: "petite", entretien: "modere"
        },
        "P10": {
            nom: "Cyclamen", sci: "Cyclamen persicum", com: "Cyclamen", fam: "Primulacées", zone_dist: "Méditerranée",
            type: "Vivace tubéreuse", taille_glob: "25 cm", forme: "Bouquet", aspect: "Délicat", origine: "Orient", sol: "Humifère", exi: "Frais",
            f_type: "Simples", f_forme: "Cordiforme", f_taille: "8 cm", f_coul: "Argenté", f_disp: "Rosette",
            t_type: "Pédicelles", t_coul: "Rouge", t_tex: "Lisse", t_poil: "Nulle", t_epi: "Aucune", t_carac: "Enroulé",
            fl_inf: "Solitaire", fl_taille: "3 cm", fl_forme: "Réfléchie", fl_coul: "Rose", fl_odeur: "Délicate et fraîche", fl_petales: "5", fl_sepales: "5", fl_etamines: "5", fl_pistil: "1", fl_per: "Hiver",
            cyc_type: "Géophyte", cyc_vie: "20 ans", cyc_rep: "Semis", det_part: "Hivernale", det_prob: "Pourriture",eau: "eleve", taille: "petite", entretien: "modere"
        },
        "P11": {
            nom: "Buis", sci: "Buxus sempervirens", com: "Buis", fam: "Buxacées", zone_dist: "Europe",
            type: "Arbuste persistant", taille_glob: "3 m", forme: "Boule", aspect: "Dense", origine: "Europe", sol: "Calcaire", exi: "Tout",
            f_type: "Simples", f_forme: "Ovale", f_taille: "2 cm", f_coul: "Vert sombre", f_disp: "Opposées",
            t_type: "Bois dur", t_coul: "Gris", t_tex: "Gercée", t_poil: "Pubescents", t_epi: "Aucune", t_carac: "Lent",
            fl_inf: "Glomérules", fl_taille: "2 mm", fl_forme: "Apétale", fl_coul: "Jaune", fl_odeur: "Amère et boisée", fl_petales: "0", fl_sepales: "4", fl_etamines: "4", fl_pistil: "1", fl_per: "Printemps",
            cyc_type: "Persistant", cyc_vie: "600 ans", cyc_rep: "Bouturage", det_part: "Topiaire", det_prob: "Pyrale",eau: "modere", taille: "petite", entretien: "faible" 
        },
        "P12": {
            nom: "Camélia", sci: "Camellia japonica", com: "Camélia", fam: "Théacées", zone_dist: "Asie",
            type: "Arbuste persistant", taille_glob: "3 m", forme: "Pyramide", aspect: "Noble", origine: "Japon", sol: "Acide", exi: "Mi-ombre",
            f_type: "Simples", f_forme: "Elliptique", f_taille: "9 cm", f_coul: "Vert vernis", f_disp: "Alternes",
            t_type: "Ligneuse", t_coul: "Gris-brun", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Rigide",
            fl_inf: "Solitaire", fl_taille: "10 cm", fl_forme: "Double", fl_coul: "Rouge", fl_odeur: "Généralement inodore", fl_petales: "5-50", fl_sepales: "5", fl_etamines: "Nombreuses", fl_pistil: "1", fl_per: "Hiver",
            cyc_type: "Persistant", cyc_vie: "100 ans", cyc_rep: "Marcottage", det_part: "Prestige", det_prob: "Cochenille",eau: "faible", taille: "grande", entretien: "faible"
        }
    };
/* =========================================
   2. LOGIQUE CATALOGUE (plantes.html)
   ========================================= */
const grid = document.getElementById('plants-grid');
const searchInput = document.querySelector('.search-input');
const filterForm = document.getElementById('filter-form');

function updateDisplay() {
    // On ne lance la fonction que si on est sur la page avec la grille et le formulaire
    if (!grid || !filterForm) return; 
    
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const formData = new FormData(filterForm);
    
    const selectedExpos = formData.getAll('expo'); 
    const selectedSols = formData.getAll('sol');
    const selectedEau = formData.get('eau');
    const selectedTaille = formData.get('taille');
    const selectedEntretien = formData.get('entretien');

    grid.innerHTML = "";

    Object.keys(dbPlantes).forEach(id => {
        const p = dbPlantes[id];

        const matchesSearch = p.nom.toLowerCase().includes(query);
        const matchesExpo = selectedExpos.length === 0 || 
                            selectedExpos.some(val => p.exi.toLowerCase().includes(val.toLowerCase()));
        const matchesSol = selectedSols.length === 0 || 
                           selectedSols.some(val => p.sol.toLowerCase().includes(val.toLowerCase()));
        
        const matchesEau = !selectedEau || p.eau === selectedEau;
        const matchesTaille = !selectedTaille || p.taille === selectedTaille;
        const matchesEntretien = !selectedEntretien || p.entretien === selectedEntretien;

        if (matchesSearch && matchesExpo && matchesSol && matchesEau && matchesTaille && matchesEntretien) {
            const card = document.createElement('a');
            card.href = `plante-detail.html?id=${id}`;
            card.className = "plant-card";
            card.innerHTML = `
                <figure>
                    <img src="images/${id.toLowerCase()}.jpg" alt="${p.nom}" onerror="this.src='images/logo1.png'">
                    <figcaption><h4>${p.nom}</h4></figcaption>
                </figure>
            `;
            grid.appendChild(card);
        }
    });
}

// Initialisation des écouteurs
if (grid) {
    updateDisplay();
    if (searchInput) searchInput.addEventListener('input', updateDisplay);
    if (filterForm) {
        filterForm.addEventListener('change', updateDisplay);
        filterForm.addEventListener('reset', () => setTimeout(updateDisplay, 10));
    }
}

/* =========================================
   3. LOGIQUE DÉTAILS (plante-detail.html)
   ========================================= */
const urlParams = new URLSearchParams(window.location.search);
const plantId = urlParams.get('id');
const plantData = dbPlantes[plantId];

if (plantData && document.getElementById('plant-name')) {
    const img = document.getElementById('plant-img');
    if (img) {
        img.src = `images/${plantId.toLowerCase()}.jpg`;
        img.alt = plantData.nom;
    }
    document.getElementById('plant-name').textContent = "1. Nom : " + plantData.nom;

    const fill = (id, items) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = items.map(([k, v]) => `<dt>${k}</dt><dd>${v || 'N/A'}</dd>`).join('');
    };

    fill('list-class', [["Scientifique", plantData.sci], ["Communs", plantData.com], ["Famille", plantData.fam], ["Distribution", plantData.zone_dist]]);
    fill('list-app', [["Type", plantData.type], ["Taille globale", plantData.taille_glob], ["Forme", plantData.forme], ["Aspect", plantData.aspect]]);
    fill('list-hab', [["Origine", plantData.origine], ["Sol", plantData.sol], ["Exigences", plantData.exi]]);

    const descBox = document.querySelector('.box-description');
    if (descBox) {
        descBox.innerHTML = `
            <h2 class="description-main-title">DESCRIPTION BOTANIQUE</h2>
            <section>
                <h3>1. Feuilles</h3>
                <dl>${[["Type", plantData.f_type], ["Forme", plantData.f_forme], ["Taille", plantData.f_taille], ["Couleur", plantData.f_coul], ["Disposition", plantData.f_disp]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
            </section>
            <section>
                <h3>2. Tiges et Branches</h3>
                <dl>${[["Type", plantData.t_type], ["Couleur", plantData.t_coul], ["Texture", plantData.t_tex], ["Pilosité", plantData.t_poil], ["Épines", plantData.t_epi], ["Caractéristique", plantData.t_carac]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
            </section>
            <section>
                <h3>3. Fleurs</h3>
                <dl>
                    <dt>Inflorescence</dt><dd>${plantData.fl_inf}</dd>
                    <dt>Taille fleur</dt><dd>${plantData.fl_taille}</dd>
                    <dt>Forme</dt><dd>${plantData.fl_forme}</dd>
                    <dt>Couleur</dt><dd>${plantData.fl_coul}</dd>
                    <dt>Odeur</dt><dd>${plantData.fl_odeur}</dd>
                    <dt>Pétales</dt><dd>${plantData.fl_petales}</dd>
                    <dt>Sépales</dt><dd>${plantData.fl_sepales}</dd>
                    <dt>Étamines</dt><dd>${plantData.fl_etamines}</dd>
                    <dt>Pistil</dt><dd>${plantData.fl_pistil}</dd>
                    <dt>Période</dt><dd>${plantData.fl_per}</dd>
                </dl>
            </section>
            <section>
                <h3>4. Cycle de Vie</h3>
                <dl>${[["Type", plantData.cyc_type], ["Longévité", plantData.cyc_vie], ["Reproduction", plantData.cyc_rep]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
            </section>
            <section>
                <h3>5. Autres Détails</h3>
                <dl>${[["Particularité", plantData.det_part], ["Problèmes", plantData.det_prob]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
            </section>
        `;
    }
}
}); 