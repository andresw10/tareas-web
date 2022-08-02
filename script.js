
const form=document.getElementById("formElem");
onsubmit = async (e) => {
  e.preventDefault();
  let hh= new FormData(formElem)
  const data={
    nombre:hh.get("nombre"),correo:hh.get("correo"),asunto:hh.get("asunto"),mensaje:hh.get ("mensaje")

  }
  console.log(data);
  
};

 