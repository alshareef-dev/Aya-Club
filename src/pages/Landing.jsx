import { useState } from 'react'
import { Award, Heart, ShoppingBag, Truck, Shirt, Wallet, Star, Gift } from 'lucide-react'
import SignupForm from '../components/SignupForm.jsx'
import heroImage from '../assets/images/hero.png'
import ayaLogo from '../assets/images/aya-logo.svg'

const STEPS = [
  {
    icon: Award,
    title: 'اشتركي في نادي آيا',
    body: 'انضمي إلى نادي آيا واحصلي على مزايا حصرية',
  },
  {
    icon: ShoppingBag,
    title: 'اختاري عباياتك',
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

const PERKS = [
  {
    icon: Shirt,
    title: 'جربي قبل تشترين',
    body: 'اطلبي عباياتك وجربيها في البيت قبل الدفع',
  },
  {
    icon: Truck,
    title: 'شحن مجاني',
    body: 'توصيل سريع ومجاني لجميع طلباتك',
  },
  {
    icon: Gift,
    title: 'خصومات حصرية',
    body: 'عروض خاصة وحصرية لأعضاء النادي ',
  },
  {
    icon: Star,
    title: 'وصول مبكر',
    body: 'توصلك التصاميم قبل الكل',
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
            {/* Right side (start in RTL): Logo, name, and badge stacked */}
            <div className="flex flex-col items-start gap-0">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold tracking-tight text-white font-serif-display">Club</span>
                <img src={ayaLogo} className="h-14 w-auto brightness-0 invert" alt="Aya logo" />
              </div>
              <span className="rounded-full border border-white/30 bg-white/10 px-2 py-[1px] text-[9px] font-semibold text-white -mt-2.5 z-10">
                إطلاق تجريبي
              </span>
            </div>
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
              انضمي لنادي آيا واستفيدي من المميزات والعروض الحصرية
            </p>
            <a
              href="#signup"
              className="mt-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              انضمي الحين
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-burgundy sm:text-3xl font-serif-display">
              <span className="block h-px w-6 bg-burgundy/40" />
              جربي قبل تشترين
              <span className="block h-px w-6 bg-burgundy/40" />
            </h2>
            <p className="mt-4 text-sm font-semibold text-burgundy/80">
              ميزة حصرية لأعضاء نادي آيا
            </p>
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

      {/* Perks footer */}
      <section className="w-full bg-black py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="block h-px w-6 bg-biscuit" />
              <span className="text-2xl font-bold tracking-tight text-white font-serif-display">Club</span>
              <img src={ayaLogo} className="h-10 w-auto brightness-0 invert opacity-90" alt="Aya logo" />
              <span className="block h-px w-6 bg-biscuit" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl text-white font-serif-display">مميزات قادمة قريبًا</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-1 flex-row items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-right transition-all duration-300 hover:bg-white/10 md:flex-col md:items-center md:rounded-3xl md:p-8 md:text-center"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 md:mb-6 md:h-16 md:w-16">
                  <perk.icon className="h-5 w-5 text-white md:h-7 md:w-7" />
                </div>
                <div className="md:contents">
                  <h3 className="text-sm font-semibold md:mb-3 md:text-lg">{perk.title}</h3>
                  <p className="text-xs text-white/80 md:text-sm">{perk.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="relative w-full bg-burgundy py-24 text-white overflow-hidden text-center" id="signup">
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
              <span className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-biscuit">
                <span className="block h-px w-4 bg-biscuit" />
                قريباً
                <span className="block h-px w-4 bg-biscuit" />
              </span>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl font-serif-display">انضمي للقائمة</h2>
              <p className="mx-auto mb-10 max-w-md text-white/90">
                كوني من أوائل من يستمتع بتجربة التسوق الفاخرة الجديدة.
              </p>
              <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 text-right sm:p-8">
                <SignupForm onSuccess={setSubmitted} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-white/10 py-12 text-white/60">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Right side (RTL start): Brand Logo and copyright */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold tracking-tight text-white font-serif-display">Club</span>
                <img src={ayaLogo} className="h-10 w-auto brightness-0 invert opacity-90" alt="Aya logo" />
              </div>
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} Aya Club. جميع الحقوق محفوظة.
              </p>
            </div>

            {/* Left side (RTL end): Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
              <a
                href="https://www.aya.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                موقع آيا
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
