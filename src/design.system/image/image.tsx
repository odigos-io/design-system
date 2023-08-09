import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const IMAGE_STYLE: React.CSSProperties = {
  borderRadius: 10,
};

export function ImageComponent({
  src,
  alt = "",
  width = 56,
  height = 56,
  style = {},
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      style={{ ...IMAGE_STYLE, ...style }}
    />
  );
}
