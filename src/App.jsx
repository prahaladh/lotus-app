import { useState } from 'react'
import { stages } from './data/stages'
import { load, save } from './utils/storage'
import DailyChecklist from './components/DailyChecklist'
import Timeline from './components/Timeline'

export default function App() {
  const [state, setState] = useState(load())
  const today = new Date().toISOString().slice(0,10)
  const stageIndex = stages.findIndex(s => s.id === state.stage)
  const stage = stages[stageIndex]
  const completedCount = Object.keys(state.completions).length

  const completeToday = () => {
    const updated = {
      ...state,
      completions: { ...state.completions, [today]: true }
    }
    setState(updated)
    save(updated)
  }

  const unlockNext = () => {
    const next = stages[stageIndex + 1]
    if (!next) return
    const updated = { stage: next.id, completions: {} }
    setState(updated)
    save(updated)
  }

  return (
    <div className="container">
      <h1>🌸 Lotus Discipline</h1>
      <h2>{stage.name} Stage</h2>

      <div className="card">
        <DailyChecklist completed={state.completions[today]} onComplete={completeToday} />
        {stage.required && (
          <p>Progress: {completedCount}/{stage.required}</p>
        )}
        {stage.required && completedCount >= stage.required && (
          <button onClick={unlockNext}>Unlock Next Stage</button>
        )}
      </div>

      <Timeline current={state.stage} />
    </div>
  )
}