const accordionItems = document.querySelectorAll(".accordion-item-container");

accordionItems.forEach((accordionItem) => {
    accordionItem.addEventListener("click", () => {
        accordionItem.classList.toggle("active");
        console.log(accordionItem);
    });
});