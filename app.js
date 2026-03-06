/*fonction unitaires*/
function getUser() {
  return JSON.parse(localStorage.getItem("gab_user"));
}

function getDemandes() {
  return JSON.parse(localStorage.getItem("gab_demandes") || "[]");
}

function saveDemandes(list) {
  localStorage.setItem("gab_demandes", JSON.stringify(list));
}

function getUsers() {
  return JSON.parse(localStorage.getItem("gab_users") || "[]");
}

function deconnexion() {
  localStorage.removeItem("gab_user");
  window.location.href = "index.html";
}

function requireAuth() {
  if(!getUser()) window.location.href = "index.html";
}

function requireAdmin() {
  let u = getUser();
  if(!u || u.role !== "admin") window.location.href = "index.html";
}

/*fonctionsaffichage*/
function badgeStatut(statut) {
  let map = {
    "En attente": '<span class="badge badge-wait">⏳ En attente</span>',
    "En cours":   '<span class="badge badge-progress">🔄 En cours</span>',
    "Terminée":   '<span class="badge badge-done">✅ Terminée</span>',
    "Rejetée":    '<span class="badge badge-reject">❌ Rejetée</span>'
  };
  return map[statut] || statut;
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('fr-FR');
}

const mairies = [
  { nom:"Mairie du 1er Arrondissement", lat:0.3942, lng:9.4536, adresse:"Plateau, Libreville", tel:"+241 01 72 00 01" },
  { nom:"Mairie du 2ème Arrondissement", lat:0.4010, lng:9.4350, adresse:"Nkembo, Libreville", tel:"+241 01 72 00 02" },
  { nom:"Mairie du 3ème Arrondissement", lat:0.3780, lng:9.4650, adresse:"Nombakélé, Libreville", tel:"+241 01 72 00 03" },
  { nom:"Mairie du 4ème Arrondissement", lat:0.4120, lng:9.4420, adresse:"Lalala, Libreville", tel:"+241 01 72 00 04" },
  { nom:"Mairie du 5ème Arrondissement", lat:0.3870, lng:9.4280, adresse:"Louis, Libreville", tel:"+241 01 72 00 05" },
  { nom:"Mairie du 6ème Arrondissement", lat:0.4200, lng:9.4600, adresse:"Akébé, Libreville", tel:"+241 01 72 00 06" }
];