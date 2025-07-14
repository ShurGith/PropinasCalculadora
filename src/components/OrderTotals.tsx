import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void,
}


function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    const subtotalAmout = useMemo(()=>order.reduce((total, item)=>total +(item.quantity * item.price) , 0),[order])
    const tipAmount = useMemo(()=>subtotalAmout*tip,[tip, order])
    const totalAmout = useMemo(()=>subtotalAmout+tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina: </h2>
                <p>Subotal a pagar:{' '}
                    <span className="font-bold">{formatCurrency(subtotalAmout)}</span>
                </p>
                <p>Propina:{' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar:{' '}
                    <span className="font-bold">{formatCurrency(totalAmout)}</span>
                </p>
            </div>

            <button 
                className={`w-full p-3 upperccase bg-black cursor-pointer text-white font-bold mt-10 disabled:opacity-10 disabled:cursor-default`}
                disabled={totalAmout=== 0}
                onClick={()=>placeOrder()}
                >
                Guardar Pedido
            </button>
        </>
    )
}
export default OrderTotals