import type { MenuItem } from "../types/index";

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
export function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className="border-2 border-teal-400 p-3 flex justify-between w-full hover:bg-teal-200 cursor-pointer"
            onClick={() => addItem(item)} >
            <p>{item.name}</p>
            <p className="font-black">
                ${item.price}
            </p>
        </button>
    )
}

