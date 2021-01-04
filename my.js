//This is a change

function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbx85EAzWVso9q0IOLjecNCgHoDtszEsv_5-sbD8G7PO3UBe-Ew/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
    
            document.getElementById("app").textContent = d[0].status;
    
        })
}
function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbx85EAzWVso9q0IOLjecNCgHoDtszEsv_5-sbD8G7PO3UBe-Ew/exec";

    var response = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({first: "John",phone:"312-000-1212", last:"Newperson"}) // body data type must match "Content-Type" header
      })
      .then(r => {
        document.getElementById("app").textContent = JSON.stringify(r);
      })
      .catch(err => {
        document.getElementById("app").textContent = "Error sending post. Error Object: " + JSON.stringify(err);
      });

}

document.getElementById("btn").addEventListener("click", testGS);

document.getElementById("btn2").addEventListener("click", addGS);

