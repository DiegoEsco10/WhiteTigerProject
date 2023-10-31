'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { redirect } from 'next/navigation'

const supabase = createClient('https://uktwrmzcoimevzflwkww.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdHdybXpjb2ltZXZ6Zmx3a3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1Nzk4MzYsImV4cCI6MjAxMzE1NTgzNn0.d5PrMLscpyL5LfbCuAlhMNiLF8KByaA58nLV47oYLLE');

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 max-w-full">
      <div className="flex flex-nowrap justify-evenly">
        <h1>Logo</h1>
        <h1>White Tiger TaeKwonDoe</h1>
        <button onClick={() => console.log('/Dashboard')}>Dashboard</button>
        <a href="/Dashboard">Dashboard</a>
      </div>
      <div className="max-w-full flex justify-center justify-items-center">
        {/* <Login /> */}

      </div>
    </div>
  )
};

// const Login = () => {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   if (!session) {
//     return (<Auth supabaseClient={supabase}
//       appearance={{ theme: ThemeSupa }}
//       provides={[]}
//       />)
//   }
//   else {
//     redirect('/Dashboard')
//   }
// };