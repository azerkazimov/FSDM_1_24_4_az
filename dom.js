const user = {
  name: "Narmin",
  email: "narmin@gmail.com",
};

const header = document.getElementById("header");
const head = document.getElementsByClassName("head");
const heading = document.getElementsByTagName("h1");

const h1 = document.querySelector("h1");
const h1_class = document.querySelector(".head");
const h1_id = document.querySelector("#header");
const div = document.querySelector("div");
const link = document.querySelector(".link");
link.classList.toggle("active");

// link.className = "new_link"
link.innerText = "Don't touch me";
link.setAttribute("href", "https://www.w3schools.com/js/");

div.innerHTML = `
<h1>Salam ${user.name}. Bizim sehifemize xos gelmisiniz</h1>
<p>Siz bu ${user.email} qeydiyatdan kecdiz</p>
`;
header.innerText = `hello ${user.name}`;

// Create class

const container = document.querySelector(".container");
const static = document.querySelector(".static_2");

const greet = "Hello guys.";

const content = document.createElement("div");

content.className = "content";
content.innerHTML = `<p>${greet} Here is our some content comes from JS</p>`;

container.append(content);

static.addEventListener('mousemove', function(){
    console.log('static data clicked');
})

// content.style.color = "red"
// content.style.backgroundColor = "yellow"

Object.assign(content.style, {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: '16px'
});

const styles = getComputedStyle(content);
console.log(styles.color);




