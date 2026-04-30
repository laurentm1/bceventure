import { Fragment } from 'react'

export default function SplitHeadline({ text, delayBase = 0 }: { text: string; delayBase?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <span className="word-inner" style={{ animationDelay: `${delayBase + i * 0.08}s` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}
