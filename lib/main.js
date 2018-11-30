needs_arr = ['water', 'help', 'food', 'gas', 'pet', 'power', 'clothes', 'diaper', 'house', 'boat', 'call', 'hospital', 'volunteer', 'money', 'medicine', 'fund', 'charity', 'rescue', 'oil', 'shop'];
new_arr = [];
function fadeNeeds(ids) {
  for (let i = 0; i < ids.length; i++) {
    id_index = needs_arr.indexOf(ids[i])
    if (id_index > -1) {
      needs_arr.splice(id_index, 1);
    }
  }
  console.log(needs_arr)
  for (let j = 0; j < needs_arr.length; j++) {
    var x = document.getElementById(needs_arr[j]);
    x.style.opacity = 0.1
  }
}

function focusNeeds() {
  for (let i = 0; i < needs_arr.length; i++) {
    var x = document.getElementById(needs_arr[i]);
    x.style.opacity = 0.9
  }
}
