import Header from '@/components/Header'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action';
import React, { useState,useEffect } from 'react'

const Home = async () => {
  const logedIn = await getLoggedInUser();
 
  

  return (
    <section className='w-full no-scrollbar flex flex-row '>
      <div className="w-full">
        {/* header  */}
        <header className='flex flex-col px-8 gap-8'>
          
          <Header
           type="greting"
           title="welcome"
           user={logedIn?.name || "guest"}
           subTitle="Access & manage your account and transactions efficiently."/>

          <TotalBalanceBox
          accounts={[]}
          totalBank={2}
          totalCurrentBalance={1250.333}
          />
        </header>
      </div>
    <RightSideBar
      user={logedIn}
      transitions={[]}
      banks={[{currentBalance:1222},{currentBalance:5555}]}
      /> 
    </section>
  )
}

export default Home
