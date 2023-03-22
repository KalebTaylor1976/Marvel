const form = document.getElementById("form");
const searchResult = document.getElementById("searchResult");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const characterInput = document.getElementById("characterInput").value;

  if (characterInput) {
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${characterInput}&apikey=YOUR_API_KEY_HERE`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.data.results;
        searchResult.innerHTML = "";
        results.forEach((result) => {
          const name = result.name;
          const description = result.description;
          const imgSrc = result.thumbnail.path + "." + result.thumbnail.extension;
          const imgElement = document.createElement("img");
          imgElement.src = imgSrc;
          const nameElement = document.createElement("h2");
          nameElement.textContent = name;
          const descriptionElement = document.createElement("p");
          descriptionElement.textContent = description;
          const resultElement = document.createElement("div");
          resultElement.appendChild(imgElement);
          resultElement.appendChild(nameElement);
          resultElement.appendChild(descriptionElement);
          searchResult.appendChild(resultElement);
        });
      })
      .catch((error) => console.log(error));
  }
}); 