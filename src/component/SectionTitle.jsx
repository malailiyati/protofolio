import React from "react";

export default function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color--primary)]">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-gray-200">{subtitle}</p>}
    </div>
  );
}
