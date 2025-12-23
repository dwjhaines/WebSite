// A selection of functions written by ChatGPT to split the table into two tabs and enable a search function
function openPubList(evt, listName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(listName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

let wOnly = false;

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function toggleWFilter() {
  wOnly = !wOnly;
  filterTables();
}

function filterTables() {
  const filter = normalizeText(
    document.getElementById("tableSearch").value
  );

  const tables = document.getElementsByClassName("searchable-table");

  for (let t = 0; t < tables.length; t++) {
    const rows = tables[t].getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      let rowText = "";
      let lastCellText = "";

      for (let j = 0; j < cells.length; j++) {
        rowText += normalizeText(cells[j].textContent);
      }

      if (cells.length > 0) {
        lastCellText = cells[cells.length - 1].textContent.trim();
      }

      const matchesSearch = rowText.includes(filter);
      const matchesW = !wOnly || lastCellText === "W";

      rows[i].style.display =
        matchesSearch && matchesW ? "" : "none";
    }
  }
}