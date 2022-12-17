import { useEffect, useRef } from 'react'
import {mount} from 'home/HomeApp'

export const HomeApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current)
  }, [])

  const onNavigate = () => {
    
  }

  return (
    <div ref={ref} />
  )
}
