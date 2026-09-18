export function ServiceVisual({ type }: { type: string }) {
  return (
    <div className={`service-visual visual-${type}`} aria-hidden="true">
      <svg viewBox="0 0 280 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'search' ? <>
          <rect x="29" y="14" width="222" height="35" rx="7" fill="white" stroke="#b9a8db"/>
          <circle cx="48" cy="30" r="6" stroke="#7958c5" strokeWidth="2"/><path d="m52 35 4 4" stroke="#7958c5" strokeWidth="2"/>
          <path d="M67 29h125M67 35h76" stroke="#c4b4de" strokeWidth="3" strokeLinecap="round"/>
          <rect x="41" y="60" width="198" height="54" rx="6" fill="white" stroke="#d4cbdf"/>
          <rect x="52" y="71" width="24" height="24" rx="5" fill="#dcf3b7" stroke="#b5cd8b"/>
          <path d="m59 88 9-9m-8 0h8v8" stroke="#678343" strokeWidth="1.6"/>
          <path d="M86 76h103" stroke="#8e73be" strokeWidth="4" strokeLinecap="round"/>
          <path d="M86 87h127M86 95h93" stroke="#ddd5e8" strokeWidth="3" strokeLinecap="round"/>
          <path d="m217 88 3 24 6-8 10-1Z" fill="#7958c5" stroke="white" strokeWidth="2"/>
        </> : type === 'spark' ? <>
          <path d="m70 35 64 30m-64 32 64-32m76-30-64 30m64 32-64-32" stroke="#c0aedc" strokeWidth="1.5" strokeDasharray="4 4"/>
          <rect x="112" y="37" width="56" height="56" rx="13" fill="white" stroke="#b4a0d4"/>
          <path d="M140 47c0 12-6 18-18 18 12 0 18 6 18 18 0-12 6-18 18-18-12 0-18-6-18-18Z" fill="#dacaef" stroke="#7958c5" strokeWidth="1.5"/>
          {[{x:42,y:16},{x:191,y:16},{x:42,y:78},{x:191,y:78}].map(({x,y})=><g key={`${x}-${y}`}><rect x={x} y={y} width="47" height="34" rx="6" fill="white" stroke="#c8bbdc"/><path d={`M${x+10} ${y+12}h27M${x+10} ${y+20}h18`} stroke="#a891c5" strokeWidth="3" strokeLinecap="round"/></g>)}
          <circle cx="163" cy="88" r="10" fill="#d9f4b0" stroke="#b7cc90"/><path d="m159 88 3 3 5-6" stroke="#627f3a" strokeWidth="1.7"/>
        </> : <>
          <rect x="41" y="24" width="119" height="83" rx="7" fill="#e8e0f3" stroke="#c6b8d9" transform="rotate(-7 41 24)"/>
          <rect x="71" y="20" width="152" height="91" rx="7" fill="white" stroke="#bba7d5"/>
          <path d="M84 39h47M84 50h76" stroke="#c6b4df" strokeWidth="4" strokeLinecap="round"/>
          <rect x="83" y="68" width="74" height="25" rx="4" fill="#e2f5bc" stroke="#bace97"/>
          <path d="M94 80h37m-5-4 5 4-5 4" stroke="#687c46" strokeWidth="1.5"/>
          <circle cx="199" cy="51" r="23" fill="#f5effc" stroke="#b29acf"/><circle cx="199" cy="51" r="14" stroke="#b29acf"/><circle cx="199" cy="51" r="5" fill="#8763be"/>
          <path d="m199 51 27-28m-9 1 9-1-1 9" stroke="#7958c5" strokeWidth="2" strokeLinecap="round"/>
        </>}
      </svg>
    </div>
  );
}
