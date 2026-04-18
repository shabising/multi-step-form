import FormField from '../ui/FormField'

const INTERESTS = ['Technology', 'Design', 'Marketing', 'Finance', 'Healthcare', 'Education']

export default function StepPreferences({ data, update, onNext, onPrev }) {
  const toggleInterest = (item) => {
    const already = data.interests.includes(item)
    update({
      interests: already
        ? data.interests.filter(i => i !== item)
        : [...data.interests, item]
    })
  }

  return (
    <div className="card">
      <h2>Preferences</h2>

      <FormField label="Short bio" hint="Tell us a bit about yourself (optional)">
        <textarea
          value={data.bio}
          placeholder="I'm a developer who loves building..."
          onChange={e => update({ bio: e.target.value })}
        />
      </FormField>

      <FormField label="Interests" hint="Select all that apply">
        <div className="chips">
          {INTERESTS.map(item => (
            <span
              key={item}
              className={`chip ${data.interests.includes(item) ? 'selected' : ''}`}
              onClick={() => toggleInterest(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </FormField>

      <label className="check-row" style={{ marginTop: '0.5rem' }}>
        <input
          type="checkbox"
          checked={data.newsletter}
          onChange={e => update({ newsletter: e.target.checked })}
        />
        <span>Subscribe to newsletter</span>
      </label>

      <div className="nav-row">
        <button className="btn" onClick={onPrev}>← Back</button>
        <button className="btn primary" onClick={onNext}>Preview →</button>
      </div>
    </div>
  )
}