const ResultTable = document.querySelector(".result");
const ToggleResultBtn = document.querySelector(".toggle-result");


const studentsData = [
    ["AbdulLah", "Lawal", "12", "14", "56"],
    ["Saliu", "Dantata", "14", "14", "54"],
    ["AbdulLah", "AbdurRohman", "12", "19", "66"],
    ["Muhammad", "Lawal", "20", "14", "66"],
    ["Fatimah", "Ukasha", "12", "15", "59"],
  ];
  let resultDisplayed = false;
ToggleResultBtn.addEventListener("click", () => {
  if (!resultDisplayed) {
    DisplayResult(studentsData);
    ToggleResultBtn.replaceChildren("Hide Result");
    resultDisplayed = true;
  } else {
    const firstChild = ResultTable.firstElementChild;
    ResultTable.replaceChildren("");
    ResultTable.append(firstChild);
    ToggleResultBtn.replaceChildren("Show Result");
    resultDisplayed = false;
  }
});
function DisplayResult(studentsData){
for(let i=0; i< studentsData.length; i++){
    const tableRow=document.createElement("tr");
    const num1=studentsData[i];
    const Totalscore=num1[2]+ num1[3]+num1[4];
    for(let h=0; h<=num1.length; h++){
        const tableData=document.createElement("th");
        if( h===num1.length){
            tableData.append(Totalscore);
            tableRow.append(tableData);
        }else{
            tableData.append(num1[h]);
            tableRow.append(tableData);
        }
    }
    ResultTable.append(tableRow);
}
}
