//function showMessage(){
    //document.getElementById("Message").textContent="thank you for visiting the localBiz Connect"
    //document.getElementById("Send").style.display="block";
//}
function submitEnquiry(event){
    event.preventDefault();
    const studentName=document.getElementById("studentName").value.trim();
    const studentEmail=document.getElementById("studentEmail").value.trim();
    const service=document.getElementById("service");
    const message=document.getElementById("message").value.trim();
    const formmessage=document.getElementById("formmessage");
    if(studentName===""||studentEmail===""||service===""||message===""){
        formmessage.textContent="please fill the all contents";
        formmessage.style.color="red";
        return;
    }
    formmessage.textContent = "Thank you, " + studentName + "! Your enquiry has been recorded for the Day 2 demo.";
    formmessage.style.color = "#123c69";

}