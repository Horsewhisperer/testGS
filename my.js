function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbx85EAzWVso9q0IOLjecNCgHoDtszEsv_5-sbD8G7PO3UBe-Ew/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
    
            document.getElementById("app").textContent = d[0].status;
    
        })
}

document.getElementById("btn").addEventListener("click", testGS);


