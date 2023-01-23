function submit(event){

  let catetoA = document.getElementById("catetoA").value;
  let catetoB = document.getElementById("catetoB").value;
  fetch("http://localhost:5000/pitagoras", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      a: Number(catetoA),
      b: Number(catetoB),
      c: 1
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("hipotenusa").value = data.c;
  })
  .catch(error => console.log(error));
};
    //