import { useState } from 'react'
import FormField from '../ui/FormField'
import RadioOption from '../ui/RadioOption'

export default function StepRole({ data, update, onNext, onPrev }) {
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!data.role) e.role = 'Please select a role'
    if (data.role === 'student'      && !data.university.trim()) e.university = 'Required'
    if (data.role === 'professional' && !data.company.trim())    e.company    = 'Required'
    if (data.role === 'freelancer'   && !data.company.trim())    e.company    = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const setRole = (role) => {
    update({ role, university: '', company: '', yearsExp: '' })
    setErrors({})
  }

  return (
    <div className="card">
      <h2>Role & details</h2>

      {['student', 'professional', 'freelancer'].map(r => (
        <RadioOption
          key={r}
          value={r}
          label={r}
          selected={data.role === r}
          onChange={() => setRole(r)}
        />
      ))}
      {errors.role && <p className="err-msg">{errors.role}</p>}

      {data.role === 'student' && (
        <FormField label="University name" error={errors.university}>
          <input
            value={data.university}
            placeholder="Baku State University"
            onChange={e => update({ university: e.target.value })}
          />
        </FormField>
      )}

      {data.role === 'professional' && (
        <>
          <FormField label="Company name" error={errors.company}>
            <input
              value={data.company}
              placeholder="Acme Corp"
              onChange={e => update({ company: e.target.value })}
            />
          </FormField>
          <FormField label="Years of experience">
            <select
              value={data.yearsExp}
              onChange={e => update({ yearsExp: e.target.value })}
            >
              <option value="">Select...</option>
              {['< 1 year', '1–3 years', '3–5 years', '5–10 years', '10+ years'].map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </FormField>
        </>
      )}

      {data.role === 'freelancer' && (
        <FormField label="Main service / skill" error={errors.company}>
          <input
            value={data.company}
            placeholder="UI/UX Design, Full-Stack Dev..."
            onChange={e => update({ company: e.target.value })}
          />
        </FormField>
      )}

      <div className="nav-row">
        <button className="btn" onClick={onPrev}>← Back</button>
        <button className="btn primary" onClick={() => validate() && onNext()}>Continue →</button>
      </div>
    </div>
  )
}