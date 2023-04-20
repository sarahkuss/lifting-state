export default function Signup ({ setUser }) {
  return (
    <>
      <h2>Sign Up</h2>
      <button onClick={() => setUser('New User')}>Sign Up</button>
    </> 
  )    
}