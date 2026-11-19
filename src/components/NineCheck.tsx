import {
    ArrowLeftRight, Fingerprint, KeyRound,
    Layers, MapPin, Smartphone, TrendingUp, Wallet, Zap,
} from "lucide-react";

const checks = {
    login: {title: 'Login Integrity', text: 'Failed logins , or a login that does not match the usual device', Icon: KeyRound},
    device: {title:'New Device', text:'A device this account has never used before.', Icon:Smartphone},
    travel:{title:'Impossible Travel', text:'Two locations too far apart for the time between them', Icon:MapPin},
    volume:{title:'Volume', text:'An amount far above what this customer usually sends.', Icon:TrendingUp},
    drain:{title:'Balance Drain', text:'One transfer that takes about 90% of the balance', Icon:Wallet},
    pattern:{title:'User pattern', text:'A break from how this customer normally behaves', Icon:Fingerprint},
    structuring:{title:'Structuring', text:'The same amount sent again and again to stay under limit s.', Icon:Layers},
    velocity:{title:"Velocity", text:'Money leaving much faster than usual.', Icon:Zap},
    spike:{title:'Transaction Spike', text:'Big money in, then quick series going out.', Icon:ArrowLeftRight}
}

type CheckKey = keyof typeof checks;
const buckets :{name:string; note:string; checks:CheckKey[]}[]=[
    {name:'Account compromise', note:'Someone else maybe using your account.', checks:['login', 'device', 'travel']},
    {name:'Amount Anomaly', note: 'The amount is unusual for this customer.', checks:['volume','drain','pattern']},
    {name:'AML Structuring', note: "Money is being split to dodge limits", checks:['structuring']},
    {name:'Automation Abuse', note: "A script maybe moving the money", checks:['velocity', 'spike']},
    {name:'Geo Anomaly', note:'The location is wrong for this customer.', checks:['travel']},
]

export default function NineChecks(){
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
    <span className="w-3 h-3 bg-accent"/>
    What we check
</p>
            <h2 className="font-display mt-4 text-4xl
            md:text-5xl tracking-tight">Nine Checks. Five risk categories. One clear decision</h2>
            <div className="mt-12 grid gap-8 md:grid:cols-2 lg:grid-cols-3">
                {buckets.map((bucket) => (
                    <div key={bucket.name} className="card-lift border-2 border-ink bg-white p-6 shadow-hard">
                        <h3 className="font-display text-xl tracking-tight">{bucket.name}</h3>
                        <p className="mt-1 text-sm text-muted">{bucket.note}</p>
                        <ul className="mt-5 space-y-4">
                            {bucket.checks.map((key)=>{
                                const {title, text, Icon} = checks[key];
                                return(
                                    <li key={key} className="flex gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center
                                        justify-center border-2 border-ink bg-accent-tint">
                                            <Icon size={20}/>
                                        </span>
                                        <div>
                                            <p className="font-bold">{title}</p>
                                            <p className="text-sm">{text}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}

            </div>
        </section>
    )
}