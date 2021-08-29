// document.getElementById('form-Task').addEventListener('submit', saveTask);

// function saveTask(e) {

//   let title = document.getElementById('title').value;
//   let description = document.getElementById('description').value;

//   let task = {
//     title,
//     description
//   };

//   if (localStorage.getItem('tasks') === null) {
//     let tasks = [];
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   } else {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

//   getTasks();

//   document.getElementById('form-Task').reset();
//   e.preventDefault();

// }

// function deleteTask(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       tasks.splice(i, 1);
//     }
//   }

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   getTasks();
// }

// function editTask(each) {
//   console.log(each);

//   getTasks();
// }

// function getTasks() {

//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   let tasksView = document.getElementById('tasks');
//   tasksView.innerHTML = '';

//   for (let i = 0; i < tasks.length; i++) {
//     let title = tasks[i].title;
//     let description = tasks[i].description;

//     const eachData = tasks[i];

//     tasksView.innerHTML +=
//       `<div class="col-lg-4 p-1">
//            <div class="card" id="baColor" >
//             <div class="card-body">
//               <div class="d-flex justify-content-between" >
//                  <h5 class="">${title}</h5>
//                 <div class="dropdown">
//                   <div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
//                     aria-haspopup="true" aria-expanded="false">
//                     <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
//                   </div>
//                   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                     <div class="pr-1 pl-1">
//                       <p>Change Background</p>
//                       <div class="d-flex justify-content-around mb-2">
//                       <div class="bgColor color" onclick="handelBgChangeOne('${title}')" ></div>
//                       <div class="bgColor color1" onclick="handelBgChangeTwo('${title}','${i}')" ></div>
//                       <div class="bgColor color2"  onclick="handelBgChangeThree('${title}')" ></div>
//                       <div class="bgColor color3" onclick="handelBgChangeFour('${title}')"></div>
//                       <div class="bgColor color4" onclick="handelBgChangeFive('${title}')" ></div>
//                       <div class="bgColor color5" onclick="handelBgChangeSix('${title}')" ></div>
//                       </div>
//                       <div class="d-flex justify-content-around borderTop">
//                         <p onclick="deleteTask('${title}')" >Delete</p>
//                        <p onclick="editTask('${eachData}')" >Edit</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <!-- <ul class="list-group"></ul>-->
//                 <p>${description}</p>
//               </div>
//             </div>
//           </div>
//         </div>`;
//   }

// }

// getTasks();

// function handelBgChangeOne(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   console.log(bgColor);
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       bgColor.style.background = "white";
//     }
//   }
// }

// function handelBgChangeTwo(title, i) {
//   console.log(i);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       console.log(tasks[i]);
//       bgColor.style.background = "#ccd2d6";
//     }
//   }

// }

// function handelBgChangeThree(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   console.log(bgColor);
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       bgColor.style.background = "#cde8e4";
//     }
//   }
// }

// function handelBgChangeFour(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   console.log(bgColor);
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       bgColor.style.background = "#faf1dc";
//     }
//   }
// }

// function handelBgChangeFive(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   console.log(bgColor);
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       bgColor.style.background = "#fde9d9";
//     }
//   }
// }

// function handelBgChangeSix(title) {
//   console.log(title);
//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   var bgColor = document.getElementById("baColor");
//   console.log(bgColor);
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       bgColor.style.background = "#f9dcd5";
//     }
//   }
// }

document.getElementById("form-Task").addEventListener("submit", saveTask);

function saveTask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let task = {
    title,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks();

  document.getElementById("form-Task").reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}

function editTask(each, i) {
  getTasks();
}
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    let s = description.split(/\n/);

    if (s.length) {
      var list = s
        .map(function (each) {
          return "<li>" + each + "</li>";
        })
        .join("");
    }

    let eachData = tasks[i];

    tasksView.innerHTML += `<div class="col-lg-4 p-1">
           <div class="card" id="baColor" >
            <div class="card-body">
              <div class="d-flex justify-content-between" >
                 <h3>${title}</h3>
                <div class="dropdown">
                  <div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="pr-1 pl-1">
                      <p>Change Background</p>
                      <div class="d-flex justify-content-around mb-2">
                      <div class="bgColor color" onclick="handelBgChangeOne('${title}')" ></div>
                      <div class="bgColor color1" onclick="handelBgChangeTwo('${title}','${i}')" ></div>
                      <div class="bgColor color2"  onclick="handelBgChangeThree('${title}')" ></div>
                      <div class="bgColor color3" onclick="handelBgChangeFour('${title}')"></div>
                      <div class="bgColor color4" onclick="handelBgChangeFive('${title}')" ></div>
                      <div class="bgColor color5" onclick="handelBgChangeSix('${title}')" ></div>
                      </div>
                      <div class="d-flex justify-content-around borderTop">
                        <p onclick="deleteTask('${title}')" >Delete</p>
                       <p onclick="editTask('${eachData}','${i}')" >Edit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <!-- <ul class="list-group"></ul>-->
                <ul class="list-unstyled">${list}</ul>
              </div>
            </div>
          </div>
        </div>`;
  }
}

getTasks();

function handelBgChangeOne(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  console.log(bgColor);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      bgColor.style.background = "white";
    }
  }
}

function handelBgChangeTwo(title, i) {
  console.log(i);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      console.log(tasks[i]);
      bgColor.style.background = "#ccd2d6";
    }
  }
}

function handelBgChangeThree(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  console.log(bgColor);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      bgColor.style.background = "#cde8e4";
    }
  }
}

function handelBgChangeFour(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  console.log(bgColor);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      bgColor.style.background = "#faf1dc";
    }
  }
}

function handelBgChangeFive(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  console.log(bgColor);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      bgColor.style.background = "#fde9d9";
    }
  }
}

function handelBgChangeSix(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  var bgColor = document.getElementById("baColor");
  console.log(bgColor);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      bgColor.style.background = "#f9dcd5";
    }
  }
}
