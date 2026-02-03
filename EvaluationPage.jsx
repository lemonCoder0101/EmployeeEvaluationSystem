import React, { useMemo, useState } from 'react';

const PURPLE = '#4B1B78';
const BG = '#F4F5F7';

const CRITERIA = [
  {
    key: 'jobKnowledge',
    title: 'Job Knowledge',
    description:
      'Knowledge of products, policies and procedures; OR knowledge of techniques, skills, equipment, procedures, and materials)',
    max: 5,
  },
  {
    key: 'qualityOfWork',
    title: 'Quality of Work',
    description: 'Freedom for error and mistakes. Accuracy, quality of work in general.)',
    max: 5,
  },
  {
    key: 'quantityOfWork',
    title: 'Quantity of Work',
    description: 'Productivity of the employee.)',
    max: 5,
  },
  {
    key: 'reliability',
    title: 'Reliability',
    description:
      'The extent to which the employee can be depended upon to be available for work, to complete work properly, and complete work on time. The degree to which the employee is reliable, trustworthy, and persistent.)',
    max: 5,
  },
  {
    key: 'initiativeCreativity',
    title: 'Initiative and Creativity',
    description:
      'The ability to plan work and to proceed with a task without being told every detail and the ability to make constructive suggestions.)',
    max: 5,
  },
  {
    key: 'cooperation',
    title: 'Cooperation',
    description:
      'Willingness to work harmoniously with others in getting a job done. Readiness to respond positively to instructions and procedures.)',
    max: 5,
  },
  {
    key: 'attendance',
    title: 'Attendance',
    description: 'Consistency in coming to work daily and conforming to scheduled work hours.)',
    max: 5,
  },
];

function RatingDot() {
  return (
    <span
      className={[
        // visual dot
        'relative inline-flex h-4 w-4 sm:h-[18px] sm:w-[18px] items-center justify-center rounded-full border-2',
        'border-gray-300 bg-white shadow-sm transition',
        // checked state
        'peer-checked:border-[#4B1B78] peer-checked:bg-[#4B1B78]',
        // hover affordance
        'group-hover:border-[#6D3AA4] group-hover:shadow',
        // focus ring (keyboard)
        'peer-focus-visible:ring-2 peer-focus-visible:ring-[#9B7AC8] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white',
      ].join(' ')}
    >
      {/* inner highlight */}
      <span
        className={[
          'h-1.5 w-1.5 rounded-full bg-white opacity-0 transition',
          'peer-checked:opacity-100',
        ].join(' ')}
      />
    </span>
  );
}

