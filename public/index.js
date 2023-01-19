

fetch("/api/employees").then((res) => res.json()).then((data) => {
    let ul = document.querySelector("#employees");
    for (let user of data) {
        let li = document.createElement("div");
        li.textContent = `${user.firstName} ${user.lastName}`;
        ul.appendChild(div);
    }
});