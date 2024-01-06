const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");

const toggleNav = () => {
	nav.classList.toggle("hidden");
	document.body.classList.toggle("lock-screen");

	if (nav.classList.contains("hidden")) {
		btnToggleNav.textContent = "Menu";
	} else {
		setTimeout(() => {
			btnToggleNav.textContent = "X";
		}, 475);
	}
};

btnToggleNav.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
	if (e.target.localName === "a") {
		toggleNav();
	}
});

document.body.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !nav.classList.contains("hidden")) {
		toggleNav();
	}
});

workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
	(entries) => {
		const [entry] = entries;
		const [textbox, picture] = Array.from(entry.target.children);
		if (entry.isIntersecting) {
			picture.classList.remove("transform");
			Array.from(textbox.children).forEach(
				(el) => (el.style.animationPlayState = "running")
			);
		}
	}, {
		threshold: 0.3
	}
);

workEls.forEach((workEl) => {
	observer.observe(workEl);
});

const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem("theme");

switchThemeEl.checked = storedTheme === "dark" || storedTheme === null;

switchThemeEl.addEventListener("click", () => {
	const isChecked = switchThemeEl.checked;

	if (!isChecked) {
		document.body.classList.remove("dark");
		document.body.classList.add("light");
		localStorage.setItem("theme", "light");
		switchThemeEl.checked = false;
	} else {
		document.body.classList.add("dark");
		document.body.classList.remove("light");
		localStorage.setItem("theme", "dark");
	}
});

const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

document.body.addEventListener("keydown", (e) => {
	if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
		e.preventDefault();
		btnToggleNav.focus();
	}
});

const logosWrappers = document.querySelectorAll(".logo-group");

const sleep = (number) => new Promise((res) => setTimeout(res, number));

logosWrappers.forEach(async (logoWrapper, i) => {
	const logos = Array.from(logoWrapper.children);
	await sleep(1400 * i);
	setInterval(() => {
		let temp = logos[0];
		logos[0] = logos[1];
		logos[1] = logos[2];
		logos[2] = temp;
		logos[0].classList.add("hide", "to-top");
		logos[1].classList.remove("hide", "to-top", "to-bottom");
		logos[2].classList.add("hide", "to-bottom");
	}, 5600);
});
const theme = localStorage.getItem("theme") || "dark";
document.body.classList.add(theme);


		function updateTime() {
		  var offset = 3.5; // Set the offset to UTC+3:30
		  var time = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/GMT$/, "");
		  var time1 = time.split(" ");
		  var time2 = time1[4].split(":");
		  var time3 = time2[0] + ":" + time2[1] + ":" + time2[2]; // Include seconds
		  document.getElementById("timeDisplay").innerHTML = "My local time is <i>" + time3 + "</i>";
		}
		
		setInterval(updateTime, 1000);
		
		// Set the date we're counting down to
var countDownDate = new Date("02/17/2024").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("birthday").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("birthday").innerHTML = "It's my birthday! 🎉";
  }
}, 1000);
