"use client";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import yurak from "../../assets/icons/yurak.svg";
import shop from "../../assets/icons/shop.svg";
import KatalogMadal from "./KatalogMadal";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { KirishModal } from "../KirishModal";

function NavCenter() {
    const [katalog, setKatalog] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const items = useSelector((state: RootState) => state.cart.items);
    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-6 flex flex-wrap justify-between items-center gap-4 px-4 md:px-12">
                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <ShoppingBag className="w-6 h-6 text-blue-800" />
                        <h1 className="text-blue-800 text-2xl md:text-3xl font-bold">
                            Bek
                        </h1>
                    </div>
                </Link>
                <button
                    onClick={() => setKatalog(!katalog)}
                    className="bg-blue-600 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition cursor-pointer"
                >
                    <Image
                        width={25}
                        height={25}
                        src={katalog ? menu_x : menu}
                        alt="katalog"
                    />
                    Katalog
                </button>
                <div className="flex items-center w-full max-w-lg border border-blue-600 rounded-lg bg-white overflow-hidden">
                    <input
                        className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                        type="text"
                        placeholder="Qidirish..."
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 transition-colors text-white">
                        <Image
                            width={24}
                            height={24}
                            src={search}
                            alt="Qidirish"
                        />
                    </button>
                </div>
                <div className="flex gap-6">
                    <KirishModal />
                    <div
                        className="flex flex-col items-center text-sm text-gray-800 cursor-pointer"
                        onClick={() => setShowFavorites(true)}
                    >
                        <Image width={30} height={30} src={yurak} alt="yurak" />
                        <p>Sevimlilar</p>
                    </div>
                    {showFavorites && (
                        <div className="absolute top-20 right-36 bg-white shadow-lg rounded-xl p-4 w-72 z-50">
                            <h3 className="font-semibold text-lg mb-2">
                                Sevimlilar
                            </h3>
                            {favorites.length === 0 ? (
                                <p>Hech narsa yo‘q</p>
                            ) : (
                                <ul>
                                    {favorites.map((item) => (
                                        <li
                                            key={item.id}
                                            className="mb-2 border-b pb-2"
                                        >
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {item.price} so‘m
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button
                                onClick={() => setShowFavorites(false)}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Yopish
                            </button>
                        </div>
                    )}
                    <div
                        className="flex flex-col items-center text-sm text-gray-800 cursor-pointer"
                        onClick={() => setShowCart(true)}
                    >
                        <Image width={30} height={30} src={shop} alt="shop" />
                        <p className="text-gray-800 rounded-2xl transition shadow">
                            Savatga qo‘shish
                        </p>
                    </div>
                    {showCart && (
                        <div className="absolute top-20 right-10 bg-white shadow-lg rounded-xl p-4 w-72 z-50">
                            <h3 className="font-semibold text-lg mb-2">
                                Savat
                            </h3>
                            {items.length === 0 ? (
                                <p>Savat bo‘sh</p>
                            ) : (
                                <ul>
                                    {items.map((item) => (
                                        <li
                                            key={item.id}
                                            className="mb-2 border-b pb-2"
                                        >
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {item.price} so‘m
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button
                                onClick={() => setShowCart(false)}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Yopish
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <KatalogMadal katalog={katalog} setKatalog={setKatalog} />
        </div>
    );
}

export default NavCenter;