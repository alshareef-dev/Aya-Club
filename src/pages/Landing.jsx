import { useState } from 'react'
import { Award, Heart, ShoppingBag, Truck, Shirt, Wallet, Star, Gift } from 'lucide-react'
import SignupForm from '../components/SignupForm.jsx'
import heroImage from '../assets/images/hero.png'

const STEPS = [
  {
    icon: Award,
    title: 'اشتركي مع Aya Club',
    body: 'انضمي إلى نادي آيا الحصري لبدء تجربتك المميزة.',
  },
  {
    icon: ShoppingBag,
    title: 'اختاري عباياتك',
    body: 'اختاري ٣ عبايات بدون دفع.',
  },
  {
    icon: Truck,
    title: 'استلمي',
    body: 'نقوم بتوصيل القطع المختارة إلى باب منزلك.',
  },
  {
    icon: Shirt,
    title: 'جربي',
    body: 'جربي العبايات إلى ٣ أيام.',
  },
  {
    icon: Heart,
    title: 'قرري',
    body: 'احتفظي بما أحببتِ، وسنقوم باستلام الباقي.',
  },
]

const PERKS = [
  {
    icon: Truck,
    title: 'شحن مجاني',
    body: 'توصيل سريع ومجاني لجميع طلباتك',
  },
  {
    icon: Wallet,
    title: 'استرداد نقدي (Cashback)',
    body: 'استرجاع نسبة من قيمة مشترياتك',
  },
  {
    icon: Star,
    title: 'أولوية الوصول',
    body: 'كوني أول من يتسوق المجموعات الجديدة',
  },
  {
    icon: Shirt,
    title: 'جربي قبل تشترين',
    body: 'اطلبي عباياتك وجربيها في منزلك قبل الدفع',
  },
  {
    icon: Gift,
    title: 'خصومات حصرية',
    body: 'عروض خاصة وحصرية لأعضاء النادي فقط',
  },
]

export default function Landing() {
  const [submitted, setSubmitted] = useState(null)

  return (
    <div className="min-h-screen bg-offwhite text-black">
      {/* Hero */}
      <section className="relative flex w-full items-end overflow-hidden pb-16 pt-32 sm:h-[600px] sm:items-center sm:py-0">
        <div className="absolute left-0 top-0 z-20 flex items-center gap-2 p-6 md:p-10">
          <span className="text-2xl font-bold tracking-tight text-white">Aya Club</span>
          <span className="rounded-full border border-white/40 px-2 py-0.5 text-xs font-semibold text-white/80">
            Beta
          </span>
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
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              جربي قبل تشترين
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              Aya Club يمديك تطلبين 3 عبايات بدون دفع، توصلك لبابك، وادفعي للي يعجبك.
            </p>
            <a
              href="#signup"
              className="mt-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              جربي الحين
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <h2 className="relative pb-3 text-2xl font-bold text-burgundy sm:text-3xl">
              كيفية العمل
              <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-burgundy" />
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="flex flex-row items-center gap-3 rounded-xl border border-black/10 bg-offwhite/60 p-3 text-right transition-shadow duration-300 hover:shadow-lg sm:flex-col sm:items-center sm:rounded-3xl sm:p-8 sm:text-center"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-burgundy sm:mb-6 sm:h-16 sm:w-16">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="sm:contents">
                  <h3 className="text-sm font-semibold text-black sm:mb-3 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-black/60 sm:text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="w-full bg-white py-20" id="signup">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="relative overflow-hidden rounded-3xl bg-burgundy p-8 text-center text-white md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/3 rounded-full bg-white/5" />

            <div className="relative z-10">
              {submitted ? (
                <div className="flex min-h-[220px] flex-col items-center justify-center py-8">
                  <h2 className="mb-4 text-2xl font-bold">
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
                  <h2 className="mb-4 text-2xl font-bold sm:text-3xl">انضمي للقائمة</h2>
                  <p className="mx-auto mb-10 max-w-md text-white/90">
                    كوني من أوائل من يستمتع بتجربة التسوق الفاخرة الجديدة.
                  </p>
                  <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 text-right sm:p-8">
                    <SignupForm onSuccess={setSubmitted} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Perks footer */}
      <section className="w-full bg-black py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-biscuit">
              <span className="block h-px w-4 bg-biscuit" />
              Aya Club
              <span className="block h-px w-4 bg-biscuit" />
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl">Aya Club (قادم قريباً)</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-row items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-right transition-all duration-300 hover:bg-white/10 sm:h-full sm:flex-col sm:items-center sm:rounded-3xl sm:p-8 sm:text-center"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 sm:mb-6 sm:h-16 sm:w-16">
                  <perk.icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                </div>
                <div className="sm:contents">
                  <h3 className="text-sm font-semibold sm:mb-3 sm:text-lg">{perk.title}</h3>
                  <p className="text-xs text-white/80 sm:text-sm">{perk.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
