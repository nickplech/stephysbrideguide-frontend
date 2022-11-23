import { createContext, useState, useContext, useRef } from 'react'
const ScrollToContext = createContext()
const ScrollToProvider = ScrollToContext.Provider

function ScrollStateProvider({ children }) {
  const scrollRef = useRef(null)
  const navClick = () => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth'})
  }



  return (
    <ScrollStateProvider
      value={{
        scrollRef,
        navClick
      }}
    >
      {children}
    </ScrollStateProvider>
  )
}

function useScroll() {
  const all = useContext(ScrollToContext)
  return all
}

export { ScrollToProvider, ScrollToContext, useScroll }
