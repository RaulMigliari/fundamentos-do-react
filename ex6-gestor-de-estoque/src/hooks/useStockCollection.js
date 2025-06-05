import { useState } from "react";

export default function useStockCollection() {
    const [stock, setStock] = useState(() => {
        const storageStock = localStorage.getItem("obc-stock")
        if(!storageStock) return []
        return JSON.parse(storageStock)
    })

    const addItem = ({name, quantity, price, category, description}) => {
        const id = Math.floor(Math.random() * 1000000)
        const item = {id, name, quantity, price, category, description}
        setStock(state => {
            const newState = [...state, item]
            localStorage.setItem("obc-stock", JSON.stringify(newState))
            return newState
        })
    }

    const removeItem = (id) => {
        setStock(state => {
            const newState = state.filter(item => item.id !== id)
            localStorage.setItem("obc-stock", JSON.stringify(newState))
            return newState
        })
    }

    const editItem = (id, updatedData) => {
        setStock(state => {
            const newState = state.map(item => 
                item.id === id ? {...item, ...updatedData} : item
            )
            localStorage.setItem("obc-stock", JSON.stringify(newState))
            return newState
        })
    }

    return {stock, addItem, removeItem, editItem}
}