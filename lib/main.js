function fadeNeed(ids) {
  for (let i = 0; i < ids.length; i++) {
    var x = document.getElementById(ids[i]);
    x.style.opacity = 0.1
  }
}

function focusNeed(ids) {
  for (let i = 0; i < ids.length; i++) {
    var x = document.getElementById(ids[i]);
    x.style.opacity = 0.9
  }
}
