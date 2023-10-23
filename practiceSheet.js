let listitems = document.querySelectorAll(".list-item");
listitems.forEach(function (li) {
  li.addEventListener("click", function (event) {
    console.log(event.target.parentElement);
  });
});
