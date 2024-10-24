import React from 'react'
import{pizzaData} from './data';
import Pizza from './Pizza.jsx';


function menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

  return (
    <main className='menu'>
        <h2>The Menu</h2>
        {numPizzas > 0 ? (
            <> 
            <p>
                We serve the best pizza in town.All organic and rich in flavour
                and nurients
            </p>

<ul className="pizzas">
   {pizzas.map((piz) => (
    <Pizza key={piz.name} pizzaObj={piz}/>
   ))}
</ul>
</>
        ):(
            <p>Menu will soon be available.Please bear with us</p>
        )}
    </main>
    
  )
}
export default menu
