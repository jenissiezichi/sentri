export default function ApiSection(){
    return(
        <section className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid items-center gap-10 border-2 border-ink bg-ink p-8 text-paper shadow-hard md:grid-cols-2
            md:p-12">
                <div>
                    <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                        <span className="w-3 h-3 bg-accent"/>
                        For banks and Fintech
                    </p>
                    <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                        Plug in through one Api
                    </h2>
                    <p className=" mt-4 max-w-md text-lg">
Send us a transaction and get back a  verdict and a plain-language reason. No rebuild of your app.
                    </p>
                </div>
<pre className="overflow-x-auto border-2 border-paper bg-black p-5 text-sm leading-relaxed">
    {`post /api/fraud/check
    {
    "verdict": "held",
    "risk_sciore": "72"
    "reason": "New device and an unusually large amount.}
    `}
    </pre>            </div>
        </section>

    )
}