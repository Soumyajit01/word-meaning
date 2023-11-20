// word = prompt("enter the word")
searchBtn = document.getElementById("button-addon2")
sample = `<li class="list-group-item"></li>`
searchBtn.addEventListener("click", () => {
    resultsBox.innerHTML = ""
    innerHTML_ul = ``
    let searchQuery = document.querySelector("#queryWord").value;
    document.getElementsByTagName("h2")[0].innerText = `Definitions of ${searchQuery}... searching`

    const run = async () => {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
        let d1 = await fetch(url).then((x) => {
            return x.json()
        }).then((x) => {
            if (x.title) {
                resultsBox.innerHTML = `NO DEFINITIONS OF ${searchQuery} FOUND!`
            } else {
                for (let i = 0; i < Array.from(x[0]['meanings']).length; i++) {
                    m = x[0]['meanings'][i]['definitions'][0].definition
                    innerHTML_ul += `<li class="list-group-item">${m}</li>`
                    resultsBox.innerHTML += `<li class="list-group-item">${m}</li>`
                }
            }
        })
        document.getElementsByTagName("h2")[0].innerText = `Definitions of ${searchQuery}`
    }
    run()
})