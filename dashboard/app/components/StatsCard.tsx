import { GraduationCap, ClipboardPenLine } from "lucide-react";

type Props = {
  ects: number;
  ectsTotal: number;
  exams: number;
  examsTotal: number;
};

export default function StatsCard({
  ects,
  ectsTotal,
  exams,
  examsTotal,
}: Props) {
  return (
    <div className="w-[340px]">

      <div className="flex items-center gap-6">

        <div className="icon-circle">
          <GraduationCap
            size={28}
            strokeWidth={2}
            className="text-[#66C5FF]"
          />
        </div>

        <div>

          <div className="flex items-end gap-2 whitespace-nowrap">

            <span className="text-[44px] font-bold leading-none text-slate-900">
              {ects}
            </span>

            <span className="text-[44px] font-medium leading-none text-slate-300">
              / {ectsTotal}
            </span>

          </div>

          <div className="mt-2 text-[22px] text-slate-400">
            ECTS
          </div>

        </div>

      </div>

      <div className="divider my-10 h-[1px] w-full" />

      <div className="flex items-center gap-6">

        <div className="icon-circle">
          <ClipboardPenLine
            size={28}
            strokeWidth={2}
            className="text-[#66C5FF]"
          />
        </div>

        <div>

          <div className="flex items-end gap-2 whitespace-nowrap">

            <span className="text-[44px] font-bold leading-none text-slate-900">
              {exams}
            </span>

            <span className="text-[44px] font-medium leading-none text-slate-300">
              / {examsTotal}
            </span>

          </div>

          <div className="mt-2 text-[22px] text-slate-400">
            Exams
          </div>

        </div>

      </div>

    </div>
  );
}