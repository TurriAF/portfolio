import { useState } from "react";
import { projects } from "../data/portfolio";

const ALL = "Todos";

export default function Proyectos() {
  const [active, setActive] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const allTags = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const filtered = active === ALL ? projects : projects.filter((p) => p.tags.includes(active));
  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  const paginated = filtered.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  const handleFilter = (tag: string) => {
    setActive(tag);
    setCurrentPage(0);
  };

  return (
    <section id="proyectos" className="py-24 px-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-10 fade-up">
        <span className="mono text-[0.75rem] text-cyan-400">03</span>
        <h2 className="text-[1.7rem] font-semibold tracking-tight text-slate-100">Proyectos</h2>
        <span className="flex-1 h-px bg-cyan-500/[0.12]"></span>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8 fade-up">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={`mono text-[0.72rem] uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-200 cursor-pointer
              ${active === tag
                ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                : "border-cyan-500/20 text-slate-500 hover:border-cyan-400/50 hover:text-slate-300"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {paginated.map((p) => (
          <div
            key={p.num}
            className="group relative rounded-xl overflow-hidden border border-cyan-500/[0.12] hover:border-cyan-400/40 transition-all duration-300 bg-[#0a0e17]"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Imagen de fondo */}
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-[#151b2e]">
                {/* Grid decorativo tipo código */}
                <div className="absolute inset-0 opacity-10"
                  style={{backgroundImage: "linear-gradient(rgba(0,200,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px"}}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="mono text-[0.65rem] text-cyan-500/20 uppercase tracking-widest">sin imagen</span>
                </div>
              </div>
            )}

            {/* Gradiente base (siempre visible) — título y num */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/60 to-transparent" />

            {/* Status badge */}
            {p.status && (
              <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full text-[0.65rem] mono border backdrop-blur-md z-10
                ${p.status === "production"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.status === "production" ? "bg-emerald-400" : "bg-amber-400"}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${p.status === "production" ? "bg-emerald-500" : "bg-amber-500"}`} />
                </span>
                {p.status === "production" ? "Live" : "Dev"}
              </div>
            )}

            {/* Contenido inferior — siempre visible */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <div className="mono text-[0.68rem] text-cyan-400 mb-1">Proyecto {p.num}</div>
              <div className="text-base font-semibold text-slate-100 mb-1 leading-tight">{p.title}</div>

              {/* Descripción y tags — aparecen al hover */}
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                <p className="text-[0.8rem] text-slate-400 leading-relaxed mb-3 mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="mono text-[0.65rem] text-slate-400 bg-cyan-400/5 border border-cyan-500/20 rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="mono text-[0.7rem] text-slate-300 border border-cyan-500/20 px-3 py-1.5 rounded hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200">
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="mono text-[0.7rem] text-slate-300 border border-cyan-500/20 px-3 py-1.5 rounded hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200">
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-10 px-2 fade-up">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
            className={`flex items-center justify-center w-10 h-10 rounded-md border transition-all duration-200
              ${currentPage === 0
                ? "border-slate-800 text-slate-700 opacity-40 cursor-not-allowed"
                : "border-cyan-500/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 bg-[#151b2e] cursor-pointer"
              }`}
          >←</button>

          <span className="mono text-[0.72rem] text-slate-500 select-none">{currentPage + 1} / {totalPages}</span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md border transition-all duration-200
              ${currentPage === totalPages - 1
                ? "border-slate-800 text-slate-700 opacity-40 cursor-not-allowed"
                : "border-cyan-500/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 bg-[#151b2e] cursor-pointer"
              }`}
          >→</button>
        </div>
      )}
    </section>
  );
}