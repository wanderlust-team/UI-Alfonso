class Person {
  constructor(person) {
    this.person = person;
    this.bioimage = this.person.querySelector(".person-image");
    this.info = this.person.querySelector(".person-text");
    this.bioimage.addEventListener("click", () => this.select());
  }

  select() {
    const text = document.querySelectorAll(".person-text");
    Array.from(text).forEach(item => {
      item.classList.add("hidden");
    });

    this.info.classList.toggle("hidden");
  }
}

const personCards = document.querySelectorAll(".person-card");

personCards.forEach(item => {
  //   console.log(item);
  return new Person(item);
});

// console.log(personCards);
