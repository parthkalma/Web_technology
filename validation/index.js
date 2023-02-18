let checkk=(ev)=>{
    let cheker=0;
    ev.preventDefault() 
    let sidd=document.getElementById("studentid").value
    let sidbox=document.getElementById("studentid");
    if(sidd==""){
        document.getElementById("chcksid").innerHTML="please enter student id "    
        sidbox.style.background='red'
        cheker=cheker+1;
        if(sidd.includes('it')){
            alert("gello")
        }
    }

    let namei=document.getElementById("nameid").value
    let namebox=document.getElementById("nameid")
    if(namei==""){
        document.getElementById("nameerr").innerHTML="please enter name  "    
        namebox.style.background='red'
        cheker=cheker+1;
    }

    let emailid=document.getElementById("emailid").value;
    let emailidbox=document.getElementById("emailid");
    if(emailid==""){
        document.getElementById("emaild").innerHTML="please enter a valid email ";
        emailidbox.style.background='red'
        cheker=cheker+1;
    }

    let branchid=document.getElementById("branchid").value;
    let branchbox=document.getElementById("branchid");
    if(branchid==""){
        document.getElementById("branchi").innerHTML="please enter valid branch name ";
        branchbox.style.background='red'
        cheker=cheker+1;
    }

    let semid=document.getElementById("semid").value;
    let sembox=document.getElementById("semid");
    if(branchid==""){
        document.getElementById("semi").innerHTML="please select your semester ";
        sembox.style.background='red'
        cheker=cheker+1;
    }

    let phoneid=document.getElementById("phoneid").value;
    let phoneidbox=document.getElementById("phoneid");
    if(branchid==""){
        document.getElementById("phonei").innerHTML="please enter your phone number";
        phoneidbox .style.background='red'
        cheker=cheker+1;
    }
    if(cheker==6){
        document.getElementById("bodyy").style.background='wheat'
    }

    male=document.getElementById("maleid")
    female=document.getElementById("femaleid")
    if(!(male.checked||female.checked)){
        document.getElementById("generr").innerHTML="please select gender "
    }
    cric=document.getElementById("cric").value
    foot=document.getElementById("foot").value
    kab=document.getElementById("kab").value
    che=document.getElementById("che").value
    voll=document.getElementById("voll").value
    
    


}
