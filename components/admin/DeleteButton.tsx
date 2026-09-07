"use client";
import React from "react";
import { useRouter } from "next/navigation";
export function DeleteButton({ endpoint, label = "Delete" }: { endpoint:string; label?:string }) { const router=useRouter(); const [busy,setBusy]=React.useState(false); return <button className="danger-link" disabled={busy} onClick={async()=>{ if(!confirm(`Delete this ${label.toLowerCase()}? This cannot be undone.`)) return; setBusy(true); const response=await fetch(endpoint,{method:"DELETE"}); setBusy(false); if(response.ok) router.refresh(); else alert("Delete failed."); }}>{busy?"Deleting…":label}</button>; }
