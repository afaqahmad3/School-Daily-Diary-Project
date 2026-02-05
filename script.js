function generateDiary() {
  const today = new Date();

  date.innerText = today.toLocaleDateString();
  day.innerText = today.toLocaleString("en-us", { weekday: "long" });

  classOut.innerText = classInput.value;

  eng.innerText = engInput.value;
  math.innerText = mathInput.value;
  sci.innerText = sciInput.value;
  gk.innerText = gkInput.value;
  sst.innerText = sstInput.value;
  urdu.innerText = urduInput.value;
  isl.innerText = islInput.value;
  notes.innerText = notesInput.value;
}



/* DOWNLOAD IMAGE */
function downloadDiary() {
  html2canvas(document.getElementById("diary")).then(canvas => {
    const link = document.createElement("a");
    link.download = "daily-homework-diary.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
