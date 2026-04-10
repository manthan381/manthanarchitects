// src/app/projects/[slug]/ClientProjectGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ClientProjectGallery({
  images,
  title,
  coverImage,
}: Readonly<{
  images: string[];
  title: string;
  coverImage: string;
}>) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const mergedImages = images.includes(coverImage)
    ? images
    : [coverImage, ...images];
  const allImages = Array.from(new Set(mergedImages));

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {allImages.map((img, imageIndex) => (
          <button
            key={img}
            type="button"
            className="cursor-pointer text-left"
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <Image
              src={img}
              alt={`${title} ${imageIndex + 1}`}
              width={600}
              height={400}
              unoptimized
              className="rounded-lg object-cover w-full h-72"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={allImages.map((src) => ({ src }))}
        index={index}
        plugins={[Zoom]}
      />
    </>
  );
}
