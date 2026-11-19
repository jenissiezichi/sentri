const names = [
    'Velocity','Volume','Impossible', 'Impossible Travel', 'Login Integrity',
    'New device', 'Structuring', 'Transaction spike', 'User pattern', 'Balance drain'
]

export default function Ticket (){
const items = [...names, ...names]

    return(
        <div aria-hidden={true} className="overflow-hidden py-10">
        <div className="-mx-12 -rotate-1 border-y-2 border-ink bg-ink py-3 text-paper">
            <div className="flex w-max animate-marquee whitespace-nowrap font-display uppercase
            tracking-widest motion-reduce:animate-none">
                {items.map((name,i) => (
                    <span key={i} className="flex items-center gap-8 pr-8">
                      {name}
                        <span className="h-2 w-2 bg-accent"/>
                    </span>
                ))}

            </div>
        </div>
        </div>
    )
}