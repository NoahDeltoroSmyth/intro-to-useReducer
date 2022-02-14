import { useEffect, useReducer, useState } from 'react'

const pinkRGB = `rgb(236, 72, 153)`

const initialState = 0

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return state + 1
    }
    case 'decrement': {
      return state - 1
    }
    case 'reset': {
      return 0
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}

export default function Counter() {
  // const [count, setCount] = useState(0)
  const [currentColor, setCurrentColor] = useState(pinkRGB)
  const [state, dispatch] = useReducer(counterReducer, initialState)

  useEffect(() => {
    if (state === 0) {
      setCurrentColor(pinkRGB)
    }

    if (state > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }

    if (state < 0) {
      setCurrentColor(`rgb(239, 68, 68)`)
    }
  }, [state])

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  const reset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {state}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
