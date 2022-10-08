import React, { useContext, useState } from 'react'
import './DogCard.css'
import { CartContext } from '../../Context/CartContext'
const DogCard = (props) => {
    const { dog } = props
    const { cart, addToCart, setTotal } = useContext(CartContext)
    const [isAdded, setAdded] = useState(false)
    const handleOnClick = () => {
        setAdded(true)
        addToCart((oldCart) => [...oldCart, dog])
        setTotal((oldTotal) => oldTotal += Number(dog.price))
    }
    const handleOnClickCancel = () => {
        setAdded(false)
        const newCart = cart.filter(i => i.id !== dog.id)

        addToCart(newCart)
        setTotal((oldTotal) => oldTotal -= Number(dog.price))

    }
    return (
        <>
            <section className='dogs'>
                <div className='dogs-info'>
                    <p>{dog.name}</p>
                    <p>{dog.breed}</p>
                </div>
                <div className='dogs-img-container'>
                    <img className='dog-img' src={dog.imageUrl}></img>
                </div>
                <div className='dogs-desc'>{dog.description}</div>
                <div className='dogs-price'>{dog.price}$</div>
                {isAdded ?
                    <button className='dogs-btn-disabled' onClick={handleOnClickCancel}>ADDED</button>
                    :
                    <button className='dogs-btn' onClick={handleOnClick}>ADD TO CART</button>
                }

            </section>
        </>

    )
}

export default DogCard