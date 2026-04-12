function Resume() {
  return (
    <div className="flex flex-col items-center p-6 gap-4">
      
      <div className="flex gap-4">
        <a 
          href="/resume.pdf" 
          download 
          className="px-6 py-2 bg-[var(--primaryColor)] text-white rounded-lg text-[14px] font-medium transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5 no-underline"
        >
          Download PDF
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="px-6 py-2 border-2 border-[var(--borderColor)] rounded-lg text-[14px] text-[var(--textColor)] transition-all duration-300 hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] hover:-translate-y-0.5 no-underline"
        >
          Open in New Tab
        </a>
      </div>

      <iframe 
        src="/resume.pdf" 
        className="w-full rounded-lg border-2 border-[var(--borderColor)]"
        style={{ height: '80vh' }}
      />

    </div>
  )
}

export default Resume