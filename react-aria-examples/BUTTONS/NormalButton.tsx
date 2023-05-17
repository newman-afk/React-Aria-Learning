function NormalButton() {
  return (
    <button
      disabled={false} // unnecessary
      type='button' //default
      aria-label='Normal Button' // In this case the label is unnecessary
      onClick={() => alert("Button Pressed!")}
      className='nx-font-extrabold nx-bg-slate-500 nx-text-slate-50 active:nx-scale-95 dark:nx-bg-slate-50 nx-px-4 nx-py-2 nx-rounded'
    >
      Normal Button
    </button>
  )
}

export default NormalButton
