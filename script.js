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


/* SIGNATURE PREVIEW */
signInput.onchange = e => {
  const reader = new FileReader();
  reader.onload = () => signPreview.src = reader.result;
  reader.readAsDataURL(e.target.files[0]);
};

/* DOWNLOAD IMAGE */
function downloadDiary() {
  html2canvas(document.getElementById("diary")).then(canvas => {
    const link = document.createElement("a");
    link.download = "daily-homework-diary.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
function sendWhatsApp() {

  const phoneNumber = "923443039918"; // <-- CHANGE THIS

  // Create message
  const className = classInput.value || "Class";
  const message = `Daily Homework Diary for ${className}`;

  // First download image
  html2canvas(document.getElementById("diary")).then(canvas => {

    const link = document.createElement("a");
    link.download = "daily-homework-diary.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    setTimeout(() => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }, 800);
  });
}

