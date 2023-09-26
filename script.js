// var selectedrow = null;

// //  Alerts

// function showAlert(message, className){
//     const div = document.createElement("div");
//     div.className = `alert alert-${className}`;

//     div.appendChild(document.createTextNode(message));
//     const  container = document.querySelector(".container");
//     const  main = document.querySelector(".main");
//     container.insertBefore(div,main);

//     setTimeout(() => document.querySelector(".alert").remove(),3000);
// }

// document.querySelector("#student-list").addEventListener("click", (e) =>{
//     target = e.target;
//     if(target.classList.contains("delete")){
//         target.parentElement.parentElement.remove();
//         showAlert("Data Deleted","danger");
//     }
// });

const  form = document.getElementById("form");
const tableBody = document.getElementById("table-body");
const btn = document.getElementById("submit-btn");

const items = [];

btn.addEventListener("click",function(e){
    e.preventDefault();
    
    const name = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const phone = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    if(name.trim() == "" || name ==null){
        // alert("Inavlid Name");
        document.getElementById("err-name").textContent = "Please enter valid name";
        document.getElementById("err-name").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-name").style.display = "none";
    }
    if(items.some((item)=>item.name == name)){
        document.getElementById("err-name").textContent = "Name Already exist's";
        document.getElementById("err-name").style.display  = "block";
        return;
    }
    else{
        document.getElementById("err-name").style.display - "none";
    }
    if(lastname.trim() == "" || lastname == null){
        document.getElementById("err-lastname").style.display = "block";
        return;
    }
    else {
        document.getElementById("err-lastname").style.display = "none";
    }
    if (phone.length == null || phone.length < 1  ){
        // alert("Invalid Phone Number");
        document.getElementById("err-number").textContent = "Phone no can't be blank";
        document.getElementById("err-number").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-number").style.display = "none";
    }
    if(phone.length<10){
        document.getElementById("err-number").textContent = "Phone no can't be Less Than 10";
        document.getElementById("err-number").style.display = "block";
        return ;
    }
    else{
        document.getElementById("err-number").style.display = "none";
    }
    if(phone.length>10){
        document.getElementById("err-number").textContent = "Phone no can't be greater Than 10";
        document.getElementById("err-number").style.display = "block";
        return ;
    }
    else {
        document.getElementById("err-number").style.display = "none";
    }
    if(email.trim() == ""  || email == null){
        // alert("Invalid Email-ID");
        document.getElementById("err-mail").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-mail").style.display = "none";
    }

    const newItems = {name,lastname,phone,email};

    items.push(newItems);

    updateTable();
    form.reset();

});

function updateTable(){
    tableBody.innerHTML = "";
    if(items.length ===0){
        const noRecords = document.createElement("tr");
        noRecords.innerHTML = `<td colspan ="5" class="table-title"><h2>No Records Entered Yet</h2></td>`;
        tableBody.appendChild(noRecords);
    }
    else {
        items.forEach((item,index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.lastname}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>
            <button class="btn btn-warning btn-sm edit" onClick="edit(${index})">Edit</button>
            <button class="btn btn-danger btn-sm danger" onClick="deleteItem(${index})">Delete</button>
            </td>
            `
            tableBody.appendChild(row);
        })
    }

}

function edit(index){
    const editedItem = items[index];

    // const  name = prompt("Edit Name:", editedItem.name);
    // const  lastname = prompt("Edit LastName: ", editedItem.lastname);
    // const  phone = prompt("Edit Phone Number: ", editedItem.phone);
    // const email = prompt("Edit Email: ",editedItem.email);

    const editname = editedItem.name;
    const editlastname = editedItem.lastname;
    const editphone = editedItem.phone;
    const editemail = editedItem.email;

    document.getElementById("firstName").value = editname
    document.getElementById("lastName").value = editlastname;
    document.getElementById("phonenumber").value = editphone;
    document.getElementById("email").value = editemail;

    if(editname.trim() == "" || editname ==null){
        // alert("Inavlid Name");
        document.getElementById("err-name").textContent = "Please enter valid name";
        document.getElementById("err-name").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-name").style.display = "none";
    }
    if(items.some((item)=>item.name == editname)){
        document.getElementById("err-name").textContent = "Name Already exist's";
        document.getElementById("err-name").style.display  = "block";
        return;
    }
    else{
        document.getElementById("err-name").style.display - "none";
    }
    if(editlastname.trim() == "" || lastname == null){
        document.getElementById("err-lastname").style.display = "block";
        return;
    }
    else {
        document.getElementById("err-lastname").style.display = "none";
    }
    if (phone.length == null || phone.length < 1  ){
        // alert("Invalid Phone Number");
        document.getElementById("err-number").textContent = "Phone no can't be blank";
        document.getElementById("err-number").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-number").style.display = "none";
    }
    if(phone.length<10){
        document.getElementById("err-number").textContent = "Phone no can't be Less Than 10";
        document.getElementById("err-number").style.display = "block";
        return ;
    }
    else{
        document.getElementById("err-number").style.display = "none";
    }
    if(phone.length>10){
        document.getElementById("err-number").textContent = "Phone no can't be greater Than 10";
        document.getElementById("err-number").style.display = "block";
        return ;
    }
    else {
        document.getElementById("err-number").style.display = "none";
    }
    if(email.trim() == ""  || email == null){
        // alert("Invalid Email-ID");
        document.getElementById("err-mail").style.display = "block";
        return;
    }
    else{
        document.getElementById("err-mail").style.display = "none";
    }
    // const  invalidPhone = phone !== null && phone !=="" && phone.length>10 && phone.length<10;
        editedItem.name = editname;
        editedItem.lastname = editlastname;
        editedItem.phone = editphone;
        editedItem.email = editemail;
        updateTable();
}

function deleteItem(index){
    const confirmDelete = confirm("Are You Sure You want to delete");
    if (confirmDelete) {
        items.splice(index,1);
        updateTable();
    }
}

updateTable();






