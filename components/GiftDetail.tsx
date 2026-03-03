"use client";
import { motion } from "framer-motion";

export default function GiftDetail({ gift }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-24 px-6 py-24 items-center">
      <motion.div
        whileHover={{
          scale: 1.01,
          boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.5 }}
        className="group rounded-2xl bg-gray-100 overflow-hidden cursor-pointer ring-1 ring-black/5 hover:ring-black/10"
        title="Visualizar"
      >
        <motion.img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>

      <div>
        <h1 className="text-4xl font-semibold">{gift.name}</h1>

        <p className="mt-8 text-gray-600 text-lg leading-relaxed">
          {gift.description}
        </p>

        <a
          href={gift.buyUrl}
          target="_blank"
          className="inline-block mt-10 px-10 py-4 bg-black text-white rounded-full hover:opacity-85 transition"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}