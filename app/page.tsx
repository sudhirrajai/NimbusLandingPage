"use client";

import {
  Terminal,
  GitBranch,
  Globe,
  Lock,
  Database,
  Clock,
  Activity,
  Code2,
  Server,
  Folder,
  HardDrive,
  CheckCircle2,
  ChevronRight,
  Check,
  Blocks,
  Wifi,
  Shield,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-light text-slate-900 font-sans selection:bg-brand-indigo selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-border-soft bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-blue flex items-center justify-center text-white font-bold font-display text-xl leading-none">
              N
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Nimbus
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-brand-indigo transition-colors">Features</a>
            <a href="#usp" className="hover:text-brand-indigo transition-colors">Agencies</a>
            <a href="#pricing" className="hover:text-brand-indigo transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Log in</a>
            <a href="#cta" className="text-sm font-medium bg-brand-indigo text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors shadow-sm shadow-brand-indigo/20">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-pink blur-[100px] rounded-full mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] tracking-tight text-slate-900 mb-6 drop-shadow-sm">
                Own Your Server.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-blue">
                  Control Everything.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                A clean, powerful control panel for your VPS. Deploy apps, manage services, handle databases — all from one simple dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-brand-indigo text-white px-6 py-3.5 rounded-xl font-medium hover:bg-indigo-600 transition-all shadow-lg shadow-brand-indigo/30 hover:shadow-brand-indigo/40 active:scale-[0.98]">
                  Get Started Free
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-[0.98]">
                  View Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Open Source Core</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Screenshot */}
            <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-border-soft bg-white flex items-center justify-center group lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out origin-bottom-left animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              {/* 
                  INSTRUCTION FOR USER: 
                  Please upload your actual dashboard screenshot to the 'public' folder and name it 'dashboard.png'.
                  It will automatically appear here!
               */}
              <img
                src="/images/dashboard.png"
                alt="Nimbus Dashboard"
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  // Fallback if image isn't uploaded yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              {/* Fallback container */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-50 z-0 text-center px-6">
                <Folder className="w-12 h-12 mb-4 text-slate-300" />
                <p className="font-medium text-slate-600 mb-2">Awaiting your screenshot</p>
                <p className="text-sm">Upload your dashboard image as <code className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono text-xs">/public/dashboard.png</code> in the file explorer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border-soft bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in duration-700 delay-300">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
            Built for developers and agencies managing real production servers
          </p>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Server, title: "Self-Hosted", desc: "Full control. No SaaS dependency. You own the hardware, we provide the panel.", color: "text-white", bg: "bg-brand-indigo" },
              { icon: Zap, title: "Lightweight", desc: "Runs amazingly fast with minimal resources. Leaves RAM for your actual apps.", color: "text-white", bg: "bg-brand-orange" },
              { icon: Code2, title: "Developer First", desc: "Built for real modern workflows, not your grandpa's shared hosting environment.", color: "text-white", bg: "bg-brand-blue" },
              { icon: Shield, title: "Secure", desc: "Your server, your data. Isolated environments and secure-by-default configurations.", color: "text-white", bg: "bg-brand-green" },
            ].map((prop, i) => (
              <div key={i} className="p-6 transition-all hover:-translate-y-1 duration-300">
                <div className={`w-12 h-12 rounded-xl ${prop.bg} shadow-md flex items-center justify-center mb-6`}>
                  <prop.icon className={`w-6 h-6 ${prop.color}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{prop.title}</h3>
                <p className="text-slate-600 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white border-y border-border-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Everything you need to ship.</h2>
            <p className="text-lg text-slate-600">A complete suite of server management tools perfectly organized in a clean interface.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { icon: GitBranch, label: "Git Deployments", color: "text-slate-700", bg: "bg-slate-100" },
              { icon: Globe, label: "Domains & DNS", color: "text-brand-blue", bg: "bg-blue-50" },
              { icon: Lock, label: "SSL Certificates", color: "text-brand-green", bg: "bg-green-50" },
              { icon: Database, label: "Databases", color: "text-indigo-600", bg: "bg-indigo-50" },
              { icon: Clock, label: "Cron Jobs", color: "text-brand-orange", bg: "bg-orange-50" },
              { icon: Activity, label: "Supervisor", color: "text-brand-pink", bg: "bg-pink-50" },
              { icon: Code2, label: "PHP Manager", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Server, label: "Nginx Config", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: Folder, label: "File Manager", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: HardDrive, label: "Backups", color: "text-slate-600", bg: "bg-slate-100" },
              { icon: Blocks, label: "WordPress Manager", color: "text-cyan-600", bg: "bg-cyan-50" },
              { icon: Wifi, label: "Firewall (UFW)", color: "text-red-500", bg: "bg-red-50" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border-soft hover:border-slate-300 hover:shadow-md transition-all bg-white group cursor-default">
                <div className={`w-10 h-10 rounded-lg ${feature.bg} shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Show UI Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">A Control Panel You&apos;ll Actually Enjoy Using</h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">Get absolute clarity into your server&apos;s health, CPU, RAM, and active processes without digging into the terminal.</p>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-b from-slate-200 to-transparent opacity-30 blur-2xl rounded-3xl" />
            <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
              <img
                src="/images/dashboard.png"
                alt="Nimbus UI Details"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-50 z-0 text-center px-6 min-h-[400px]">
                <p className="font-medium text-slate-600">UI Showcase Placeholder</p>
                <p className="text-sm">Upload <code className="bg-slate-200 text-slate-700 px-1 py-0.5 rounded font-mono text-xs">/public/dashboard.png</code></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">From zero to deployed in minutes.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-slate-200" />

            {[
              { step: "1", title: "Install Nimbus", desc: "Run a single bash command on your fresh Ubuntu VPS to get the panel running." },
              { step: "2", title: "Configure Server", desc: "Add domains, provision SSLs, and set up your preferred PHP or Node environments from the UI." },
              { step: "3", title: "Deploy & Manage", desc: "Push code from GitHub or GitLab, manage services, and monitor resource usage." },
            ].map((process, i) => (
              <div key={i} className="relative text-center">
                <div className="w-14 h-14 bg-white border-2 border-brand-indigo text-brand-indigo rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-6 relative z-10 shadow-sm shadow-brand-indigo/10">
                  {process.step}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Block */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl mb-8">Ready to take control?</h2>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl relative max-w-2xl mx-auto text-left group">
            <div className="absolute top-0 right-0 p-4">
              <button className="text-slate-400 hover:text-white transition-colors" title="Copy to clipboard">
                <Code2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-400 font-mono text-sm mb-2 select-none"># Execute on a fresh Ubuntu 22.04 / 24.04 server</p>
            <code className="font-mono text-brand-green text-lg">
              bash &lt;(curl -s https://nimbus.sh/install)
            </code>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="usp" className="py-24 bg-white border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-3xl p-8 md:p-16 border border-indigo-100 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200 text-brand-indigo text-sm font-medium mb-6">
                <Shield className="w-4 h-4" /> User Isolation (Coming Soon)
              </div>
              <h2 className="font-display font-bold text-4xl text-slate-900 mb-6">Built for Agencies</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Give your clients secure access to only their websites, isolated at the system level. Manage multiple clients without exposing your entire server architecture or risking cross-site contamination.
              </p>
              <ul className="space-y-3">
                {["Per-user SSH/SFTP jails", "Resource limits per site", "Client-safe dashboard view"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative w-full aspect-square md:aspect-auto md:h-[400px] bg-white rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-900/5 flex items-center justify-center p-8">
              {/* Abstract illustration of isolation */}
              <div className="relative w-full h-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-brand-indigo/5 rounded-2xl border border-dashed border-brand-indigo/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-xl shadow-lg border border-slate-100 z-20 flex items-center justify-center">
                  <Lock className="w-10 h-10 text-brand-indigo" />
                </div>
                <div className="absolute top-8 left-8 w-24 h-24 bg-brand-blue/10 rounded-lg border border-brand-blue/20 z-10 flex items-center justify-center">
                  <Folder className="w-8 h-8 text-brand-blue/60" />
                </div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-brand-green/10 rounded-lg border border-brand-green/20 z-10 flex items-center justify-center">
                  <Database className="w-8 h-8 text-brand-green/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-bg-light border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Why choose Nimbus?</h2>
            <p className="text-lg text-slate-600">Compare with other standard control panels.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-border-soft text-slate-600 text-sm font-medium">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-brand-indigo font-bold">Nimbus</th>
                    <th className="py-4 px-6">cPanel</th>
                    <th className="py-4 px-6">CyberPanel</th>
                    <th className="py-4 px-6">Forge</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6 font-medium">Paradigm</td>
                    <td className="py-4 px-6 font-bold text-slate-900">Self-Hosted Panel</td>
                    <td className="py-4 px-6">Shared Hosting</td>
                    <td className="py-4 px-6">Self-Hosted Panel</td>
                    <td className="py-4 px-6">SaaS Connect</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <td className="py-4 px-6 font-medium">Resource Usage</td>
                    <td className="py-4 px-6"><span className="text-brand-green font-medium">Ultra-light</span></td>
                    <td className="py-4 px-6 text-red-500">Very Heavy</td>
                    <td className="py-4 px-6 text-orange-500">Medium</td>
                    <td className="py-4 px-6 text-brand-green">Light</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6 font-medium">Developer UI/UX</td>
                    <td className="py-4 px-6 font-medium"><Check className="w-5 h-5 text-brand-green inline" /> Modern</td>
                    <td className="py-4 px-6 text-slate-400">Outdated</td>
                    <td className="py-4 px-6 text-slate-400">Cluttered</td>
                    <td className="py-4 px-6 font-medium"><Check className="w-5 h-5 text-brand-green inline" /> Modern</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Data Ownership</td>
                    <td className="py-4 px-6 font-medium"><Check className="w-5 h-5 text-brand-green inline" /> 100% Yours</td>
                    <td className="py-4 px-6 font-medium"><Check className="w-5 h-5 text-brand-green inline" /> Yours</td>
                    <td className="py-4 px-6 font-medium"><Check className="w-5 h-5 text-brand-green inline" /> Yours</td>
                    <td className="py-4 px-6 text-orange-500">Managed via 3rd Party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Simple, transparent pricing.</h2>
            <p className="text-lg text-slate-600">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white border text-center border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Free</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">₹0</span>
              </div>
              <p className="text-slate-600 mb-8 border-b border-slate-100 pb-8 h-16">Perfect for personal projects and experimentation.</p>
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-brand-indigo hover:text-brand-indigo transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-white border-2 border-brand-indigo text-center rounded-2xl p-8 shadow-xl shadow-brand-indigo/10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-indigo text-white px-3 py-1 text-sm font-bold uppercase rounded-full">Most Popular</div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Pro</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">₹299</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-slate-600 mb-8 border-b border-slate-100 pb-8 h-16">For freelancers and agencies managing production workloads.</p>
              <button className="w-full py-3 rounded-xl bg-brand-indigo text-white font-medium hover:bg-indigo-600 transition-colors shadow-md shadow-brand-indigo/25">
                Start Free Trial
              </button>
            </div>

            {/* Lifetime Tier */}
            <div className="bg-slate-900 border text-center border-slate-800 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="font-display font-bold text-xl text-white mb-2">Lifetime</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹4999</span>
              </div>
              <p className="text-slate-400 mb-8 border-b border-slate-700 pb-8 h-16">Pay once, own the panel forever. No recurring fees.</p>
              <button className="w-full py-3 rounded-xl border border-slate-700 text-white font-medium hover:bg-white hover:text-slate-900 transition-colors">
                Buy Lifetime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 bg-brand-indigo border-b border-border-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">Take Full Control of Your VPS</h2>
          <p className="text-xl text-indigo-100 mb-10">Stop paying premium prices for managed hosting. Install Nimbus and deploy your apps in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-indigo px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg active:scale-[0.98]">
              Install Nimbus
            </button>
            <button className="bg-indigo-800/50 text-white border border-indigo-400/50 px-8 py-4 rounded-xl font-medium hover:bg-indigo-800 transition-colors active:scale-[0.98]">
              View Docs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-indigo flex items-center justify-center text-white font-bold font-display text-xs">
              N
            </div>
            <span className="font-display font-bold text-lg text-slate-900">
              Nimbus
            </span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Nimbus. All rights reserved.</p>
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-slate-900">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
