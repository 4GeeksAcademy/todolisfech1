import React, { useState } from 'react';



const Home = () => {

const [nuevotodo, setNuevotodoo]= useState("");
const [Todos, setTodos] = useState(["una tarera", "dos tareas"]);

const HandleClick = () =>{
	console.log();
	setTodos([...Todos,nuevotodo]);
}
const HandleChange = (event) =>{
	console.log(nuevotodo);
	setNuevotodoo(event.target.value);
	
}

const DeleteTask = (Index) =>{
	//console.log(Index);
	const listanueva = Todos.filter((Todo, i)  => i !== Index )
	setTodos(listanueva)

}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todoo List React+Fetch</h1>
			<div>
			<input type="text" onChange={HandleChange} />
			<button onClick={HandleClick}>Agregar Tareas</button>
			</div>	
			<p>Nueva Tarea: {nuevotodo}</p>
			{Todos.map( (Todo,Index)  => {
				return(
					<li>
                       {Todo} <button onClick={() => DeleteTask(Index)}>🗑</button>

					</li>
				)
			}

			)}
		</div>
		
	);
};

export default Home;
