const LABELS = ['Personal', 'Role', 'Preferences', 'Preview']

export default function ProgressBar({ current }) {
  return (
    <>
      <div className="progress-wrap">
        {LABELS.map((_, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <div className={`progress-dot ${i < current ? 'done' : i === current ? 'active' : ''}`}>
              {i < current ? '✓' : i + 1}
            </div>
            {i < LABELS.length - 1 && (
              <div className={`progress-line ${i < current ? 'done' : ''}`} />
            )}
          </span>
        ))}
      </div>
      <div className="progress-labels">
        {LABELS.map((label, i) => (
          <span key={i} className={i === current ? 'active' : ''}>{label}</span>
        ))}
      </div>
    </>
  )
}