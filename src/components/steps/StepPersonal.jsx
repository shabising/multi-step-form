import { useState } from 'react'
import FormField from '../ui/FormField'

export default function StepPersonal({ data, update, onNext }) {
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!data.firstName.trim()) e.firstName = 'First name is required'
    if (!data.lastName.trim())  e.lastName  = 'Last name is required'
    if (!data.email.trim())     e.email     = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="card">
      <h2>Personal information</h2>

      <div className="grid-2">
        <FormField label="First name" error={errors.firstName}>
          <input
            value={data.firstName}
            placeholder="Ada"
            onChange={e => update({ firstName: e.target.value })}
          />
        </FormField>
        <FormField label="Last name" error={errors.lastName}>
          <input
            value={data.lastName}
            placeholder="Lovelace"
            onChange={e => update({ lastName: e.target.value })}
          />
        </FormField>
      </div>

      <FormField label="Email address" error={errors.email}>
        <input
          type="email"
          value={data.email}
          placeholder="ada@example.com"
          onChange={e => update({ email: e.target.value })}
        />
      </FormField>

      <FormField label="Phone (optional)">
        <input
          value={data.phone}
          placeholder="+994 50 000 00 00"
          onChange={e => update({ phone: e.target.value })}
        />
      </FormField>

      <div className="nav-row">
        <div />
        <button className="btn primary" onClick={() => validate() && onNext()}>
          Continue →
        </button>
      </div>
    </div>
  )
}