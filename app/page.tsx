export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track billable time with{" "}
          <span className="text-[#58a6ff]">automatic client invoicing</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log hours, auto-generate invoices, collect payments via Stripe, and send smart reminders — all in one place. Stop chasing clients. Start getting paid.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Free Trial — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to start. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⏱", title: "One-click Time Logging", desc: "Start a timer or log hours manually per client and project." },
            { icon: "📄", title: "Auto Invoice Generation", desc: "Invoices are created automatically from your logged hours." },
            { icon: "💳", title: "Stripe Payment Collection", desc: "Clients pay online instantly. Funds land in your account." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to run your freelance billing</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited clients & projects",
              "Automatic invoice generation",
              "Stripe payment integration",
              "Automated payment reminders",
              "Time tracking dashboard",
              "CSV & PDF export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does automatic invoice generation work?",
              a: "When you log hours against a client project, FreelanceTrack automatically compiles them into a professional invoice. You can review and send it with one click, or set it to send automatically at the end of each billing cycle."
            },
            {
              q: "Do my clients need an account to pay?",
              a: "No. Clients receive a payment link via email and can pay securely through Stripe without creating an account. Payments are deposited directly to your connected bank account."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, absolutely. You can cancel at any time from your account settings. You'll retain access until the end of your current billing period with no hidden fees."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} FreelanceTrack. All rights reserved.
      </footer>
    </main>
  );
}
