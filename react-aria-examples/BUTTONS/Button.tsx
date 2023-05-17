"use client"

import { useButton } from "@react-aria/button"
import { useRef, useState } from "react"
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
