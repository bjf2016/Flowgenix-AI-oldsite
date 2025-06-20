import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextRenderer = ({ value }) => {
  return (
    <div className="prose prose-lg prose-charcoal max-w-none">
      <PortableText value={value} />
    </div>
  );
};

export default PortableTextRenderer;
