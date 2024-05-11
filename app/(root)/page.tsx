import Header from '@/components/Header'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const logIn = {firstName:"asif"}
  return (
    <section className='w-full no-scrollbar flex flex-row '>
      <div className="w-full">
        {/* header  */}
        <div className='flex flex-col px-8 gap-8'>
          
          <Header
           type="greting"
           title="welcome"
           user={logIn.firstName || "guest"}
           subTitle="Access & manage your account and transactions efficiently."/>

          <TotalBalanceBox
          accounts={[]}
          totalBank={2}
          totalCurrentBalance={1250.333}
          />
        </div>
      </div>
    </section>
  )
}

export default Home
