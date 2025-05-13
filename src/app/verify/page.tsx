"use client";

export default function Verify() {
  return (
    <div id="__next">
      <div className="main-center">
        <div className="login-card" style={{maxWidth: 400, width: '100%'}}>
          <div className="login-logo" style={{marginBottom: '2rem'}}>
            <img alt="Revelium Logo" src="/logo.svg" style={{width: 48, height: 48}} />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: 24}}>
            <img alt="Google Authenticator Logo" src="/google-authenticator-logo.svg" style={{width: 48, height: 48}} />
          </div>
          <h1 style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 500, fontSize: '21.43px', textAlign: 'center', marginBottom: 8}}>Verify with Google Authenticator</h1>
          <div style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, fontSize: 13, textAlign: 'center', marginBottom: 24}}>giulia@revelium.studio</div>
          <form style={{width: '100%'}}>
            <input placeholder="Enter Code" type="text" defaultValue="" style={{width: '100%', borderRadius: 15, border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(229, 229, 229, 0.25)', padding: '0.75rem 1rem', fontSize: 18, fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, marginBottom: 16, height: 60, outline: 'none'}} />
            <button type="submit" style={{width: '100%', borderRadius: 12, background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)', fontWeight: 600, fontSize: 18, fontFamily: 'Inter, Arial, sans-serif', padding: '0.75rem 0px', border: 'none', cursor: 'pointer', boxShadow: 'rgba(194, 222, 255, 0.25) 5px 0px 10px 0px', height: 60, marginBottom: 16}}>Verify</button>
          </form>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 16}}>
            <a href="#" className="login-link" style={{fontSize: 12, color: 'rgba(53, 53, 53, 0.75)', textDecoration: 'underline'}}>Forgot Password?</a>
            <a href="/" className="login-link" style={{fontSize: 12, color: 'rgba(53, 53, 53, 0.75)', textDecoration: 'underline'}}>Back to sign in</a>
          </div>
          <p className="login-footer" style={{fontSize: '9.36px', color: 'rgb(0, 0, 0)', opacity: 0.6, textAlign: 'center', marginTop: 32}}>2025. Revelium™ Studio, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
} 