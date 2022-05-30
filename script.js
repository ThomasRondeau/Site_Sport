function afficher(){
    window.alert("Votre message a bien été envoyé");
}

var indices = [1,1,1]
var feed1 = document.querySelector("feed1");
var feed2 = document.querySelector("feed2");
const bouton_basket = document.getElementById("bouton_basket");
const bouton_f1 = document.getElementById("bouton_f1");
const bouton_foot = document.getElementById("bouton_foot");




bouton_basket.onclick = () => {
    if(indices[0]<4){
        fetch("registre.json")
        .then(response => {
            return response.json() })
        .then(function(data){
            let position = indices[0].toString();
            feed1.href = data[0].position;
            indices[0] = indices[0] + 1;
            feed2.href = data[0].position;
            indices[0] = indices[0] + 1;
        })
    }
}

bouton_f1.onclick = () => {
    if(indices[1]<4){
        fetch("registre.json")
        .then(response => {
            return response.json() })
        .then(function(data){
            let position = indices[1].toString();
            feed1.href = data[1].position;
            indices[1] = indices[1] + 1;
            feed2.href = data[1].position;
            indices[1] = indices[1] + 1;
        })
    }
}

bouton_foot.onclick = () => {
    if(indices[2]<4){
        fetch("registre.json")
        .then(response => {
            return response.json() })
        .then(function(data){
            let position = indices[2].toString();
            feed1.href = data[2].position;
            indices[2] = indices[2] + 1;
            feed2.href = data[2].position;
            indices[2] = indices[2] + 1;
        })
    }
}



