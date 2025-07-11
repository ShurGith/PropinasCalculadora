import type { MenuItem } from "../types/index";

type MenuItemProps = {
    item: MenuItem 
}   
function MenuItem({ item } :  MenuItemProps) {
    return (
        <button className="border-2 border-teal-400 p-3 flex justify-between w-full hover:bg-teal-200 cursor-pointer">
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>            
    </button>
    )
}

export default MenuItem