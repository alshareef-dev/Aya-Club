import { useState } from 'react'
import { Heart, ShoppingBag, Truck, Shirt } from 'lucide-react'
import SignupForm from '../components/SignupForm.jsx'
import heroImage from '../assets/images/hero.png'
import ayaLogo from '../assets/images/aya-logo.svg'

const STEPS = [
  {
    icon: ShoppingBag,
    title: 'اختاري',
    body: 'اختاري 3 عبايات بدون دفع',
  },
  {
    icon: Truck,
    title: 'استلمي',
    body: 'نوصلك لباب البيت مجانا',
  },
  {
    icon: Shirt,
    title: 'جربي',
    body: 'جربي براحتك لمدة 3 أيام',
  },
  {
    icon: Heart,
    title: 'قرري',
    body: 'ادفعي مقابل العباية الي تعجبك وناخذ الباقي',
  },
]


export default function Landing() {
  const [submitted, setSubmitted] = useState(null)

  return (
    <div className="min-h-screen bg-offwhite text-black">
      {/* Hero */}
      <section className="relative flex w-full items-end overflow-hidden pb-16 pt-32 sm:h-[600px] sm:items-center sm:py-0">
        {/* Top bar inside Hero */}
        <div className="absolute top-0 left-0 right-0 z-20 w-full py-6">
          <div className="mx-auto max-w-5xl px-6 flex justify-start">
            <img src={ayaLogo} className="h-14 w-auto brightness-0 invert" alt="Aya logo" />
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="امرأة سعودية ترتدي عباية بورجوندي أمام مرآة"
            className="h-full w-full object-cover object-[25%_center] sm:object-[65%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent sm:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-l from-black/70 via-black/35 to-transparent sm:block" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <div className="flex max-w-md flex-col items-start gap-8">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl font-serif-display">
              جربي قبل تشترين
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              خدمة حصرية لعدد محدود من العميلات
            </p>
            <a
              href="#signup"
              className="mt-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              جربي الآن
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-white pt-10 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-burgundy sm:text-3xl font-serif-display">
              <span className="block h-px w-6 bg-burgundy/40" />
              بكل بساطة
              <span className="block h-px w-6 bg-burgundy/40" />
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-l from-burgundy/15 via-biscuit/50 to-burgundy/15 hidden md:block" />

            {/* Vertical Line for Mobile */}
            <div className="absolute right-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-burgundy/15 via-biscuit/50 to-burgundy/15 md:hidden" />

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">
              {STEPS.map((step, index) => (
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
      </section>


      {/* Waitlist form */}
      <section className="relative w-full bg-burgundy pt-12 pb-24 text-white overflow-hidden text-center" id="signup">
        {/* Decorative background circles */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/3 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[800px] px-6">
          {submitted ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center py-8">
              <h2 className="mb-4 text-2xl font-bold font-serif-display">
                أنتِ الآن ضمن القائمة يا {submitted.name.split(' ')[0]}!
              </h2>
              <p className="mx-auto max-w-md text-white/90">
                شكرًا لانضمامك لقائمة انتظار Aya Club. سيتواصل معك فريقنا فور جاهزية تجربتك.
              </p>
            </div>
          ) : (
            <>
              <h2 className="mb-10 flex items-center justify-center gap-3 text-2xl font-bold text-white sm:text-3xl font-serif-display">
                <span className="block h-px w-6 bg-white/40" />
                سجلي لطلب الخدمة
                <span className="block h-px w-6 bg-white/40" />
              </h2>
              <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 text-right sm:p-8">
                <SignupForm onSuccess={setSubmitted} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-12 text-white/60">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6">
          <img src={ayaLogo} className="h-10 w-auto brightness-0 invert opacity-90" alt="Aya logo" />
          <div className="flex items-center gap-6">
            <a href="https://aya.go.link/3xk61" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100">
              <img src="/footer/Asset 3.svg" className="h-6 w-[72px] opacity-80" alt="Asset 3" />
            </a>
            <a href="https://aya.go.link/3xk61" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100">
              <img src="/footer/Asset 2.svg" className="h-6 w-[72px] opacity-80" alt="Asset 2" />
            </a>
            <a href="https://www.aya.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100">
              <img src="/footer/Asset 1.svg" className="h-6 w-[72px] opacity-80" alt="Asset 1" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
