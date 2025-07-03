"use client";

import { useState } from "react";
import Link from "next/link";

type Section = {
  title: string;
  content: {
    title: string;
    href: string;
  }[];
};

export default function Accordion({ sections }: { sections: Section[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-3 flex justify-between items-center font-semibold text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {section.title}
            <span className="text-sm">{openIndex === index ? "▲" : "▼"}</span>
          </button>

          {openIndex === index && (
            <ul className="text-sm">
              {section.content.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-sm"
                  >
                    <p className="font-medium">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
