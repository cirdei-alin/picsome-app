export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/75 px-5 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-black text-white">
            Designed & Developed by Alin
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Premium gallery concept created for ASSIST Software.
          </p>
        </div>

        <a
            href="https://assist-software.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
            <div className="flex h-11 w-[120px] items-center justify-center rounded-2xl bg-white px-3">
                <img
                    src="/assist-logo.png"
                    alt="ASSIST Software"
                    className="max-h-7 w-auto object-contain"
                />
            </div>

            <div className="border-l border-white/10 pl-4">
                <p className="text-sm font-black text-white">ASSIST Software</p>
                <p className="text-xs text-slate-400 transition group-hover:text-cyan-200">
                assist-software.net
                </p>
            </div>
        </a>
      </div>
    </footer>
  );
}