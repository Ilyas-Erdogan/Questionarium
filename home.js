var same_question = [];

function returnQuestion() {
    let question = document.getElementById("typed-question").value;
    return question;
}

function addQuestionEN() {
    let table = document.getElementById("question-table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2)
    cell1.innerHTML = document.getElementById("typed-question").value;

    /*
    let b = document.createElement("BUTTON");
    let t = document.createTextNode("I have this question too!");
    b.appendChild(t);
    */
    cell2.innerHTML = '<input class = button id = "question-table" type = "submit" value = "I have this question too!" onclick = "questionToo(this.parentNode.parentNode.rowIndex); return false">';
    same_question.push(1);
    cell3.innerHTML = Number(1);

    return false;
}

function addQuestionFR() {
    let table = document.getElementById("question-table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2)
    cell1.innerHTML = document.getElementById("typed-question").value;

    /*
    let b = document.createElement("BUTTON");
    let t = document.createTextNode("I have this question too!");
    b.appendChild(t);
    */
    cell2.innerHTML = '<input class = button id = "same-question" type = "submit" value = "J\'ai aussi cette question !" onclick = "questionToo(this.parentNode.parentNode.rowIndex); return false">';
    same_question.push(1);
    cell3.innerHTML = Number(1);

    return false;
}

function questionToo(n) {
    let qTable = document.getElementById('question-table');
    qTable.rows[n].cells[2].innerHTML = Number(qTable.rows[n].cells[2].innerHTML) + Number(1);
}
