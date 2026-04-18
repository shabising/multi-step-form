export default function RadioOption({ value, label, selected, onChange }) {
  return (
    <label className={`radio-opt ${selected ? 'selected' : ''}`} onClick={onChange}>
      <input type="radio" name="role" value={value} checked={selected} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}