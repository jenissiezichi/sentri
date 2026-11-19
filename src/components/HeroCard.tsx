import { Check, Clock, ShieldCheck } from 'lucide-react'

export default function HeroCards() {
    return (
        <div className="relative mx-auto h-80 w-full max-w-sm">
            <div className="absolute right-0 top-0 w-60 rotate-3 border-2 border-ink bg-white p-5 shadow-hard">
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Example</p>
                <p className="mt-1 font-display text-2xl">₦12,500</p>
                <div className="mt-3 inline-flex items-center gap-2 border-2 border-ink bg-approved px-3 py-1 text-sm font-bold text-white">
                    <Check size={16} />
                    Approved
                </div>
            </div>

            <div className="card-lift absolute bottom-0 left-0 w-72 -rotate-2 border-2 border-ink bg-white p-6 shadow-hard">
                <div className="absolute -right-4 -top-4 border-2 border-ink bg-accent p-2 text-white">
                    <ShieldCheck size={24} />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-muted">Example</p>
                <p className="mt-1 font-display text-3xl">₦480,000</p>
                <p className="text-sm">Transfer to Amara Eze</p>

                <div className="mt-4 inline-flex items-center gap-2 border-2 border-ink bg-held px-3 py-1 font-bold text-ink">
                    <Clock size={18} />
                    Held
                </div>

                <div className="mt-4 border-2 border-ink p-3">
                    <p className="text-xs font-bold uppercase tracking-widest">Why this decision?</p>
                    <p className="mt-1 text-sm">New device and an unusually large amount.</p>
                </div>
            </div>
        </div>
    )
}