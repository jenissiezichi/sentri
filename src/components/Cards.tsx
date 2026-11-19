import {Check, Clock, ShieldX} from 'lucide-react'
const verdicts = [
    {label: 'Approved', text: 'Everthing looks normal. The transfer goes through.', Icon:Check, color:'bg-approved'},
    {label: 'Held', text: 'Somrthing looks dofferent. We pause it for a closer look.', Icon:Clock, color:'bg-held'},
    {label: 'Blocked', text : "This looks like it may not be you. We stop it to protect your account", Icon:ShieldX, color:'bg-blocked'}
]

export default function Cards(){
    return(
        <section className="mx-auto max-w-6xl px-6 py-16">
<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
<span className="w-3 h-3 bg-accent"></span>
The Verdicts
</p>
<h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
Every trasnfer gets a clear answer.
</h2>

<div className="mt-12 grid gap-8 md:grid-cols-3">
{verdicts.map(({label, text, Icon, color})=>(
    <div key={label} className='card-lift border-2 border-ink bg-white p-6 shadow-hard'>
     <div className={`inline-flex items-center gap-2 border-2 border-ink px-3 py-1 font-bold text-white ${color}`}>
      <Icon size={20}/>
      {label}
        </div>
        <p className='mt-4'>{text}</p>
        </div>
))}
</div>
        </section>
    )
}