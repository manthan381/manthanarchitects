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
}: {
  images: string[];
  title: string;
  coverImage: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Combine coverImage with other images if not already included
  const allImages = images.includes(coverImage)
    ? images
    : [coverImage, ...images];

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {allImages.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={img}
              alt={`${title} ${i + 1}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-72"
            />
          </div>
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
