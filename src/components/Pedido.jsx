import { useState } from "react";

const Pedido = () => {

    const [nombre, setNombre] = useState()
    const [tel, setTel] = useState()
    const [email, setEmail] = useState()

    const pedido = {
        buyer: { nombre,
                 tel,
                 email },
        carrito: [
          { id: 101, title: 'zapato nike', price: 100 },
          { id: 101, title: 'zapato nike', price: 100 },
        ],
        total: 1000,
    };
  

  return (
    <form>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <input type="tel" onChange={(e) => setTel(e.target.value)} />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Comprar</button>

    </form>
  )
}
export default Pedido