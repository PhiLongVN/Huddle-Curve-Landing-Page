const form = document.querySelector(".email-input");
console.log("form", form);
const text = document.querySelector(".email-text");

form.onsubmit = (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let a = text.value;

  if (a == "" || !a.match(re)) {
    form.classList.add("active");
    e.preventDefault();
  }

  error(text);
};

function error(set) {
  set.onclick = () => {
    set.parentNode.classList.remove("active");
  };
}
