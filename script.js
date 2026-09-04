const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#site-search");
const sections = document.querySelectorAll("main section");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterSections();
});

searchInput.addEventListener("input", filterSections);

function filterSections() {
  const searchText = searchInput.value.toLowerCase().trim();

  sections.forEach(function (section) {
    const sectionText = section.textContent.toLowerCase();
    const matchesSearch = sectionText.includes(searchText);

    section.hidden = searchText !== "" && !matchesSearch;
  });
}
