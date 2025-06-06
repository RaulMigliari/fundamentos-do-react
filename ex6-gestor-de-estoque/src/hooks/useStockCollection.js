import { useState } from "react";

export default function useStockCollection() {
    const [stock, setStock] = useState(() => {
        const storageStock = localStorage.getItem("obc-stock")
        if(!storageStock) return []
        return JSON.parse(storageStock)
    })

    const addItem = ({name, quantity, price, category, description}) => {
        const id = Math.floor(Math.random() * 1000000)
        const date = new Date().toLocaleString()
        const item = {id, name, quantity, price, category, description, date}
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
                String(item.id) === String(id) ? {...item, ...updatedData} : item
            )
            localStorage.setItem("obc-stock", JSON.stringify(newState))
            return newState
        })
    }

    return {stock, addItem, removeItem, editItem}
}