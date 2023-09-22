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

const items = [];

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const name = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const phone = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    if(name.trim() == "" || name ==null){
        alert("Inavlid Name");
        return;
    }
    else if(lastname.trim() == "" || lastname == null){
        alert("Inavlid Last Name");
        return;
    }
    else if (phone.length>10 || phone.length<10 || phone== null){
        alert("Invalid Phone Number");
        return;
    }
    else if(email.trim() == ""  || email == null){
        alert("Invalid Email-ID");
        return;
    }

    else{
        const newItems = {name,lastname,phone,email};

    items.push(newItems);

    updateTable();
    form.reset();
    }
});

function updateTable(){
    tableBody.innerHTML = "";
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

function edit(index){
    const editedItem = items[index];

    const  name = prompt("Edit Name:", editedItem.name);
    const  lastname = prompt("Edit LastName: ", editedItem.lastname);
    const  phone = prompt("Edit Phone Number: ", editedItem.phone);
    const email = prompt("Edit Email: ",editedItem.email);

    if(name.trim() == "" || name ==null){
        alert("Inavlid Name");
        form.reset();
        return;
    }
    else if(lastname.trim() == "" || lastname == null){
        alert("Inavlid Last Name");
        return;
    }
    else if (phone.length>10 || phone.length<10 || phone== null){
        alert("Invalid Phone Number");
        return;
    }
    else if(email.trim() == ""  || email == null){
        alert("Invalid Email-ID");
        return;
    }
    // const  invalidPhone = phone !== null && phone !=="" && phone.length>10 && phone.length<10;
    else{
        editedItem.name = name;
        editedItem.lastname = lastname;
        // editedItem.phone = phone;
        editedItem.email = email;
        updateTable();
    }
}

function deleteItem(index){
    const confirmDelete = confirm("Are You Sure You want to delete");
    if (confirmDelete) {
        items.splice(index,1);
        updateTable();
    }
}

updateTable();






