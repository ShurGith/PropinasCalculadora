import { useState } from "react"
import type { OrderItem } from "../types/index"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
   
    const addItem = (item: OrderItem) => {
        setOrder([item, ...order])
        console.log(item)
        console.log(order)
    }
    return {
        order,
        addItem
    }
}