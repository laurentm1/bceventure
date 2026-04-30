import Reveal from '@/components/reveal'

interface SectionHeaderProps {
  num: string
  eyebrow: string
  title: string
  italic?: string
  titleSuffix?: string
  oneLine?: boolean
  className?: string
}

export default function SectionHeader({
  num,
  eyebrow,
  title,
  italic,
  titleSuffix,
  oneLine = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <Reveal stagger className={`sec-header ${oneLine ? 'sec-header--oneline' : ''} ${className}`.trim()}>
      <div className="sec-num">{num}</div>
      <div className="sec-title-wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-m" style={{ margin: '8px 0 0' }}>
          {title}
          {italic && <> <span className="serif italic">{italic}</span></>}
          {titleSuffix}
        </h2>
      </div>
    </Reveal>
  )
}
