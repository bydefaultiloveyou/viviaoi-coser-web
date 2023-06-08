const parallax = document.querySelectorAll("#parallax");

window.addEventListener("mousemove", function (el) {
  const clientX = el.clientX - this.window.innerWidth / 2;
  const clientY = el.clientY - this.window.innerHeight / 2;

  parallax.forEach((l) => {
    l.style.transform = `translateX(${-clientX / 30}px) translateY(${
      -clientY / 30
    }px)`;
  });
});

// change gambar
const dataState = [
  {
    name: "",
    description: "",
    image: "",
  },
];
