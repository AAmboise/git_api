// fetch("https://api.github.com/users/")
// .then(reponse => reponse.json()) // Transforme la réponse en json
// .then(reponse1 => console.table(reponse1)) // Affiche le résultat dans la console sous forme de tableau

btn.onclick = () =>{
    fetch("https://api.github.com/users/" + inputs.value)
    .then(reponse => reponse.json()) // Transforme la réponse en json
    .then(data => {
        // gogo.textContent = "";
        console.log(data)
        gogo.textContent = `${data.id}`;
        let img = document.createElement('img')
        img.src = data.avatar_url;
        gogo.appendChild(img)

    })

}