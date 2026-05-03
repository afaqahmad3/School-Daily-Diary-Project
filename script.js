const classGroups = [
  {
    id: "nursery",
    label: "Nursery",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "prep",
    label: "Prep",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "one",
    label: "One",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "social-study", label: "Social Study", placeholder: "Write homework details" },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "two",
    label: "Two",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "social-study", label: "Social Study", placeholder: "Write homework details" },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "three",
    label: "Three",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "social-study", label: "Social Study", placeholder: "Write homework details" },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "four",
    label: "Four",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "social-study", label: "Social Study", placeholder: "Write homework details" },
      { key: "gk", label: "General Knowledge", placeholder: "Write homework details" }
    ]
  },
  {
    id: "five",
    label: "Five",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "social-study", label: "سوشل اسٹڈی", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  },
  {
    id: "six",
    label: "Six",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "tquran", label: "ترجمۃ القرآن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  },
  {
    id: "seven",
    label: "Seven",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "tquran", label: "ترجمۃ القرآن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  },
  {
    id: "pre-9th",
    label: "Pre-9th",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "Science", placeholder: "Write homework details" },
      { key: "computer-science", label: "Computer Science", placeholder: "Write homework details" },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "tquran", label: "ترجمۃ القرآن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  },
  {
    id: "nine",
    label: "9th",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "سائنس", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "computer-science", label: "Computer Science", placeholder: "Write homework details" },
      { key: "education", label: "ایجوکیشن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "tquran", label: "ترجمۃ القرآن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  },
  {
    id: "ten",
    label: "10th",
    subjects: [
      { key: "english", label: "English", placeholder: "Write homework details" },
      { key: "math", label: "Math", placeholder: "Write homework details" },
      { key: "urdu", label: "اردو", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "science", label: "سائنس", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "computer-science", label: "Computer Science", placeholder: "Write homework details" },
      { key: "education", label: "ایجوکیشن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "islamiat", label: "اسلامیات", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true },
      { key: "tquran", label: "ترجمۃ القرآن", placeholder: "ہوم ورک کی تفصیل لکھیں", urdu: true }
    ]
  }
];

const $ = (id) => document.getElementById(id);

const state = {
  selectedClassId: classGroups[0].id,
  values: {
    notes: ""
  }
};

function displayValue(value) {
  return value.trim() || "-";
}

function getSelectedClass() {
  return classGroups.find((group) => group.id === state.selectedClassId) || classGroups[0];
}

function setToday() {
  const today = new Date();

  $("date").textContent = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  $("day").textContent = today.toLocaleDateString("en-US", {
    weekday: "long"
  });
}

function renderClassButtons() {
  $("classButtons").innerHTML = classGroups
    .map((group) => `
      <button
        type="button"
        class="class-button${group.id === state.selectedClassId ? " is-active" : ""}"
        data-class-id="${group.id}"
      >
        ${group.label}
      </button>
    `)
    .join("");
}

function renderSubjectFields() {
  const selectedClass = getSelectedClass();

  $("classInput").value = selectedClass.label;
  $("subjectFields").innerHTML = selectedClass.subjects
    .map((subject) => `
      <label class="field">
        <span class="${subject.urdu ? "urdu" : ""}">${subject.label}</span>
        <input
          type="text"
          id="input-${subject.key}"
          data-subject-key="${subject.key}"
          class="${subject.urdu ? "urdu-input" : ""}"
          placeholder="${subject.placeholder}"
          value="${escapeAttribute(state.values[subject.key] || "")}"
        >
      </label>
    `)
    .join("");

  attachSubjectListeners();
  renderPreviewTable();
  generateDiary();
}

function renderPreviewTable() {
  const selectedClass = getSelectedClass();

  $("subjectsTableBody").innerHTML = selectedClass.subjects
    .map((subject) => `
      <tr>
        <td class="${subject.urdu ? "urdu" : ""}">${subject.label}</td>
        <td id="output-${subject.key}" class="${subject.urdu ? "urdu" : ""}">-</td>
      </tr>
    `)
    .join("");
}

function attachSubjectListeners() {
  document.querySelectorAll("[data-subject-key]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.values[event.target.dataset.subjectKey] = event.target.value;
      generateDiary();
    });
  });
}

function generateDiary() {
  const selectedClass = getSelectedClass();

  setToday();
  $("classOut").textContent = selectedClass.label;

  selectedClass.subjects.forEach((subject) => {
    const input = $(`input-${subject.key}`);
    const output = $(`output-${subject.key}`);
    const value = input ? input.value : state.values[subject.key] || "";

    state.values[subject.key] = value;

    if (output) {
      output.textContent = displayValue(value);
    }
  });

  state.values.notes = $("notesInput").value;
  $("notes").textContent = displayValue(state.values.notes);
}

function downloadDiary() {
  if (!window.html2canvas) {
    window.print();
    return;
  }

  html2canvas(document.getElementById("diary"), {
    backgroundColor: "#ffffff",
    scale: Math.max(2, window.devicePixelRatio || 1)
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }

      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.download = "daily-homework-diary.png";
      link.href = downloadUrl;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        URL.revokeObjectURL(downloadUrl);
      }, 1000);
    }, "image/png");
  });
}

function clearForm() {
  const selectedClass = getSelectedClass();

  selectedClass.subjects.forEach((subject) => {
    state.values[subject.key] = "";
  });

  state.values.notes = "";
  $("notesInput").value = "";
  renderSubjectFields();
}

function selectClass(classId) {
  state.selectedClassId = classId;
  renderClassButtons();
  renderSubjectFields();
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  renderClassButtons();
  renderSubjectFields();

  $("classButtons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-class-id]");

    if (!button) {
      return;
    }

    selectClass(button.dataset.classId);
  });

  $("diaryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    generateDiary();
  });

  $("notesInput").addEventListener("input", generateDiary);
  $("downloadBtn").addEventListener("click", downloadDiary);
  $("clearBtn").addEventListener("click", clearForm);

  generateDiary();
});
