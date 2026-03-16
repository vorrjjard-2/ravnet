import NeuralNet from "./components/neural-net";
import Typewriter from "./components/typewriter";
import StatusBar from "./components/status-bar";
import GlowCursor from "./components/glow-cursor";
import Marquee from "./components/marquee";
import BootSequence from "./components/boot-sequence";

export default function Home() {
  return (
    <BootSequence>
      <section className="relative flex flex-col min-h-[calc(100vh-10rem)]">
        <NeuralNet />
        <GlowCursor />
        <div className="relative z-10 flex flex-col justify-center flex-1">
          <p className="text-xs text-muted mb-6 font-mono">// hello world</p>
          <h1 className="text-5xl font-bold text-accent leading-tight tracking-tight">
            Ravi Saulog
          </h1>
          <div className="mt-3 h-7">
            <Typewriter />
          </div>
          <p className="text-sm text-muted mt-10 max-w-lg leading-relaxed">
            I design and build things. Currently exploring ideas at the intersection
            of software, systems, and craft.
          </p>
          <div className="flex gap-4 mt-12">
            <a
              href="/projects"
              className="text-xs border border-border px-4 py-2 hover:bg-accent hover:text-background transition-colors"
            >
              view projects &rarr;
            </a>
            <a
              href="/contact"
              className="text-xs text-muted hover:text-accent transition-colors px-4 py-2"
            >
              get in touch
            </a>
          </div>
          <StatusBar />
        </div>
        <Marquee />
      </section>
    </BootSequence>
  );
}
