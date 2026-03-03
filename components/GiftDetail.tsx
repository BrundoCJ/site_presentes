"use client";
import { motion } from "framer-motion";

export default function GiftDetail({ gift }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen px-16">
      <div className="flex flex-row items-center gap-16 w-full max-w-5xl">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 rounded-2xl bg-[#f5f5f5] overflow-hidden ring-1 ring-black/5 flex items-center justify-center"
          style={{ width: "400px", height: "500px" }}
        >
          <motion.img
            src={gift.image}
            alt={gift.name}
            className="w-full h-full object-contain p-8"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold">{gift.name}</h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
            {gift.description}
          </p>
          <a href={gift.buyUrl} target="_blank" className="inline-block mt-8 px-10 py-4 bg-black text-white rounded-full hover:opacity-85 transition w-fit">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}