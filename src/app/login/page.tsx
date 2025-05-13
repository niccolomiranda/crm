"use client";

export default function Login() {
  return (
    <div id="__next">
      <div className="main-center">
        <div className="login-card" style={{maxWidth: 400, width: '100%'}}>
          <div className="login-logo">
            <img src="/logo.svg" alt="Revelium Logo" style={{width: 48, height: 48}} />
          </div>
          <div>
            <h1 className="login-title">Welcome to Revelium</h1>
            <p className="login-subtitle">Enter credentials received via email to access</p>
          </div>
          <form className="login-form" autoComplete="off" style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', position: 'relative', marginBottom: 0}}>
              <div style={{display: 'flex', flex: 1, width: '100%'}}>
                <input type="text" placeholder="yourname" className="login-input" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0, flex: 1, marginRight: 0, paddingRight: 0, width: '100%'}} autoComplete="username" defaultValue="" />
                <span style={{background: 'rgba(229, 229, 229, 0.25)', border: '1px solid rgba(0, 0, 0, 0.1)', borderLeft: 'none', borderTopRightRadius: 15, borderBottomRightRadius: 15, height: 60, display: 'flex', alignItems: 'center', padding: '0 18px', color: '#888', fontSize: 15, fontWeight: 400, letterSpacing: 0, marginLeft: 0}}>@revelium.studio</span>
              </div>
            </div>
            <div style={{position: 'relative', width: '100%'}}>
              <input type="password" placeholder="Password" className="login-input" style={{width: '100%', paddingRight: 40}} autoComplete="current-password" defaultValue="" />
              <button type="button" aria-label="Show password" style={{position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, height: 24, width: 24}} tabIndex={-1}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="#888" strokeWidth="2"></path>
                  <path d="M4 4l16 16" stroke="#888" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
            <button type="submit" className="login-button" style={{width: '100%'}}>Next</button>
          </form>
          <div style={{textAlign: 'center', color: '#222', fontSize: 13, fontWeight: 400, margin: '2.5rem 0 1.2rem 0', letterSpacing: 0}}>or directly sign with</div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0 0 2.5rem 0'}}>
            <button style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', borderRadius: 75, width: '100%', maxWidth: 400, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}} aria-label="Sign in with Google">
              <img src="/google-btn-final.svg" alt="Sign in with Google" style={{width: '100%', maxWidth: 400, height: 60, display: 'block', objectFit: 'contain'}} />
            </button>
          </div>
          <div className="login-links">
            <a href="#" className="login-link">Unlock account?</a>
            <a href="#" className="login-link">Help</a>
          </div>
          <p className="login-footer">2025. Revelium™ Studio, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
} 