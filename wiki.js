let input = document.getElementById("searchInput")

let searchRes = document.getElementById("searchResults")

let spinner = document.getElementById("spinner")


function createAndAppend(result) {
    let {
        title,
        link,
        description
    } = result

    // div container = creating "result-item" 
    let resCont = document.createElement("div")
    resCont.classList.add("result-item")
    searchRes.appendChild(resCont)

    // anchor element = "result-title" 
    let titleAnchor = document.createElement("a")
    titleAnchor.classList.add("result-title")
    titleAnchor.textContent = title
    titleAnchor.target = "_blank"
    titleAnchor.href = link
    resCont.appendChild(titleAnchor)

    // breakline 
    let breaking = document.createElement("br")
    resCont.appendChild(breaking)

    // anchor element url = "result-url" 
    let paraAnchor = document.createElement("a")
    paraAnchor.classList.add("result-url")
    paraAnchor.textContent = link
    paraAnchor.href = link
    paraAnchor.target = "_blank"
    resCont.appendChild(paraAnchor)

    // breakline
    let breaki = document.createElement("br")
    resCont.appendChild(breaki)

    // p tag = description "line-decription" 
    let descriptionEl = document.createElement("p")
    descriptionEl.classList.add("line-decription")
    descriptionEl.textContent = description
    resCont.appendChild(descriptionEl)


}


function displayingResults(search_results) {
    spinner.classList.toggle("d-none")
    for (let result of search_results) {
        createAndAppend(result)
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        // loading.classList.toggle("d-none")
        searchRes.textContent = ""
        spinner.classList.toggle("d-none")

        let url = "https://apis.ccbp.in/wiki-search?search=" + input.value
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                // console.log(jsonData) 
                let {
                    search_results
                } = jsonData

                displayingResults(search_results)
            })
    }


}
input.addEventListener("keydown", searchWikipedia)