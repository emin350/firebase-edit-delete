import React, { useEffect, useState } from 'react'
import "./Home.css"
import db, { auth } from "./firebase";
import Kisiler from "./Kisiler";

function Home({ user }) {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [kişiler, setKişiler] = useState([]);

  useEffect(() => {

    db.collection("kişiler").onSnapshot(snapshot => (
      setKişiler(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    ))
}, []);

  console.log(kişiler);

const add = (e) => {
    e.preventDefault();
    db.collection("kişiler").add({
      name: name,
      surname: surname,
    })

    setName("");
    setSurName("");
  }

  return (
    <div className="home">
      Hoşgeldiniz {user.displayName}
      <button onClick={() => auth.signOut()}>ÇIKIŞ YAPINIZ</button>
      <form>
        <label >isim</label>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <label>soyisim</label>
        <input type="text"
          value={surname}
          onChange={(e) => setSurName(e.target.value)}
        />
        <button onClick={add}>Ekle</button>
      </form>
      <div>

        {kişiler.map(({ id, data}) => (

      <Kisiler 
       key={id}
       id={id} 
       name={data.name} 
       surname={data.surname}
       surname1={surname}
       name1={name} 
       setSurName={setSurName}
       setName={setName}
       />

    
        ))}

      </div>

    </div>
  );
}

export default Home
