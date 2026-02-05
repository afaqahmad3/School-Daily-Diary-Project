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
async function sendWhatsApp() {

  const phoneNumber = "923001234567"; // CHANGE THIS
  const className = classInput.value || "Class";
  const message = `Daily Homework Diary for ${className}`;

  const canvas = await html2canvas(document.getElementById("diary"));
  const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  const file = new File([blob], "daily-diary.png", { type: "image/png" });

  // ✅ MOBILE SHARE (ATTACHES IMAGE)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      text: message,
      files: [file],
    });
  } 
  // ✅ FALLBACK (DESKTOP)
  else {
    // Download image
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "daily-diary.png";
    link.click();

    // Open WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
}
