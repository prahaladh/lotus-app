import { stages } from '../data/stages'

export default function Timeline({ current }) {
  return (
    <div className="timeline">
      {stages.map(s => (
        <div key={s.id} className={\`stage \${s.id === current ? 'active' : ''}\`}>
          {s.name}
        </div>
      ))}
    </div>
  )
}