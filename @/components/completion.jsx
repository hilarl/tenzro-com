// app/completion.tsx

'use client'

import { useCompletion } from 'ai/react';

export default function Completion() {
   const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/completion'
  })

  return (
    <div>
      <p>{completion}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}