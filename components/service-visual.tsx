function DocumentTile({ x, y, width = 45, height = 53, accent = false }: { x: number; y: number; width?: number; height?: number; accent?: boolean }) {
  return <g><rect x={x+2} y={y+4} width={width} height={height} rx="6" fill="#cbbddb" opacity=".45"/><rect x={x} y={y} width={width} height={height} rx="6" fill="#fff" stroke="#d5c9e3"/><rect x={x+9} y={y+10} width={width-18} height="5" rx="2.5" fill={accent?'#9d7bc8':'#c8b6dc'}/><path d={`M${x+9} ${y+24}h${width-18}m-${width-18} 7h${width-24}m-${width-24} 7h${width-29}`} stroke="#e1d8eb" strokeWidth="3" strokeLinecap="round"/></g>;
}

export function ServiceVisual({ type }: { type: string }) {
  const paper=`${type}-paper`, shade=`${type}-shade`, violet=`${type}-violet`, glass=`${type}-glass`;
  return <div className={`service-visual visual-${type}`} aria-hidden="true"><svg viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={paper} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#f0eaf7"/></linearGradient>
      <linearGradient id={violet} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e2d4f4"/><stop offset=".5" stopColor="#b69ad8"/><stop offset="1" stopColor="#8a68b1"/></linearGradient>
      <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".8"/><stop offset="1" stopColor="#dfd1f1" stopOpacity=".4"/></linearGradient>
      <radialGradient id={shade}><stop stopColor="#9d87b5" stopOpacity=".2"/><stop offset="1" stopColor="#9d87b5" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="150" cy="167" rx="115" ry="17" fill={`url(#${shade})`}/>
    {type==='ai' ? <>
      <ellipse cx="150" cy="102" rx="117" ry="52" stroke="#d4c7e4" strokeDasharray="2 5" transform="rotate(-18 150 102)"/>
      <ellipse cx="150" cy="102" rx="91" ry="40" stroke="#e2d8ed" strokeDasharray="2 5" transform="rotate(27 150 102)"/>
      <path d="m61 62 72 28m34 1 60-43m-57 56 59 30m-95-30-67 45" stroke="#c5b1dd" strokeDasharray="3 5"/>
      <g transform="rotate(-8 150 96)"><rect x="117" y="59" width="72" height="77" rx="19" fill="#bca5d7"/><rect x="113" y="53" width="72" height="77" rx="19" fill={`url(#${paper})`} stroke="#bfa9d8"/><image href="/brands/chatgpt.svg" x="132" y="72" width="34" height="34"/><path d="M133 117h32" stroke="#e3d8ed" strokeWidth="3" strokeLinecap="round"/></g>
      <DocumentTile x={37} y={36} width={46} height={49}/><DocumentTile x={211} y={22} width={42} height={48}/><DocumentTile x={224} y={119} width={40} height={43}/>
      <rect x="47" y="130" width="50" height="27" rx="8" fill="#e6f2d3" stroke="#bdcea3"/><path d="m58 144 5 5 10-12m7 5h7" stroke="#8da970" strokeWidth="2" strokeLinecap="round"/>
      <path d="M193 30v12m-6-6h12" stroke="#b6c995" strokeWidth="2"/>
    </> : type==='search' ? <>
      <rect x="43" y="111" width="213" height="42" rx="15" fill="#e1d8ed"/><rect x="36" y="101" width="228" height="44" rx="15" fill="#f2edf8" stroke="#e5dbee"/>
      <rect x="26" y="28" width="249" height="34" rx="17" fill={`url(#${paper})`} stroke="#d6cbe4"/><image href="/brands/google.svg" x="38" y="37" width="16" height="16"/>
      <path d="M65 44h137" stroke="#b7a3cf" strokeWidth="4" strokeLinecap="round"/><path d="M245 40v7m-4-4v3a4 4 0 0 0 8 0v-3m-4 7v4" stroke="#baa9ce" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="27" y="76" width="248" height="60" rx="13" fill={`url(#${paper})`} stroke="#cdbddb"/>
      <rect x="40" y="88" width="26" height="26" rx="8" fill="#dcecbe" stroke="#b5cb92"/><path d="m48 106 10-10m-8 0h8v8" stroke="#8ba361" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M78 92h76" stroke="#9573bd" strokeWidth="5" strokeLinecap="round"/><path d="M78 103h112M42 124h183" stroke="#d9cde6" strokeWidth="3" strokeLinecap="round"/>
      <path d="m233 117 2 30 9-11 13-2Z" fill={`url(#${violet})`} stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
    </> : type==='content' ? <>
      <path d="M31 151h237m-8-7 8 7-8 7" stroke="#cfc2df" strokeWidth="1.5"/>
      <g transform="rotate(-8 64 95)"><DocumentTile x={35} y={60} width={61} height={81}/></g>
      <g transform="rotate(-3 140 92)"><DocumentTile x={105} y={40} width={68} height={101} accent/></g>
      <g transform="rotate(5 217 91)"><DocumentTile x={184} y={24} width={73} height={117} accent/><rect x="197" y="83" width="46" height="29" rx="4" fill="#eee7f7"/><path d="m200 108 13-14 9 8 8-11 10 17" fill="#d6c5e9"/><circle cx="234" cy="91" r="3" fill="#b79ad5"/><circle cx="240" cy="126" r="8" fill="#ddecbd" stroke="#bbce99"/><path d="m237 126 2 2 4-5" stroke="#7f9b58" strokeWidth="1.5"/></g>
      <g transform="rotate(26 165 109)"><rect x="160" y="65" width="10" height="68" rx="3" fill={`url(#${violet})`} stroke="#ad91ca"/><path d="m160 130 5 13 5-13" fill="#ddd2e9" stroke="#ad91ca"/><path d="m164 140 1 3 1-3" stroke="#9673b7" strokeWidth="2"/></g>
    </> : type==='technical' ? <>
      <rect x="43" y="28" width="220" height="130" rx="9" fill="#d7cbe4"/><rect x="38" y="23" width="220" height="130" rx="9" fill={`url(#${paper})`} stroke="#c5b4d7"/>
      <path d="M38 43h220" stroke="#ded2e9"/><circle cx="50" cy="33" r="2.5" fill="#cab4dd"/><circle cx="59" cy="33" r="2.5" fill="#dac7e8"/><circle cx="68" cy="33" r="2.5" fill="#c5d7af"/>
      <rect x="51" y="54" width="101" height="56" rx="4" fill="#eae2f4"/><path d="m59 99 24-29 15 17 14-11 28 23" fill="#d1bfe4"/><circle cx="131" cy="66" r="5" fill="#c0a8d7"/>
      {[61,81,101].map(y=><g key={y}><circle cx="172" cy={y} r="6" fill="#dcebc5"/><path d={`m169 ${y} 2 2 4-5`} stroke="#8ca269" strokeWidth="1.4"/><path d={`M185 ${y}h54`} stroke="#d4c6e1" strokeWidth="3" strokeLinecap="round"/></g>)}
      <rect x="51" y="119" width="58" height="23" rx="4" fill="white" stroke="#dfd3e9"/><path d="M61 135a16 16 0 0 1 33 0" stroke="#d8c8e8" strokeWidth="4"/><path d="M61 135a16 16 0 0 1 24-14" stroke="#a98bca" strokeWidth="4"/><path d="m77 135 8-9" stroke="#8c72a9" strokeWidth="2"/>
      <path d="m122 137 17-8 13 4 20-12 18 6 18-9 31 4" stroke="#b4c88e" strokeWidth="2"/>
      <path d="m39 121-17 27" stroke="#aa8dc7" strokeWidth="13" strokeLinecap="round"/><circle cx="53" cy="102" r="25" fill={`url(#${glass})`} stroke={`url(#${violet})`} strokeWidth="8"/><path d="M39 97a15 15 0 0 1 10-10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </> : type==='authority' ? <>
      <path d="M69 46h24q13 0 13 16v12m129-28h-28q-13 0-13 16v12M68 144h25q13 0 13-16v-11m129 27h-28q-13 0-13-16v-11" stroke="#b59bd2" strokeWidth="1.5"/>
      <ellipse cx="151" cy="147" rx="73" ry="16" fill="#d6c6e4"/><path d="M78 138v9c0 20 146 20 146 0v-9" fill="#e4d9ee" stroke="#c9b6dc"/><ellipse cx="151" cy="138" rx="73" ry="16" fill={`url(#${paper})`} stroke="#d4c5e2"/>
      <rect x="99" y="67" width="109" height="67" rx="8" fill="#cdbadd"/><rect x="94" y="61" width="109" height="67" rx="8" fill={`url(#${paper})`} stroke="#bea6d3"/><path d="M94 76h109" stroke="#ded0e9"/><circle cx="104" cy="69" r="2" fill="#bd9dd5"/><circle cx="111" cy="69" r="2" fill="#d9c6e7"/>
      <rect x="104" y="85" width="37" height="30" rx="4" fill="#e6dcf1"/><path d="m106 111 12-14 8 8 9-10 4 16" fill="#c9b4df"/><path d="M151 90h39m-39 8h31" stroke="#d0bddf" strokeWidth="3" strokeLinecap="round"/><rect x="150" y="108" width="33" height="7" rx="3" fill="#d9e9bc"/>
      <DocumentTile x={32} y={22} width={39} height={44}/><DocumentTile x={226} y={22} width={39} height={44}/><DocumentTile x={27} y={121} width={41} height={43}/>
      <path d="m243 116 20 8v18c0 12-20 21-20 21s-20-9-20-21v-18Z" fill={`url(#${paper})`} stroke="#bfaccf"/><path d="m243 126 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z" fill="#bfd39a" stroke="#a5be7d"/>
    </> : <>
      <ellipse cx="151" cy="110" rx="90" ry="68" fill={`url(#${paper})`} stroke="#d6c9e3"/><ellipse cx="151" cy="110" rx="59" ry="68" stroke="#e0d5ea"/><ellipse cx="151" cy="110" rx="25" ry="68" stroke="#e0d5ea"/><path d="M66 87h170M62 113h178M75 140h152M151 42v136" stroke="#e0d5ea"/>
      <path d="m91 70 21-7 15 9 13 3-5 14-22 1-6 13-15-2-8-14Zm44 45 14-7 14 9 3 21-15 22-10-14 2-16Zm39-53 25 4 18 16-7 16-24-4-4-14-15-4Zm21 62 19-4 8 13-8 13-16-4Z" fill="#d4c4e5" opacity=".8"/>
      <ellipse cx="135" cy="117" rx="22" ry="7" fill="#b19aca" opacity=".22"/><path d="M135 113s-24-26-24-43a24 24 0 0 1 48 0c0 17-24 43-24 43Z" fill={`url(#${violet})`} stroke="#a88bc4"/><circle cx="135" cy="70" r="9" fill="#fbf8fe"/>
      <g transform="rotate(8 212 56)"><rect x="189" y="33" width="46" height="40" rx="11" fill="#d9cde5"/><rect x="187" y="28" width="46" height="40" rx="11" fill="white" stroke="#cfc1dc"/><image href="/brands/google.svg" x="200" y="37" width="20" height="20"/></g>
      <circle cx="203" cy="136" r="7" fill="#dcebbe" stroke="#b1c68e"/><circle cx="203" cy="136" r="13" stroke="#b1c68e" strokeDasharray="2 4"/>
    </>}
  </svg></div>;
}
