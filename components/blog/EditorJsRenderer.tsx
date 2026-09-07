import Image from "next/image";
import type { EditorData } from "@/types/content";
function clean(value: unknown) { return String(value || "").replace(/<[^>]*>/g, ""); }
function anchor(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
export function EditorJsRenderer({ content, format }: { content: EditorData | string; format: string }) {
  if (typeof content === "string" || format !== "editorjs") { const text = clean(content).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&"); return <div className="prose">{text.split(/\n{2,}/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}</div>; }
  return <div className="prose">{content.blocks.map((block, index) => { const d = block.data;
    if (block.type === "paragraph") return <p key={block.id || index}>{clean(d.text)}</p>;
    if (block.type === "header") { const value = clean(d.text); return Number(d.level) === 3 ? <h3 id={anchor(value)} key={block.id || index}>{value}</h3> : <h2 id={anchor(value)} key={block.id || index}>{value}</h2>; }
    if (block.type === "quote") return <blockquote key={block.id || index}><p>{clean(d.text)}</p>{d.caption ? <cite>{clean(d.caption)}</cite> : null}</blockquote>;
    if (block.type === "code") return <pre key={block.id || index}><code>{String(d.code || "")}</code></pre>;
    if (block.type === "delimiter") return <hr key={block.id || index}/>;
    if (block.type === "list") { const items = Array.isArray(d.items) ? d.items : []; const nodes = items.map((item, i) => <li key={i}>{clean(typeof item === "object" && item ? (item as Record<string, unknown>).content : item)}</li>); return d.style === "ordered" ? <ol key={block.id || index}>{nodes}</ol> : <ul key={block.id || index}>{nodes}</ul>; }
    if (block.type === "checklist") { const items = Array.isArray(d.items) ? d.items as Record<string, unknown>[] : []; return <ul className="checklist" key={block.id || index}>{items.map((item, i) => <li key={i}>[{item.checked ? "✓" : " "}] {clean(item.text)}</li>)}</ul>; }
    if (block.type === "table") { const rows = Array.isArray(d.content) ? d.content as unknown[][] : []; return <div className="table-wrap" key={block.id || index}><table><tbody>{rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{clean(cell)}</td>)}</tr>)}</tbody></table></div>; }
    if (block.type === "image") { const file = d.file as Record<string, unknown> | undefined; const url = String(file?.url || d.url || ""); return url ? <figure key={block.id || index}><Image src={url} alt={clean(d.caption) || "Article image"} width={1200} height={750}/>{d.caption ? <figcaption>{clean(d.caption)}</figcaption> : null}</figure> : null; }
    if (block.type === "embed") { const service = String(d.service || ""); const embed = String(d.embed || ""); return service === "youtube" && embed.startsWith("https://www.youtube.com/embed/") ? <figure className="video" key={block.id || index}><iframe src={embed} title={clean(d.caption) || "Embedded YouTube video"} loading="lazy" allowFullScreen/></figure> : null; }
    return null;
  })}</div>;
}
