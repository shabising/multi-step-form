import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import StepPersonal from './components/steps/StepPersonal'
import StepRole from './components/steps/StepRole'
import StepPreferences from './components/steps/StepPreferences'
import StepPreview from './components/steps/StepPreview'

const INITIAL = {
  firstName: '', lastName: '', email: '', phone: '',
  role: '', university: '', company: '', yearsExp: '',
  bio: '', interests: [], newsletter: false,
}

export default function App() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const update = (fields) => setData(prev => ({ ...prev, ...fields }))
  const next = () => setStep(s => s + 1)
  const prev = () => setStep(s => s - 1)
  const reset = () => { setData(INITIAL); setStep(0); setSubmitted(false) }

  if (submitted) {
    return (
      <div className="app">
        <div className="success-card">
          <div className="success-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#1a9e75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2>Submitted!</h2>
          <p>Thanks, {data.firstName}. Your form has been received.</p>
          <button className="btn primary" onClick={reset}>Start over</button>
        </div>
      </div>
    )
  }

  const steps = [
    <StepPersonal    data={data} update={update} onNext={next} />,
    <StepRole        data={data} update={update} onNext={next} onPrev={prev} />,
    <StepPreferences data={data} update={update} onNext={next} onPrev={prev} />,
    <StepPreview     data={data} onSubmit={() => setSubmitted(true)} onPrev={prev} onReset={reset} />,
  ]

  return (
    <div className="app">
      <ProgressBar current={step} />
      {steps[step]}
    </div>
  )
}