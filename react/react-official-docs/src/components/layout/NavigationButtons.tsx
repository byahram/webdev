"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition mb-10"
      aria-label="뒤로 가기"
    >
      <ArrowLeft size={24} />
    </button>
  );
}
