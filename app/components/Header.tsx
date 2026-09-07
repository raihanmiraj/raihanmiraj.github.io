"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { profile } from "@/data/profile";
const nav = [
  ["Work", "/projects"],
  ["Experience", "/#experience"],
  ["Journal", "/blogs"],
  ["About", "/about"],
  ["Contact", "/#contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container nav-shell">
        <Link className="wordmark" href="/" aria-label="Raihan Miraj, home">
          RM<span>.</span>
        </Link>
        <button
          ref={toggle}
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          {open ? "Close ×" : "Menu +"}
        </button>
        <nav
          id="site-nav"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Primary"
        >
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
          <a className="button small" href={`mailto:${profile.email}`}>
            Let&apos;s talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
