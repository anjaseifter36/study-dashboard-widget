type Props = {
  value: number;
  total: number;
};

export default function CircularProgress({
  value,
  total,
}: Props) {
  const percentage = Math.round((value / total) * 100);

  const radius = 148;
  const stroke = 15;

  const circumference = 2 * Math.PI * radius;

  const arc = circumference * 0.76;
  const gap = circumference - arc;

  const offset =
    arc - (arc * percentage) / 100;

  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">

      <svg
        width="420"
        height="420"
        viewBox="0 0 420 420"
        className="-rotate-[135deg]"
      >

        <defs>

          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >

            <stop offset="0%" stopColor="#BFEFFF"/>

            <stop offset="45%" stopColor="#87DBFF"/>

            <stop offset="100%" stopColor="#58BEFF"/>

          </linearGradient>

        </defs>

        <circle
          cx="210"
          cy="210"
          r={radius}
          fill="none"
          stroke="#EEF4F8"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arc} ${gap}`}
        />

        <circle
          cx="210"
          cy="210"
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arc} ${gap}`}
          strokeDashoffset={offset}
        />

      </svg>

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="flex items-end">

          <span className="title-big">

            {percentage}

          </span>

          <span className="text-[42px] mb-2 font-semibold">

            %

          </span>

        </div>

      </div>

    </div>
  );
}