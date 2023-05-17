"use client"

import { useState } from "react"
import Button from "./Button"

function StyledButton() {
  const [buttonContent, setButtonContent] = useState("React Aria Button")
  return (
    <Button
      isDisabled={false} // unnecessary
      type='button' //default
      aria-label='React Aria Button' // In this case the label is unnecessary
      onPressStart={() => setButtonContent("Press Start")}
      onPressEnd={() => setButtonContent("Press End")}
      className='nx-font-extrabold nx-bg-slate-500 nx-text-slate-50 active:nx-scale-95 dark:nx-bg-slate-50 nx-px-4 nx-py-2 nx-rounded'
    >
      {buttonContent}
    </Button>
  )
}

export default StyledButton
