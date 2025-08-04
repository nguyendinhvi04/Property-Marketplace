
"use client";
import PropertyList from "../components/PropertyList";

export default function PropertyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] pt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        <PropertyList />
      </div>
    </main>
  );
}
    