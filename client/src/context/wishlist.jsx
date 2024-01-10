import { createContext, useState } from "react";

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])

    localStorage.setItem('wishlist', JSON.stringify(wishlist))

    function handleWishlist(item) {
        const findedData = wishlist.find((x) => x._id === item._id)
        if (findedData) {
            return
        } else {
            setWishlist([...wishlist, item])
        }
    }

    function handleDelete(id) {
        setWishlist(wishlist.filter(item => item._id !== id))
    }


    const data = {
        wishlist,
        setWishlist,
        handleWishlist,
        handleDelete
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}
export default WishlistProvider