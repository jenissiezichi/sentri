import{Mail , ShieldAlert} from 'lucide-react'
export default function MeetPurge(){
return(
    <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid items-center gap-10 border-2 border-ink bg-paper-dark p-8 shadow-hard
         md:grid-cols-2 md:p-12">
<div>
    <p className='flex items-center gap-1 text-sm font-bold uppercase tracking-widest'>
        <span className='h-3 w-3 bg-accent'/>
        <img src='./purge.png' className='w-6'/>
        Meet Purge
    </p>
    <h2 className='mt-4 font-display text-4xl tracking-tight md:text-5xl'>
Catch trick before the theft
    </h2>
    <p className='mt-4 max-w-md text-lg'>
Purge scans bank-related emails (with your consent), warns you in plain English, and lets you block the sender. Nothing
is deleted automatically
    </p>
</div>

<div className='card-lift relative mx-auto'>
    <div className='flex h-40 w-56 items-center justify-center border-2 border-ink
    bg-white shadow-hard'>
        <Mail size={72} strokeWidth={1.5}/>
    </div>
    <div className='absolute -right-4 -top-4 flex items-center gap-1 border-2 border-ink
     bg-blocked px-3 py-1 text-sm font-bold text-white'>
<ShieldAlert size={16}/>
Suspicious
</div>
</div>
        </div>

    </section>
)
}