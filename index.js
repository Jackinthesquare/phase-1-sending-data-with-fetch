// Add your code here


function submitData (name,email) {
    const userData = {
        name: "Steve",
        email: "steve@steve.com",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      };
      
      fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
        //  console.log(object.id);
          h2 = document.createElement('h2')
          h2.innerText = object.id
          document.body.append(h2)
        })



        .catch(function () {
        //   document.createElement('h1')
        //   h1.innerText = "Bad things! Ragnarők!";
        //   document.body.append(h1)
          console.log('catch');
        });
}