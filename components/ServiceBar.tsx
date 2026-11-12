const services = ['Bar', 'Bistro', 'Accommodation', 'Beer Garden', 'TAB & Sport', 'Weekend DJs']

export default function ServiceBar() {
  return (
    <div className="bg-forest">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex items-stretch justify-between border-l border-r border-white/8 flex-wrap">
          {services.map((s, i) => (
            <div
              key={s}
              className={`flex-1 min-w-[33%] sm:min-w-0 flex items-center justify-center gap-2 py-4 px-2.5 border-r border-white/8 last:border-r-0 text-[10px] font-medium tracking-[0.1em] uppercase text-white/55 hover:text-white transition-colors ${
                i === services.length - 1 ? 'border-b border-b-white/8 sm:border-b-0' : ''
              }`}
            >
              <span className="w-[5px] h-[5px] rounded-full bg-sage-3 flex-shrink-0" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
