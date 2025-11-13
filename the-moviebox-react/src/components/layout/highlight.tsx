export function Highlight() {
    return (
        <section className="relative flex bg-cover bg-center md:bg-left-top" style={{ backgroundImage: "url('/highlight/etT14XfDEqhQZdD47ywpyihXPyW.jpg')", backgroundPosition: "center, left calc((50vw - 170px) - 340px) top" }}>
            {/* Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full z-[1]"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(17, 17, 17, 0.95) 0%, rgba(17, 17, 17, 0.8) 100%)"
                }}
            ></div>

            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 py-8 px-4 md:px-0 z-[2]">
                {/* Poster */}
                <img
                    className="rounded-lg w-full md:w-auto md:max-w-[250px] object-cover"
                    src="/highlight/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                    alt="Poster do filme Como Treinar o seu Dragão"
                />

                {/* Details */}
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-4xl font-normal">Como Treinar o seu Dragão</h2>

                    {/* Meta */}
                    <div className="text-xs md:text-sm my-2.5 flex flex-wrap gap-2 items-center">
                        <span className="bg-white/20 py-1.5 px-3 rounded-full">Fantasia</span>
                        <span className="bg-white/20 py-1.5 px-3 rounded-full">Família</span>
                        <span className="bg-white/20 py-1.5 px-3 rounded-full">Ação & Aventura</span>
                        <span className="text-[#ccc]">2h 5m</span>
                    </div>

                    {/* Sinopse */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-normal pt-6 md:pt-12 pb-2 text-xl md:text-2xl">Sinopse</h4>
                        <p className="text-[#a0a0a0] text-sm">
                            Em um mundo onde dragões e humanos coexistem, um jovem viking
                            chamado Soluço se torna amigo de um dragão ferido chamado
                            Banguela. Juntos, eles desafiam as tradições de suas tribos e
                            descobrem que dragões não são os monstros que todos acreditavam
                            ser.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 my-6">
                        <button className="bg-[#e50914] text-white border-none py-3 px-6 rounded font-bold transition hover:bg-[#b8070f] cursor-pointer">
                            Assistir
                        </button>
                        <button className="bg-white/20 text-white border border-white/30 py-3 px-6 rounded transition hover:bg-white/30">
                            Detalhes
                        </button>
                        <button className="bg-white/20 text-white border border-white/30 py-3 px-6 rounded transition hover:bg-white/30">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
