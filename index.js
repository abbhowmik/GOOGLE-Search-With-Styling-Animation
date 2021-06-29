console.log("this is a test");
let searchBox = document.getElementById("searchBox");
let googleIcon = document.getElementById("googleIcon");
let micSearch = document.getElementById("micSearch");
let search = document.getElementById("search");

googleIcon.onclick = () => {
  searchBox.classList.toggle("active");
};

micSearch.addEventListener("click", (e) => {
  let url = "https://www.google.com/search?q=" + search.value;
  window.open(url, "_blank");
  search.value = "";
});

search.addEventListener("keyup", (event) => {
  console.log("enter key has been pressed");
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("micSearch").click();
  }
});
