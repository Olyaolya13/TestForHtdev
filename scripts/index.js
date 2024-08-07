import {
  advantageImgs,
  advantageAlts,
  advantageTitle,
  advantageText,
} from "../utils/constants.js";

const PlusIcon = "../images/Icons/PlusIcon.svg";
const CrossIcon = "../images/Icons/CrossIcon.svg";

document.addEventListener("DOMContentLoaded", () => {
  const advantageGrid = document.querySelector(".advantage__grid");

  advantageImgs.forEach((imageName, index) => {
    const card = document.createElement("div");
    card.className = "advantage__card";

    const cardImg = document.createElement("img");
    cardImg.className = "advantage__image";
    cardImg.src = imageName;
    cardImg.alt = advantageAlts[index];

    const cardSubtitle = document.createElement("p");
    cardSubtitle.className = "advantage__subtitle";
    cardSubtitle.textContent = advantageTitle[index];

    const cardIcon = document.createElement("img");
    cardIcon.className = "advantage__icon";
    cardIcon.src = PlusIcon;
    cardIcon.alt = "Плюс";
    cardIcon.dataset.icon = "plus";

    const cardText = document.createElement("p");
    cardText.className = "advantage__subtitle";
    cardText.textContent = advantageText[index];
    cardText.style.display = "none";

    cardIcon.addEventListener("click", () => {
      if (cardIcon.dataset.icon === "plus") {
        cardImg.style.display = "none";
        cardSubtitle.style.display = "none";
        cardIcon.src = CrossIcon;
        cardIcon.alt = "Крест";
        cardIcon.dataset.icon = "cross";
        cardText.style.display = "block";
      } else {
        cardImg.style.display = "block";
        cardSubtitle.style.display = "block";
        cardIcon.src = PlusIcon;
        cardIcon.alt = "Плюс";
        cardIcon.dataset.icon = "plus";
        cardText.style.display = "none";
      }
    });

    card.appendChild(cardImg);
    card.appendChild(cardSubtitle);
    card.appendChild(cardIcon);
    card.appendChild(cardText);

    advantageGrid.appendChild(card);
  });
});
