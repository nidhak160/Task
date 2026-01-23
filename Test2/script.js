const apiurl = "https://jsonplaceholder.typicode.com/todos";

    
    fetch(apiurl)
      .then(function(response) {
        return response.json();   
      })

      .then(function(todos) {
        const container = document.getElementById("todoContainer");

        
        const cards = todos.slice(0, 12).map(function(todo) {

          const cardclass = todo.completed ? "completed" : "pending";
          const statusText = todo.completed ? "Completed" : "Pending";

          return `
            <div class="todo-card  ${ cardclass }">
              <div class="title"> ${ todo.title }</div>
              <div class="status"> ${ statusText }</div>
            </div>
          `;
        });

           

        container.innerHTML = cards.join("");
      })
      .catch(function(error) {
        console.log("Error:", error);
      });