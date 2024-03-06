import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import { removecart } from '../../Redux/Features/Cart/CartSlice'

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [openModal]);




    const books = [
        {
            id: 1,
            name: 'Relegious Book',
            price: 500,
        },
        {
            id: 3,
            name: 'Relegious Book2',
            price: 500,
        },
        {
            id: 4,
            name: 'Relegious Book3',
            price: 500,
        },
        {
            id: 5,
            name: 'Relegious Book4',
            price: 500,
        },
        {
            id: 6,
            name: 'Relegious Book5',
            price: 500,
        },
        {
            id: 7,
            name: 'Relegious Book6',
            price: 500,
        },
    ]

    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    // console.log(cart)
    return (
        <div className="">
            <div className="flex justify-between bg-purple-700 text-white p-10">
                <p>NavBar</p>
                <button onClick={() => setOpenModal(true)} className="bg-white text-red-500 px-4 font-bold p-2 rounded-lg">Cart = {cart.length}</button>
                {/* <p></p> */}
            </div>
            <div className="grid grid-cols-3 gap-4 px-10 pt-10">
                {
                    books.map(book => <Card key={book.id} book={book}></Card>)
                }

            </div>





            <div className="w-72 mx-auto flex items-center justify-center">
                {/* Pay Button */}

                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}`}>
                        <main className="px-4 sm:px-6 lg:px-8 py-8">
                            <button onClick={() => { setOpenModal(false) }} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6">X</button>
                            <div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                                        <thead>
                                            <tr className="bg-[#0095FF] text-white">
                                                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                                                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                                                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                                <th className="py-4 px-6 text-lg text-left border-b">Qty</th>
                                                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart?.map((item, i) => <tr
                                                    key={i} className="hover:bg-gray-50 border-b transition duration-300">
                                                    <td className="py-4 px-4 flex justify-start">
                                                        <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                                    </td>
                                                    <td className="py-4 px-6 border-b text-xl font-medium">{item.name}</td>
                                                    <td className="py-4 px-6 border-b text-lg font-medium">${item?.price}</td>
                                                    <td className="py-2 px-6 border-b text-lg font-medium flex justify-center items-center gap-x-2">
                                                        <button className="
                                                        text-2xl font-bold bg-red-500 px-2">-</button>
                                                        <p>{item?.qty}</p>
                                                        <button className="
                                                        text-2xl font-bold bg-red-500 px-2">+</button>
                                                    </td>
                                                    <td className="py-4 px-6 border-b text-end">
                                                        <button className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md" onClick={() => dispatch(removecart(i))}>Remove</button>
                                                    </td>
                                                </tr>)
                                            }

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;