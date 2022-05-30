var bouton_f1 = document.querySelector("#bouton_f1");
var feed1 = document.querySelector("#feed1_f1");
var feed2 = document.querySelector("#feed2_f1");
var cpt = 1;
bouton_f1.onclick = () => {
    if(cpt<4){
        fetch("registre.json")
        .then(response => {
            return response.json() })
        .then(function(data){
            var contenant = document.querySelector("#changement");
            var script1 = document.querySelector("#script_twitter1");
            var script2 = document.querySelector("#script_twitter2");
            var newscript1 = document.createElement("script");
            var newscript2 = document.createElement("script");
            var newfeed1 = document.createElement("a");
            var newfeed2 = document.createElement("a");
            newscript1 = script1;
            newscript2 = script2;
            newfeed1 = feed1;
            newfeed2 = feed2;
            newfeed1.href = data[1][cpt] ;
            cpt = cpt + 1;
            newfeed2.href = data[1][cpt];
            cpt = cpt + 1;
            var remove1 = document.querySelector("#twitter-widget-2");
            var remove2 = document.querySelector("#twitter-widget-3")
            var poubelle = contenant.removeChild(remove1);
            poubelle = contenant.removeChild(remove2);
            contenant.appendChild(newfeed1);
            contenant.appendChild(newscript1);
            contenant.appendChild(newfeed2);
            contenant.appendChild(newscript2);
        })
    }
}