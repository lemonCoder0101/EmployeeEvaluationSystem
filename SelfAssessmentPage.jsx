import React, { useMemo, useState } from 'react';

const PURPLE = '#4B1B78';
const BG = '#F4F5F7';

function formatLongDate(d) {
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(d);
  } catch {
    return '';
  }
}

export default function SelfAssessmentPage() {
  const today = useMemo(() => formatLongDate(new Date()), []);

  const [lastEvalStart, setLastEvalStart] = useState('');
  const [nextEvalStart, setNextEvalStart] = useState('');

  const [accomplishments, setAccomplishments] = useState('');
  const [improvements, setImprovements] = useState('');
  const [goals, setGoals] = useState('');
  const [advice, setAdvice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted (demo only).');
  };

  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: BG }}>
      {/* Top Header Navigation */}
      <div style={{ backgroundColor: PURPLE }}>
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <img src="/imgs/image 3.png" alt="WAH logo" className="h-9 w-auto sm:h-10" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-6">
        {/* Unified Container: Hero Card + Form */}
        <div className="mx-auto overflow-hidden rounded-3xl ring-1 ring-black/5">
          
          {/* Hero Section - Top Half */}
          <div className="bg-gradient-to-br from-[#3B0B5D] to-[#4B1B78]">
            <div className="relative flex min-h-[220px] items-center justify-between px-8 py-6 sm:px-16">
              
              <div className="relative z-10 w-1/2">
                 <img
                  src="/imgs/self-reflect.png"
                  alt="Self reflect"
                  className="h-36 w-auto select-none sm:h-48 object-contain"
                />
              </div>

              <div className="relative z-10 text-right">
                <div className="text-2xl font-bold tracking-tight text-white sm:text-5xl">
                  Self Assessment
                </div>
              </div>

              {/* Decorative Stars */}
              <img src="/imgs/star.png" alt="" className="absolute right-10 top-6 h-8 w-auto opacity-70" />
              <img src="/imgs/star.png" alt="" className="absolute left-1/3 bottom-6 h-5 w-auto opacity-40" />
            </div>
          </div>

          {/* Form Section - Bottom Half (No margin-top) */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-white px-6 pb-12 pt-10 sm:px-12"
          >
            {/* Employee Metadata */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="text-base font-semibold text-gray-900">Employee Name</div>
                <div className="text-base font-semibold text-gray-900">Designation</div>
              </div>
              <div className="space-y-1 sm:text-right">
                <div className="text-sm font-medium text-gray-400">Date Today: {today}</div>
                <div className="text-sm font-medium text-gray-400">Date Hired: January 1, 2026</div>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            {/* Date Inputs */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                  Last Evaluation Start Date
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={lastEvalStart}
                    onChange={(e) => setLastEvalStart(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm outline-none focus:border-purple-500"
                    placeholder="MM/DD/YYYY"
                  />
                  <button type="button" className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                     <img src="/imgs/calendarIcon.png" alt="Calendar" className="h-5 w-5 opacity-50" />
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                  Next Evaluation Start Date
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nextEvalStart}
                    onChange={(e) => setNextEvalStart(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm outline-none focus:border-purple-500"
                    placeholder="MM/DD/YYYY"
                  />
                  <button type="button" className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                     <img src="/imgs/calendarIcon.png" alt="Calendar" className="h-5 w-5 opacity-50" />
                  </button>
                </div>
              </div>
            </div>

            {/* Assessment Content */}
            <div className="mt-12 space-y-12">
              <Field
                label="My noteworthy accomplishments for this period."
                required
                value={accomplishments}
                onChange={setAccomplishments}
              />
              <Field 
                label="My areas to improve on?" 
                required 
                value={improvements} 
                onChange={setImprovements} 
              />
              <Field
                label="My professional development goals for this year?"
                required
                value={goals}
                onChange={setGoals}
              />
              <Field
                label="My additional advice or suggestion for the management."
                required
                value={advice}
                onChange={setAdvice}
              />
            </div>

            {/* Submit Section */}
            <div className="mt-14 flex justify-center">
              <button
                type="submit"
                className="rounded-full px-16 py-3.5 text-white font-bold tracking-wide transition-all hover:brightness-110 active:scale-95 shadow-md"
                style={{ backgroundColor: '#8C76B0' }}
              >
                SUBMIT ASSESSMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, value, onChange }) {
  return (
    <div>
      <div className="text-lg font-bold text-gray-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 h-32 w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/30 px-5 py-4 text-sm outline-none transition-all focus:bg-white focus:border-purple-400"
        placeholder="Enter your response..."
      />
    </div>
  );
}