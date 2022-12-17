import { useEffect, useRef } from 'react'
import {mount} from 'account/AccountApp'

export const AccountApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div ref={ref} />
  )
}
