import "./style.dist.css";

const startNow = document.getElementById("start-now")!;
const details = document.getElementById("details")!;


const hasStarted = localStorage.getItem("hasStarted");

// If the user has started the timer remove the hidden class
if (!hasStarted) {
  startNow?.classList.remove("hidden")
} else {
  details.innerHTML = `
    <p>Startet: ${new Date(localStorage.getItem("startTime")!).toLocaleString()}</p>
    <p>Grund: ${localStorage.getItem("reason")}</p>
    <p>Antal dage: ${Math.floor((new Date().getTime() - new Date(localStorage.getItem("startTime")!).getTime()) / (1000 * 60 * 60 * 24))}</p>
    <p>Antal timer: ${Math.floor((new Date().getTime() - new Date(localStorage.getItem("startTime")!).getTime()) / (1000 * 60 * 60))}</p>
    <p>Antal minutter: ${Math.floor((new Date().getTime() - new Date(localStorage.getItem("startTime")!).getTime()) / (1000 * 60))}</p>
    <p>Antal sekunder: ${Math.floor((new Date().getTime() - new Date(localStorage.getItem("startTime")!).getTime()) / (1000))}</p>`
}


startNow.onclick = () => {
  const reason = prompt("Hvad vil du gerne stoppe med?")
  if (!reason) return alert("Du skal skrive en grund til at stoppe")

  localStorage.setItem("hasStarted", "true");
  localStorage.setItem("reason", reason);
  localStorage.setItem("startTime", new Date().toISOString());

  window.location.reload();
}
