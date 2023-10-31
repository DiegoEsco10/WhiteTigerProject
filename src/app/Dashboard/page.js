import { createClient } from '@supabase/supabase-js'

export default function Dashboard() {

  // let { error } = await supabase.auth.signOut()
  const supabase = createClient('https://uktwrmzcoimevzflwkww.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdHdybXpjb2ltZXZ6Zmx3a3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1Nzk4MzYsImV4cCI6MjAxMzE1NTgzNn0.d5PrMLscpyL5LfbCuAlhMNiLF8KByaA58nLV47oYLLE');


  return (
    <div className="flex flex-nowrap justify-evenly max-w-full p-5">
      <h1>Dashboard</h1>
      <button className="border-2 border-black p-2 rounded-lg" onclick="supabase.auth.signOut()">Sign Out</button>
    </div>
  )
}