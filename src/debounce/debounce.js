const search = document.getElementById("search");
const result = document.getElementById("result");

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const handleInput = debounce(function (e) {
  console.log(e.target.value);
}, 3000);

search.addEventListener("input", handleInput);
