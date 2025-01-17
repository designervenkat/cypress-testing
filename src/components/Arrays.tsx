import React from 'react'

export default function Arrays({numbers, strings}: {numbers: number[], strings: string[]}) {
  return (
    <div className='flex flex-col gap-4'>
      <h3>Arrays of Number</h3>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{ num}</li>
        ))}
      </ul>

      <h3>Arrays of String</h3>
      <ul>
        {strings.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  )
}
