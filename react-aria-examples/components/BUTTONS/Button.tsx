"use client"

import { useState } from "react"
import { Button } from "react-aria-components"

function ComponentsButton() {
  const [pointerType, setPointerType] = useState("")
  return (
    <>
      <Button
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={() => setPointerType("")}
        className='nx-font-extrabold nx-bg-slate-500 nx-text-slate-50 active:nx-scale-95 dark:nx-bg-slate-50 nx-px-4 nx-py-2 nx-rounded nx-mb-2'
      >
        Press me
      </Button>
      <p>
        {pointerType
          ? `You are pressing the button with a ${pointerType}!`
          : "Ready to be pressed."}
      </p>
    </>
  )
}

export default ComponentsButton
