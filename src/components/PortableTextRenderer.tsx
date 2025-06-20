// components/PortableTextRenderer.tsx
import React from "react";
import { PortableText } from "@portabletext/react";

const myComponents = {
  types: {},
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-primary-600 underline hover:text-primary-800"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-2">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
};

const PortableTextRenderer = ({ value }) => {
  return <PortableText value={value} components={myComponents} />;
};

export default PortableTextRenderer;
