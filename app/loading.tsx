export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#f8f5ef] z-[100] flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-3xl font-cinzel tracking-[0.3em] text-[#1a1a1a]/80">AZURA</h1>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4C6454] animate-pulse" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4C6454] animate-pulse" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4C6454] animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
            </div>
        </div>
    );
}
