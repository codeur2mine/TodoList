import React, { useState, useEffect } from 'react'



function Header() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const son = new Audio("sonclick.mp3")
  useEffect(() => {
    if (localStorage.getItem("Taches locales")) {
      const stockage = JSON.parse(localStorage.getItem("Taches locales"));
      setTodos(stockage);
    }
  }, [])

  function handleclick(e) {


    e.preventDefault();

    son.play();

    if (!input) {

      alert("Veuillez saisir une tache");

    }
    else {


      const momo = {
        id: new Date().getTime(),
        text: input,
        completed: false,
      }
      setTodos([...todos].concat(momo));
      localStorage.setItem("Taches locales", JSON.stringify([...todos, momo]));
      setInput("")
    }


  }
  function deleteTodo(id) {
    const suppression = [...todos].filter((input) => input.id !== id)
    setTodos(suppression)
    localStorage.setItem("Taches locales", JSON.stringify(suppression));
    son.play()


  }


  return (
    <div className="text-center m-40 border border-slate-400 ">
      <h1 className="font-bold text-4xl text-blue-600">Ma Liste de Taches</h1>

      <div className="text-red-600 font-bold">
        Vous avez  {
          !todos.length ? " pas de Tache"
            : todos.length === 1 ? " 1 Tache"
              : todos.length > 1 ? `${todos.length} Taches`
                : null
        }
      </div>
      <span className="inline-flex items-baseline">
        <img src="IMG_5730.jpg" className="self-center w-8 h-8 rounded-full mx-3" />
      </span>
      <form className="inline">
        <input className="border border-slate-400 w-96 h-10 shadow-lg shadow-gray-500/50 focus:outline-none" value={input}
          type="text"
          placeholder="Insérer votre tâche..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleclick} className="border-solid h-10 bg-slate-400 px-12 text-blue-900 shadow-lg shadow-gray-600/50 font-bold">Ajouter</button>
      </form>
      {todos.map((input) => <div className="" key={input.id}><div>{input.text} </div>
        <button className="border-solid h-10 bg-slate-400 px-12 text-blue-900 shadow-lg shadow-gray-600/50 font-bold" onClick={() => deleteTodo(input.id)}>Effacer</button>
      </div>)}



    </div>
  )
}

export default Header