
        const form = document.getElementById("form");
        const tableBody = document.getElementById("table-body");
        const submitBtn = document.getElementById("submit-btn");
        const updateBtn = document.getElementById("update-btn");
        // const formError = document.getElementById("form-error");

        const items = [];

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const phoneNumber = document.getElementById("phonenumber").value;
            const email = document.getElementById("email").value;

            if (!validateForm(firstName, lastName, phoneNumber, email)) {
                return;
            }

            if (editingIndex === -1) {
                // Adding mode
                const newItem = { firstName, lastName, phoneNumber, email };
                items.push(newItem);
            } else {
                // Editing mode
                const editedItem = items[editingIndex];
                editedItem.firstName = firstName;
                editedItem.lastName = lastName;
                editedItem.phoneNumber = phoneNumber;
                editedItem.email = email;
                editingIndex = -1; // Reset editing index
                submitBtn.style.display = "block";
                updateBtn.style.display = "none";
            }

            updateTable();
            form.reset();
        });

        let editingIndex = -1;

        function edit(index) {
            const editedItem = items[index];
            document.getElementById("firstName").value = editedItem.firstName;
            document.getElementById("lastName").value = editedItem.lastName;
            document.getElementById("phonenumber").value = editedItem.phoneNumber;
            document.getElementById("email").value = editedItem.email;
            editingIndex = index; // Set editing index
            // submitBtn.style.display = "none";
            // updateBtn.style.display = "block";
        }

        function deleteItem(index) {
            const confirmDelete = confirm("Are you sure you want to delete this item?");
            if (confirmDelete) {
                items.splice(index, 1);
                updateTable();
            }
        }

        function updateTable() {
            tableBody.innerHTML = "";

            if (items.length === 0) {
                const noRecords = document.createElement("tr");
                noRecords.innerHTML = `<td colspan="5" class="table-title"><h2>No Records Entered Yet</h2></td>`;
                tableBody.appendChild(noRecords);
            } else {
                items.forEach((item, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.phoneNumber}</td>
                        <td>${item.email}</td>
                        <td>
                            <button class="crud-button" onclick="edit(${index})">Edit</button>
                            <button class="crud-button" onclick="deleteItem(${index})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        }

        function validateForm(firstName, lastName, phoneNumber, email) {
            // formError.innerHTML = "";

            if (!firstName.trim() || !lastName.trim() || !phoneNumber.trim() || !email.trim()) {
                formError.innerHTML = "All fields are required.";
                return false;
            }

            if (!isValidPhoneNumber(phoneNumber)) {
                formError.innerHTML = "Invalid phone number format. Please enter a valid 10-digit number.";
                return false;
            }

            return true;
        }

        function isValidPhoneNumber(phoneNumber) {
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phoneNumber);
        }

        updateTable();

