const steps= [
    {num:'01', title:'Connect', text:'Send transaction information to Sentri'},
    {num:'02', title: 'Check', text: 'Nine checks across five risk categories.'},
    {num:'03', title : 'Decide', text: 'A clear verdict with a plain-language reason.'}
]

export default function HowItWorks(){
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                <span className="h-3 w-3 bg-accent"/>
How it works
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Three steps, one clear answer</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
{steps.map((step,i)=>(
        <div key={step.num}>
            <div className="flex items-center gap-4">
                <span className="font-display text-7xl leading-none text-transparent [-webkit-text-stroke:2px_#171717]">
{step.num}
                </span>
                {i < steps.length - 1 && (
                    <div className="hidden flex-1 border-t-2 border-dashed border-ink md:block"></div>
                )}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs"> {step.text}</p>
        </div>
))}

            </div>
        </section>
    )
}