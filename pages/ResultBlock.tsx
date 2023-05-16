interface ResultBlockProps {
  children: React.ReactNode
}

function ResultBlock({ children }: ResultBlockProps) {
  return (
    <div className=' nx-border nx-rounded-md dark:nx-border-gray-600 nx-p-4 nx-my-4'>
      {children}
    </div>
  )
}

export default ResultBlock
