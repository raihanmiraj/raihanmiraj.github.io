"use client";
import Image from "next/image";
import { useRef, useState, useEffect, type RefObject } from "react";
import type { PersonalPhoto, PersonalVideo } from "@/data/profile";

function MediaViewer({
  photo,
  video,
  close,
  returnFocus,
}: {
  photo?: PersonalPhoto;
  video?: PersonalVideo;
  close: () => void;
  returnFocus: RefObject<HTMLButtonElement | null>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const focusTarget = returnFocus.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      focusTarget?.focus();
    };
  }, [returnFocus]);
  return (
    <dialog
      ref={dialog}
      className={`media-dialog ${video?.orientation === "portrait" ? "portrait-viewer" : ""}`}
      aria-label={photo?.caption || video?.title}
      onCancel={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="viewer-header">
        <span>{photo?.caption || video?.title}</span>
        <button
          type="button"
          onClick={close}
          autoFocus
          aria-label="Close media viewer"
        >
          Close ×
        </button>
      </div>
      {video ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
          title={video.title}
          allow="encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : photo ? (
        <div className="viewer-photo">
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            sizes="90vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      ) : null}
      <div className="viewer-caption">
        {video ? (
          <>
            <p>{video.description}</p>
            <a href={video.url} target="_blank" rel="noreferrer">
              Watch on YouTube ↗
            </a>
          </>
        ) : (
          <p>{photo?.caption}</p>
        )}
      </div>
    </dialog>
  );
}
export function MediaCard({
  photo,
  video,
  className = "",
}: {
  photo?: PersonalPhoto;
  video?: PersonalVideo;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const title = photo?.caption || video?.title || "Media";
  const close = () => setOpen(false);
  return (
    <figure
      className={`personal-media ${video ? "video-card" : "photo-card"} ${className}`}
      data-media-id={photo?.id || video?.youtubeId}
    >
      <button
        ref={trigger}
        type="button"
        className="media-trigger"
        onClick={() => setOpen(true)}
        aria-label={`${video ? "Open video" : "Enlarge photo"}: ${title}`}
      >
        <div className="media-image">
          {!failed ? (
            <Image
              src={
                photo?.url ||
                `https://i.ytimg.com/vi/${video!.youtubeId}/hqdefault.jpg`
              }
              alt={photo?.alt || `Preview of ${video!.title}`}
              fill
              sizes="(max-width: 600px) 94vw, (max-width: 1000px) 48vw, 40vw"
              style={{
                objectFit: "cover",
                objectPosition: photo?.position || "50% 50%",
              }}
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="media-fallback">
              {title}
              <small>{video ? "Open video" : "Open original photo"} ↗</small>
            </span>
          )}
          <span className="media-action" aria-hidden="true">
            {video ? "▶" : "↗"}
          </span>
          {video?.orientation === "portrait" && (
            <span className="media-format">Short film · Vertical</span>
          )}
        </div>
      </button>
      <figcaption>
        <span>{title}</span>
        <small>{video?.description || photo?.category}</small>
        {video ? (
          <a href={video.url} target="_blank" rel="noreferrer">
            Watch on YouTube ↗
          </a>
        ) : null}
      </figcaption>
      {open && (
        <MediaViewer
          photo={photo}
          video={video}
          close={close}
          returnFocus={trigger}
        />
      )}
    </figure>
  );
}
