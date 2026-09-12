import { useEffect, useRef, useState } from 'react';
export type Booking = { plan: string; session?: string };
export default function BookingDialog({ booking, close }: { booking: Booking | null; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [complete, setComplete] = useState(false);
  useEffect(() => { if (booking) { setComplete(false); ref.current?.showModal(); document.body.style.overflow = 'hidden'; } else { ref.current?.close(); document.body.style.overflow = ''; } return () => { document.body.style.overflow = ''; }; }, [booking]);
  return <dialog ref={ref} onCancel={close} onClick={e => { if (e.target === ref.current) close(); }} aria-labelledby="booking-title">
    <button className="close-button" onClick={close} aria-label="Close booking">×</button>
    {complete ? <div className="booking-success"><span className="wordmark">FORGE 44</span><h2 id="booking-title">You're ready<br/>for Unit 44.</h2><p>Your session selection is complete. This is a fictional portfolio concept, so no booking has been made and no personal details have been sent or saved.</p><button className="button" onClick={close}>Back to the floor</button></div> : <><span className="small-label">Your first step</span><h2 id="booking-title">Let's get<br/>you training.</h2><p>Meet a coach, find your starting point, and get a feel for the floor.</p><form onSubmit={e => { e.preventDefault(); setComplete(true); }}>
      <label>Your name<input name="name" autoComplete="name" required placeholder="Full name" maxLength={100}/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
      <label>Training option<select name="plan" defaultValue={booking?.plan} key={booking?.plan}><option>First session</option><option>Drop in</option><option>8 sessions</option><option>Unlimited</option><option>Personal coaching</option></select></label>
      <label>Preferred session<select name="session" defaultValue={booking?.session || 'Monday · 07:00'} key={booking?.session}>{['Monday · 07:00','Monday · 18:00','Tuesday · 07:00','Tuesday · 19:00','Wednesday · 07:00','Wednesday · 18:00','Thursday · 07:00','Thursday · 19:00','Friday · 07:00','Friday · 17:30','Saturday · 09:00','Saturday · 11:00'].map(s => <option key={s}>{s}</option>)}</select></label>
      <p className="form-note">Portfolio concept. Explore the booking experience; no information is sent or stored.</p><button className="button" type="submit">Preview your session</button>
    </form></>}
  </dialog>;
}
