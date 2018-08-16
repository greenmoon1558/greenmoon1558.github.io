function toggle() {
  console.log("yes");
  let e = document.getElementsByClassName("pullout_bar")[0];
  let sections = document.getElementsByTagName("section")[0];
  if (!e.classList.contains("active")) {
    e.style.width = "205px";
    e.classList.add("active");
    document.getElementsByTagName("aside")[0].style.width = "262px";
    sections.style.left = "262px";
    setTimeout(function () {
      document.getElementsByClassName("messages_icons")[0].style.display =
        "inline-block";
    }, 500);
  } else {
    sections.style.left = "127px";
    e.style.width = "70px";
    document.getElementsByTagName("aside")[0].style.width = "127px";
    document.getElementsByTagName("section")[0];
    document.getElementsByClassName("messages_icons")[0].style.display = "none";
    setTimeout(function () {
      e.classList.remove("active");
    }, 500);
  }
  return false;
}

let dts = document.getElementsByTagName("dt");
Object.values(dts).forEach(element => {
  element.addEventListener('click', function () {
    Object.values(dts).forEach(elem => {
      elem.classList.remove('active');
    });
    if (!this.classList.contains('active')) {
      this.classList.add('active');
    }
  });
});

let user_setting = document.getElementById("user_setting");
let user_setting__wrapper = document.getElementById("user_setting__wrapper");
user_setting.addEventListener('click', function () {
  if (!user_setting__wrapper.classList.contains('active')) {
    user_setting__wrapper.classList.add('active');
  } else {
    user_setting__wrapper.classList.remove('active');
  }
});