export default function EvaluationPage() {
  const [employeeName, setEmployeeName] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');
  const [evaluatorName, setEvaluatorName] = useState('');
  const [ratings, setRatings] = useState(() => Object.fromEntries(CRITERIA.map((c) => [c.key, null])));

  const usedCounts = useMemo(() => {
    const values = Object.values(ratings).filter((v) => typeof v === 'number');
    const used5 = values.filter((v) => v === 5).length;
    const used4 = values.filter((v) => v === 4).length;
    return { used5, used4 };
  }, [ratings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit (no backend wired). Keep it simple and runnable.
    // eslint-disable-next-line no-alert
    alert('Submitted (demo only).');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      {/* Header */}
      <div style={{ backgroundColor: PURPLE }}>
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <img src="/imgs/image 3.png" alt="WAH logo" className="h-9 w-auto sm:h-10" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl px-4 pb-10 pt-5">
        {/* Sticky summary + section header + rating numbers */}
        <div className="sticky top-0 z-30 -mx-4 px-4 pb-3 pt-2" style={{ backgroundColor: BG }}>
          {/* Employee/Date + counts (sticky) */}
          <div className="mt-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center justify-between gap-4 px-2">
              <div className="text-base font-medium text-gray-800 sm:text-xl">Employee Being Evaluated</div>
              <div className="text-base font-medium text-gray-800 text-right sm:text-xl">Date</div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            </div>

            <div className="mt-3 text-center text-sm text-gray-700">
              <div>
                You have used <span className="font-semibold">{usedCounts.used5}</span> out of 3 ratings of{' '}
                <span className="font-semibold">5</span>
              </div>
              <div>
                You have used <span className="font-semibold">{usedCounts.used4}</span> out of 3 ratings of{' '}
                <span className="font-semibold">4</span>
              </div>
            </div>
          </div>

          {/* Performance Evaluation bar (sticky) */}
          <div className="mt-4 overflow-hidden rounded-md shadow-sm ring-1 ring-black/5">
            <div
              className="py-2.5 text-center text-base font-medium text-white sm:py-3 sm:text-lg"
              style={{ backgroundColor: PURPLE }}
            >
              Performance Evaluation
            </div>

            {/* Rating numbers row (sticky) */}
            <div className="bg-white px-3 py-2 sm:px-4">
              <div className="grid grid-cols-[minmax(0,1fr)_repeat(5,clamp(1.6rem,6vw,2.25rem))] items-center gap-1.5 sm:gap-2">
                <div className="text-sm font-medium text-gray-700" />
                {[5, 4, 3, 2, 1].map((n) => (
                  <div key={n} className="text-center text-sm font-semibold text-gray-700">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Criteria rows */}
        <div className="overflow-hidden rounded-md shadow-sm ring-1 ring-black/5">

          {/* Criteria rows */}
          <div className="divide-y bg-white">
            {CRITERIA.map((c) => (
              <div key={c.key} className="px-3 py-4 sm:px-4">
                <div className="grid grid-cols-[minmax(0,1fr)_repeat(5,clamp(1.6rem,6vw,2.25rem))] items-center gap-1.5 sm:gap-2">
                  <div className="pr-2">
                    <div className="font-semibold text-gray-900">{c.title}</div>
                    <div className="mt-0.5 text-sm leading-snug text-gray-700">({c.description}</div>
                  </div>

                  {[5, 4, 3, 2, 1].map((n) => (
                    <div key={n} className="flex justify-center">
                      <label className="group cursor-pointer rounded-full p-1">
                        <input
                          type="radio"
                          name={c.key}
                          className="peer sr-only"
                          checked={ratings[c.key] === n}
                          onChange={() => setRatings((prev) => ({ ...prev, [c.key]: n }))}
                        />
                        <RatingDot />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional comments */}
        <div className="mt-8 overflow-hidden rounded-md shadow-sm ring-1 ring-black/5">
          <div
            className="py-2.5 text-center text-base font-medium text-white sm:py-3 sm:text-lg"
            style={{ backgroundColor: PURPLE }}
          >
            Additional Comments
          </div>
          <div className="bg-white px-3 py-4 sm:px-4">
            <div className="text-sm text-gray-800">
              Please provide any additional comments relevant to this evaluation. Do not enter{' '}
              <span className="font-semibold">“NONE”</span>. (Optional)
            </div>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-3 h-28 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Evaluator */}
        <div className="mt-10 overflow-hidden rounded-md shadow-sm ring-1 ring-black/5">
          <div
            className="py-2.5 text-center text-base font-medium text-white sm:py-3 sm:text-lg"
            style={{ backgroundColor: PURPLE }}
          >
            Evaluator’s Name
          </div>
          <div className="bg-white px-3 py-5 sm:px-4">
            <label className="block text-sm font-medium text-gray-900">
              Evaluator’s Name <span className="text-red-600">*</span>
            </label>
            <input
              value={evaluatorName}
              onChange={(e) => setEvaluatorName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="rounded-full px-8 py-2 text-white shadow-sm sm:px-10"
            style={{ backgroundColor: usedCounts.used5 + usedCounts.used4 > 0 ? '#7B5AA6' : '#8C76B0' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

