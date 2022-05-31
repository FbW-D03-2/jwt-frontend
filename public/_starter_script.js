const register = async (e) => {
    // POST Request /register mit username und passwort
    // => Bei Erfolg sollte der Nutzer in das user-Array im Backend hinzugefügt werden
    e.preventDefault();
    const username = document.querySelector("#register-username").value;
    const password = document.querySelector("#register-password").value;
}

const login = async (e) => {
    // POST Request /login mit username und passwort
    // => bei Erfolg sollte Client ein Cookie mit Acces-Token erhalten
    e.preventDefault();
    const username = document.querySelector("#login-username").value;
    const password = document.querySelector("#login-password").value;
}

const logout = async (e) => {
    // Post Request zu /logout, ohne daten/body
    // => Server soll einfach das Cookie löschen
    e.preventDefault();
    
    //..


    console.log("cookie deleted");
}

const getPosts = async () => {
    // GET Request zu /posts, ohne daten/body
    // (Die Nutzerinformationen vom eingeloggten User werden ja als
    // Acces-Token im Cookie übermittelt )
    // => Server sollte uns die Posts als JSON im Array übergeben
    // => Die Posts sollten dann hier dem DOM hinzugefügt werden

    //...
   

    // Beispiel, wie du die Posts zum Dom hinzufügen könntest
    const postDiv = document.querySelector("#posts");
    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerText = post.content;
        postDiv.appendChild(li)
    })
}

