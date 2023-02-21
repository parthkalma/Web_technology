// alert("h");
let student=[
    {name:"divyanshu",marks1:75,marks2:85,marks3:89},
    {name:"vishal",marks1:77,marks2:65,marks3:39},
    {name:"mayank",marks1:85,marks2:65,marks3:89},
    {name:"maharshi",marks1:75,marks2:85,marks3:89}
]
student.forEach((student)=>{
    let persentage =(student.marks1+student.marks2+student.marks3)/3;

    const tr=document.createElement("tr");//create table row and its appen after getting all element parth kalma
    const td1=document.createElement("td");
    td1.textContent=student.name;
    tr.appendChild(td1);
    const td2=document.createElement("td");
    td2.textContent=student.name;
    tr.appendChild(td2);
    const td3=document.createElement("td");
    td3.textContent=persentage;
    tr.appendChild(td3);
    const table=document.getElementById("table_student")
    table.appendChild(tr);
})