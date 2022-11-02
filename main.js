const searchIcon = document.querySelector(
  ".search-icon-container .search-icon"
);
const searchInput = document.querySelector(".search-input-container input");
const closeIcon = document.querySelector(".search-icon-container .close-icon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.add("active");
  closeIcon.classList.add("active");
  searchIcon.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  searchInput.classList.remove("active");
  closeIcon.classList.remove("active");
  searchIcon.classList.add("active");
});
