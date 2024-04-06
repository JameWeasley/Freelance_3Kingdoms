import {useState} from 'react'

export default function login() {
    const [ username , setUsername ] = useState(undefined)
  return [ username , setUsername ]
}
