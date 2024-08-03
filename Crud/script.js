let data = [
  {
    id: 1,
    name: "anu",
    email: "anu@gmail.com",
  },
  {
    id: 2,
    name: "manu",
    email: "manu@gmail.com",
  },
];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  let tabledata = document.querySelector(".data_table");

  let object = localStorage.getItem("object");
  let objectdata = JSON.parse(object);
  let elements = "";

  objectdata.map(
    (record) =>
      (elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td><button onclick={update(${record.id})}>Edit</button>
         <button>Delete</button>
        </td>
      </tr>`)
  );
  tabledata.innerHTML = elements;
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_btn").style.display = "none";
}

function add() {
  let name = document.querySelector(".uname").value;
  console.log(name);
  let email = document.querySelector(".uemail").value;
  console.log(email);
  let newObj = { id: 3, name: name, email: email };
  data.push(newObj);

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_btn").style.display = "block";
  readAll();
}

function update(id) {
 
}
