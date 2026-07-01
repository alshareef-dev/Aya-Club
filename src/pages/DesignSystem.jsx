const COLORS = [
  { name: 'Burgundy', hex: '#6B1F3A', className: 'bg-burgundy', text: 'text-white' },
  { name: 'Green', hex: '#3E5626', className: 'bg-green', text: 'text-white' },
  { name: 'Biscuit', hex: '#D1AD86', className: 'bg-biscuit', text: 'text-black' },
  { name: 'Off White', hex: '#EFE6DC', className: 'bg-offwhite', text: 'text-black' },
  { name: 'Black', hex: '#171918', className: 'bg-black', text: 'text-white' },
  { name: 'White', hex: '#FFFFFF', className: 'bg-white', text: 'text-black' },
  { name: 'Pink', hex: '#C16770', className: 'bg-pink', text: 'text-white' },
]

function Section({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-b border-black/10 pb-3 text-2xl font-bold text-black">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-offwhite px-6 py-12 text-black">
      <div className="mx-auto max-w-5xl">
        <header className="mb-14">
          <p className="mb-2 text-sm font-semibold text-burgundy">Aya Club</p>
          <h1 className="text-4xl font-bold">نظام التصميم (Design System)</h1>
          <p className="mt-3 max-w-xl text-black/60">
            الألوان والخطوط الأساسية المستخدمة في تصميم Aya Club.
          </p>
        </header>

        <Section title="الألوان (Colors)">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {COLORS.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white"
              >
                <div className={`flex h-24 items-end p-3 ${c.className} ${c.text}`}>
                  <span className="text-sm font-semibold">{c.name}</span>
                </div>
                <div className="p-3 text-sm text-black/60" dir="ltr">
                  {c.hex}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="الخط (Typography — Adobe Arabic)">
          <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-6">
            <h1 className="text-4xl font-bold">ليش تشترين قبل تجربين؟</h1>
            <h2 className="text-2xl font-bold">كيف تشتغل الخدمة؟</h2>
            <h3 className="text-lg font-semibold">اختاري عبايتك واطلبيها بدون ما تدفعين</h3>
            <p className="text-base text-black/70">
              مع Aya Club يمديك تطلبين 3 عبايات بدون دفع، توصلك لبابك، وادفعي للي يعجبك.
            </p>
            <p className="text-sm text-black/50">نص صغير — Aya Club © 2026</p>
          </div>
        </Section>

        <Section title="الأزرار (Buttons)">
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-black/10 bg-white p-6">
            <button className="rounded-full bg-burgundy px-6 py-3 font-semibold text-white transition hover:opacity-90">
              جربي الحين
            </button>
            <button className="rounded-full bg-green px-6 py-3 font-semibold text-white transition hover:opacity-90">
              سجلي الآن
            </button>
            <button className="rounded-full bg-pink px-6 py-3 font-semibold text-white transition hover:opacity-90">
              انضمي للقائمة
            </button>
            <button className="rounded-full border-2 border-burgundy px-6 py-3 font-semibold text-burgundy transition hover:bg-burgundy hover:text-white">
              زر ثانوي
            </button>
          </div>
        </Section>

        <Section title="حقول النموذج (Form Fields)">
          <div className="max-w-sm space-y-4 rounded-2xl border border-black/10 bg-white p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-black/80">
                إيميل حسابك في آيا
              </label>
              <input
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                placeholder="example@aya.app"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-black/80">رقم الجوال</label>
              <input
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                placeholder="05XXXXXXXX"
              />
            </div>
          </div>
        </Section>

        <Section title="بطاقة (Card)">
          <div className="max-w-sm rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-biscuit/40">
              <span className="text-lg">1</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold">اختاري عبايتك</h3>
            <p className="text-sm text-black/60">اختاري إلى 3 عبايات واطلبيها بدون ما تدفعين.</p>
          </div>
        </Section>
      </div>
    </div>
  )
}
