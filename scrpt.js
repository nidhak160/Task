function addActivity() {
  let name = document.getElementById("activityName").value;
  let time = document.getElementById("activityTime").value;

  if (name === "" || time === "") {
    alert("Enter activity and time");
    return;
  }

  let list = document.getElementById("activityList");

  list.innerHTML += `
    <li class="list-group-item" onclick="highlight(this)">
      ${name} - ${time} min
    </li>`;

  updateCount();

  document.getElementById("activityName").value = "";
  document.getElementById("activityTime").value = "";
}


function highlight(item) {
  item.style.backgroundColor = "yellow";
}


function updateCount() {
  let total = document.getElementsByTagName("li");
  document.getElementById("count").innerHTML = total.length;
}


const activities = [
  { name: "Walking", minutes: 30 },
  { name: "Reading", minutes: 45 },
  { name: "Exercise", minutes: 20 },
  { name: "Meditation", minutes: 15 }
];




