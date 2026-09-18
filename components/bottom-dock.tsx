import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  home: <><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
  services: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M10 7v6m-3-3h6"/></>,
  process: <><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h4"/></>,
  about: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
  book: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"/></>,
};
const items = [
  { id:'home', href:'#main', label:'Home' },
  { id:'services', href:'#services', label:'Services' },
  { id:'process', href:'#approach', label:'Process' },
  { id:'about', href:'#about', label:'About' },
  { id:'book', href:'#booking', label:'Book a call' },
];
export function BottomDock() {
  return <nav className="bottom-dock" aria-label="Main navigation">{items.map(item=><a key={item.id} href={item.href} className={`dock-item dock-${item.id}`}><span className="dock-icon"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[item.id]}</svg></span><span className="dock-label">{item.label}</span></a>)}</nav>;
}
