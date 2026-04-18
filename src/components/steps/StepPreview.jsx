export default function StepPreview({ data, onSubmit, onPrev, onReset }) {
  return (
    <div className="card">
      <h2>Review your information</h2>

      <div className="preview-section">
        <h3>Personal info</h3>
        <div className="preview-row">
          <span className="preview-key">Full name</span>
          <span className="preview-val">{data.firstName} {data.lastName}</span>
        </div>
        <div className="preview-row">
          <span className="preview-key">Email</span>
          <span className="preview-val">{data.email}</span>
        </div>
        {data.phone && (
          <div className="preview-row">
            <span className="preview-key">Phone</span>
            <span className="preview-val">{data.phone}</span>
          </div>
        )}
      </div>

      <div className="preview-section">
        <h3>Role & details</h3>
        <div className="preview-row">
          <span className="preview-key">Role</span>
          <span className="preview-val">
            <span className={`badge ${data.role}`}>{data.role}</span>
          </span>
        </div>
        {data.role === 'student' && (
          <div className="preview-row">
            <span className="preview-key">University</span>
            <span className="preview-val">{data.university}</span>
          </div>
        )}
        {data.role === 'professional' && (
          <>
            <div className="preview-row">
              <span className="preview-key">Company</span>
              <span className="preview-val">{data.company}</span>
            </div>
            {data.yearsExp && (
              <div className="preview-row">
                <span className="preview-key">Experience</span>
                <span className="preview-val">{data.yearsExp}</span>
              </div>
            )}
          </>
        )}
        {data.role === 'freelancer' && (
          <div className="preview-row">
            <span className="preview-key">Main service</span>
            <span className="preview-val">{data.company}</span>
          </div>
        )}
      </div>

      <div className="preview-section">
        <h3>Preferences</h3>
        {data.bio && (
          <div className="preview-row">
            <span className="preview-key">Bio</span>
            <span className="preview-val">{data.bio}</span>
          </div>
        )}
        {data.interests.length > 0 && (
          <div className="preview-row">
            <span className="preview-key">Interests</span>
            <span className="preview-val">{data.interests.join(', ')}</span>
          </div>
        )}
        <div className="preview-row">
          <span className="preview-key">Newsletter</span>
          <span className="preview-val">{data.newsletter ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div className="nav-row">
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn" onClick={onPrev}>← Edit</button>
          <button className="btn danger" onClick={onReset}>Reset</button>
        </div>
        <button className="btn primary" onClick={onSubmit}>Submit ✓</button>
      </div>
    </div>
  )
}