export default function FormField({ label, error, hint, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>{label}</label>
      {hint && <p className="hint">{hint}</p>}
      {children}
      {error && <p className="err-msg">{error}</p>}
    </div>
  )
}