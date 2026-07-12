import { useState } from 'react'

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function SignupForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'الرجاء إدخال الاسم'
    if (!form.phone.trim()) next.phone = 'الرجاء إدخال رقم الجوال'
    else if (!/^05\d{8}$/.test(form.phone.trim()))
      next.phone = 'رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'waitlist', ...form }),
      })
      onSuccess(form)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" name="waitlist" data-netlify="true" noValidate>
      <input type="hidden" name="form-name" value="waitlist" />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-black/80" htmlFor="name">
          الاسم
        </label>
        <input
          id="name"
          name="name"
          className={inputClass}
          placeholder="سارة"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>


      <div>
        <label className="mb-1.5 block text-sm font-medium text-black/80" htmlFor="phone">
          رقم الجوال
        </label>
        <input
          id="phone"
          name="phone"
          className={inputClass}
          placeholder="05XXXXXXXX"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-burgundy px-6 py-3.5 text-base font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? 'جارِ الإرسال...' : 'سجلي الآن'}
      </button>
    </form>
  )
}
