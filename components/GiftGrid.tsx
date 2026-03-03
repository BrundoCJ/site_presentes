"use client";

import { useMemo, useState } from "react";
import { gifts } from "@/data/gifts";
import GiftCard from "./GiftCard";
import Filters from "./Filters";

export default function GiftGrid() {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [prefs, setPrefs] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = prefs.length > 0
      ? gifts.filter((g) => prefs.includes(g.preference))
      : [...gifts];

    return list.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [sort, prefs]);

  return (
    <section className="w-full pb-24">
      <div className="flex items-start">
        {/* Sidebar colada na esquerda */}
        <div className="pl-6 pr-4 pt-2 shrink-0">
          <Filters
            sort={sort}
            setSort={setSort}
            prefs={prefs}
            setPrefs={setPrefs}
          />
        </div>

        {/* Grid 3 colunas com imagens retrato */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pr-8">
          {filtered.map((gift) => (
            <GiftCard key={gift.slug} gift={gift} />
          ))}
        </div>
      </div>
    </section>
  );
}
