"use client";
import Image from "next/image";
import { useState } from "react";
export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="work-image">
      {failed ? (
        <span className="media-fallback">
          Product preview unavailable<small>Explore the case study →</small>
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 700px) 94vw, 60vw"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
