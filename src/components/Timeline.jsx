import { stages } from '../data/stages';

export default function Timeline({ current }) {
  return (
    <div className="timeline">
      {stages.map(function (s) {
        const className =
          "stage" + (s.id === current ? " active" : "");

        return (
          <div key={s.id} className={className}>
            {s.name}
          </div>
        );
      })}
    </div>
  );
}
