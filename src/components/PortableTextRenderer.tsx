// components/PortableTextRenderer.tsx
import React from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

const myComponents: PortableTextComponents = {
  types: {},
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href || '#'}
        className="text-primary-600 underline hover:text-primary-800"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
  },
};

const PortableTextRenderer = ({ value }: { value: any }) => {
  return <PortableText value={value} components={myComponents} />;
};

export default PortableTextRenderer;
