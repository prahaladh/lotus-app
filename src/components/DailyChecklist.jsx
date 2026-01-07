export default function DailyChecklist({ completed, onComplete }) {
  return (
    <label className="check">
      <input type="checkbox" checked={completed || false} onChange={onComplete} />
      Lotus Discipline Sit – 2 minutes
    </label>
  )
}