State.js

// State Management in React
// State is data that can change inside the component, and when the state changes, React re-renders the component.

const conferenceData = {
  name: "React Summit 2026",
  maxCapacity: 5,
  attendees: [
    { id: 1, name: "Alice Johnson", role: "Speaker", isCheckedIn: true, isVIP: true },
    { id: 2, name: "Bob Smith", role: "Attendee", isCheckedIn: false, isVIP: false },
    { id: 3, name: "Charlie Davis", role: "Volunteer", isCheckedIn: true, isVIP: false },
    { id: 4, name: "Diana Prince", role: "Speaker", isCheckedIn: false, isVIP: true },
    { id: 5, name: "Evan Wright", role: "Attendee", isCheckedIn: true, isVIP: false },
  ],
};

function ParticipantCard({ name, role, isVIP, isCheckedIn }) {
  const initials = name.split(" ").map((part) => part[0]).join("");

  return (
    <article className="flex min-h-[76px] items-center justify-between gap-3 border-t border-emerald-950/10 px-4 py-3 first:border-t-0 sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-900" aria-hidden="true">
          {initials}
        </span>
        <div className="min-w-0">
          <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
            {name}
            {isVIP && <span className="rounded-sm border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-800">★ VIP</span>}
          </h3>
          <p className="mt-1 text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <span className={`flex shrink-0 items-center gap-2 text-[11px] font-semibold sm:text-xs ${isCheckedIn ? "text-emerald-800" : "text-rose-700"}`}>
        <span className={`size-2 rounded-full ${isCheckedIn ? "bg-emerald-500" : "bg-rose-500"}`} aria-hidden="true" />
        {isCheckedIn ? "Checked In" : "Not Arrived"}
      </span>
    </article>
  );
}

export default function State() {
  const { attendees, maxCapacity, name } = conferenceData;
  const checkedInCount = attendees.filter((attendee) => attendee.isCheckedIn).length;
  const vipCount = attendees.filter((attendee) => attendee.isVIP).length;
  const isOverCapacity = attendees.length > maxCapacity;

  return (
    <main className="min-h-screen bg-[#f2f5f0] text-slate-900">
      <header className="flex h-16 items-center justify-between bg-[#172b25] px-5 text-white sm:px-8">
        <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest">
          <span className="flex size-8 items-center justify-center rounded bg-lime-300 font-serif text-lg text-emerald-950">S</span>
          <span>SUMMIT <span className="font-medium text-emerald-100/60">/ DESK</span></span>
        </div>
        <span className="text-[10px] font-bold tracking-widest text-emerald-100/60">EVENT OPERATIONS</span>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
        <section className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-emerald-800">ATTENDEE OVERVIEW <span className="px-1 text-slate-400">·</span> 2026</p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-[42px]">{name}</h1>
            <p className="mt-2 text-sm text-slate-500">Event dashboard</p>
          </div>
          <span className="flex items-center gap-2 pb-1 text-[10px] font-bold tracking-widest text-slate-600"><span className="size-2 rounded-full bg-emerald-500" /> ROSTER LIVE</span>
        </section>

        {isOverCapacity && (
          <div className="mb-5 flex items-center gap-3 rounded border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900" role="alert">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-rose-400 text-xs font-bold">!</span>
            <strong>Warning: Event is at capacity!</strong>
          </div>
        )}

        <section className="mb-9 grid grid-cols-3 divide-x divide-emerald-950/10 rounded border border-emerald-950/10 bg-white" aria-label="Event summary">
          <div className="flex min-h-32 flex-col p-3 sm:p-5">
            <span className="mb-3 text-[9px] font-bold tracking-widest text-slate-500 sm:text-[10px]">REGISTERED</span>
            <strong className="font-serif text-2xl font-medium sm:text-3xl">{attendees.length}<span className="font-sans text-xs text-slate-500"> / {maxCapacity}</span></strong>
            <span className="mt-2 text-[10px] text-amber-800 sm:text-[11px]">{attendees.length >= maxCapacity ? "Capacity reached" : `${maxCapacity - attendees.length} spaces remaining`}</span>
          </div>
          <div className="flex min-h-32 flex-col p-3 sm:p-5">
            <span className="mb-3 text-[9px] font-bold tracking-widest text-slate-500 sm:text-[10px]">CHECKED IN</span>
            <strong className="font-serif text-2xl font-medium sm:text-3xl">{checkedInCount}<span className="font-sans text-xs text-slate-500"> / {attendees.length}</span></strong>
            <span className="mt-2 text-[10px] text-slate-500 sm:text-[11px]">Attendees on site</span>
          </div>
          <div className="flex min-h-32 flex-col p-3 sm:p-5">
            <span className="mb-3 text-[9px] font-bold tracking-widest text-slate-500 sm:text-[10px]">VIP GUESTS</span>
            <strong className="font-serif text-2xl font-medium sm:text-3xl">{vipCount}<span className="font-sans text-xs text-slate-500"> people</span></strong>
            <span className="mt-2 text-[10px] text-slate-500 sm:text-[11px]">Priority access</span>
          </div>
        </section>

        <section aria-labelledby="roster-title">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 id="roster-title" className="font-serif text-2xl font-medium">Attendee roster</h2>
              <p className="mt-1 text-xs text-slate-500">Participant details and arrival status</p>
            </div>
            <span className="pb-1 text-[9px] font-bold tracking-widest text-slate-500 sm:text-[10px]">{attendees.length} ATTENDEES</span>
          </div>
          <div className="overflow-hidden rounded border border-emerald-950/10 bg-white">
            {attendees.map((attendee) => <ParticipantCard key={attendee.id} {...attendee} />)}
          </div>
        </section>
        <footer className="mt-7 text-right text-[9px] font-bold tracking-widest text-slate-400">SUMMIT DESK <span className="px-1">·</span> {name}</footer>
      </div>
    </main>
  );
}

// Activities : 
// 1. chnge the theme using use state white-> black
// 2. Initially display "your bestfriend's name". Hide it when clicking the button.

// 3. `Product Wishlist` :

// Build a Product Wishlist using React `useState`.
// Requirements:

// Display a product name , detail and price.
// Add a Wishlist button.
// Toggle between ♡Add to Wishlist and ❤️Added to Wishlist.
// Display the current wishlist status.
