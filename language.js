let lang = "en";
const searchParams = new URLSearchParams(window.location.search);
for (const [key, value] of searchParams.entries()) {
  if (key === "lang" && value === "ko") {
    lang = "ko";
  } else {
    lang = "en";
  }
}

console.log(lang)

let removals = [];
if (lang === "en") {
  removals = document.querySelectorAll(".ko");
} else if (lang === "ko") {
  removals = document.querySelectorAll(".en");
}

Array.from(removals).forEach((d) => {
  d.style.display = "none";
})