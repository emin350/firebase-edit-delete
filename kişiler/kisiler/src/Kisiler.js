import React from 'react';
import db from './firebase';
import "./Kisiler.css"
function Kisiler({id,name,surname,name1,surname1,setName,setSurName}) {

  const sil =()=>{
db.collection("kişiler").doc(id).delete();
  }

const güncelle=()=>{
  db.collection("kişiler").doc(id).update({
  name: name1,
  surname:surname1,
  });
  setName("");
  setSurName("");
};
return (
       <div className="kisi">

            <h3>{name} {surname}</h3>
                <button onClick={sil}>Sil</button>
                <button onClick={güncelle}>Güncelle</button>
          </div>
    )
}

export default Kisiler
