import { useButton } from "@react-aria/button"
import { useRef } from "react"
import type { RefObject } from "react"
import type { AriaButtonProps } from "react-aria"

interface ButtonProps extends AriaButtonProps {
  className: string
}

function Button(props: ButtonProps) {
  const ref: RefObject<any> = useRef()
  const { buttonProps } = useButton(props, ref)
  const { children, className } = props
  return (
    <button {...buttonProps} className={className} ref={ref}>
      {children}
    </button>
  )
}

export default Button

export function StyledButton() {
  return (
    <Button className='nx-font-extrabold nx-bg-slate-500 nx-text-slate-50 active:nx-scale-95 dark:nx-bg-slate-50 nx-px-4 nx-py-2 nx-rounded'>
      example
    </Button>
  )
}
