const featured = document.querySelector("section");
featured.classList.add("featured");

const article = document.createElement("article");
const img = document.createElement("img");
const header = document.createElement("h3");
const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const aside = document.createElement("aside");
const span = document.createElement("span");
const strong = document.createElement("strong");
const a = document.createElement("a");

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
header.textContent = "Stop Planning";
paragraph1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;

article.append(img, header, paragraph1, aside);

strong.textContent = "Read Time:";
span.textContent = " 4 Minutes";
a.setAttribute("href", "#");
a.textContent = "Read more...";

aside.append(paragraph2);
paragraph2.append(span, a);
span.prepend(strong);

document.querySelector("section.posts").append(article);
const postFirstChild = document.querySelector("section.posts article");
const postSecondChild = document.querySelector(
  "section.posts article:nth-child(2)"
);

postSecondChild.after(postFirstChild);
