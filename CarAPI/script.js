const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cfd6de582dmsh53b777c3a0f6c14p10e574jsn7abf8c16a5ff",
    "X-RapidAPI-Host": "car-data.p.rapidapi.com",
  },
};
let searchInput = "";

fetch(
  `https://car-data.p.rapidapi.com/cars?limit=50&page=0&make=${searchInput}`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const myForm = document.querySelector("form");
    const searchResult = document.querySelector(".search-result");
    const viewAll = document.querySelector(".button");
    const search = document.querySelector(".submit");

    myForm.addEventListener("submit", (e) => {
      e.preventDefault();

      searchInput = e.target.querySelector("input").value;

      let searchQuery = "";

      response.map((values) => {
        if (values.make.toLowerCase() === searchInput.toLowerCase()) {
          searchQuery += `<table class="content-table">
          <tbody>
          <tr>
          <td>${values.make}</td>
          <td>${values.model}</td>
          <td>${values.type}</td>
          <td>${values.year}</td>
          </tr>
          </tbody>
        </table>`;
          searchResult.innerHTML = searchQuery;
        }
      });
    });

    viewAll.addEventListener("click", (e) => {
      e.preventDefault();

      let searchQuery = "";

      response.map((values) => {
        searchQuery += `<table class="content-table">
          <tbody>
          <tr>
          <td>${values.make}</td>
          <td>${values.model}</td>
          <td>${values.type}</td>
          <td>${values.year}</td>
          </tr>
          </tbody>
        </table>`;
        searchResult.innerHTML = searchQuery;
      });
    });
  });
