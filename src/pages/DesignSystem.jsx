import { Award, ShoppingBag, Truck } from 'lucide-react'

const DEMO_STEPS = [
  {
    icon: Award,
    title: 'الخطوة الأولى',
    body: 'تفاصيل الخطوة الأولى التجريبية هنا.',
  },
  {
    icon: ShoppingBag,
    title: 'الخطوة الثانية',
    body: 'تفاصيل الخطوة الثانية التجريبية هنا.',
  },
  {
    icon: Truck,
    title: 'الخطوة الثالثة',
    body: 'تفاصيل الخطوة الثالثة التجريبية هنا.',
  },
]

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

        <Section title="مخطط الخطوات (Timeline)">
          <div className="relative rounded-2xl border border-black/10 bg-white p-6 md:p-12 overflow-hidden">
            <div className="relative">
              {/* Horizontal Line for Desktop */}
              <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-l from-burgundy/15 via-biscuit/50 to-burgundy/15 hidden md:block" />

              {/* Vertical Line for Mobile */}
              <div className="absolute right-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-burgundy/15 via-biscuit/50 to-burgundy/15 md:hidden" />

              <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">
                {DEMO_STEPS.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative flex flex-row md:flex-col items-start md:items-center text-right md:text-center gap-6 md:gap-0 flex-1 group w-full"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex-none md:mb-6">
                      <div className="relative z-10 flex h-12 w-12 md:h-20 md:w-20 items-center justify-center rounded-full border-2 border-biscuit bg-white text-burgundy transition-all duration-500 group-hover:scale-110 group-hover:bg-burgundy group-hover:text-white group-hover:border-burgundy shadow-md group-hover:shadow-xl">
                        <step.icon className="h-5 w-5 md:h-8 md:w-8" />
                      </div>
                      {/* Badge Number */}
                      <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 z-20 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-biscuit text-[9px] md:text-[10px] font-bold text-burgundy shadow-sm border border-white">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 md:contents">
                      <h3 className="text-base md:text-lg font-bold text-black transition-colors duration-300 group-hover:text-burgundy mt-1 md:mt-0">
                        {step.title}
                      </h3>
                      <p className="mt-1 md:mt-3 text-sm leading-relaxed text-black/60 md:max-w-[180px]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
