import type { MaterialForm } from '../../data/types';

const FORM_META: Record<MaterialForm, { label: string; icon: string }> = {
  bar:              { label: 'Bar',       icon: '▬' },
  rod:              { label: 'Rod',       icon: '━' },
  wire:             { label: 'Wire',      icon: '〰' },
  plate:            { label: 'Plate',     icon: '▭' },
  sheet:            { label: 'Sheet',     icon: '▱' },
  strip:            { label: 'Strip',     icon: '▔' },
  tube:             { label: 'Tube',      icon: '◯' },
  pipe:             { label: 'Pipe',      icon: '◎' },
  'structural-angle': { label: 'Angle',  icon: '∟' },
  'c-channel':      { label: 'C-Channel',icon: 'C' },
  'i-beam':         { label: 'I-Beam',   icon: 'I' },
  forging:          { label: 'Forging',  icon: '⬟' },
  casting:          { label: 'Casting',  icon: '⬡' },
  extrusion:        { label: 'Extrusion',icon: '⇒' },
  powder:           { label: 'Powder',   icon: '·' },
};

export function FormsGrid({ forms }: { forms: MaterialForm[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {forms.map((f) => {
        const meta = FORM_META[f];
        return (
          <span
            key={f}
            className="inline-flex items-center gap-1 text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 px-2 py-1 rounded-md font-mono"
            title={meta.label}
          >
            <span className="text-zinc-500 text-[10px]">{meta.icon}</span>
            {meta.label}
          </span>
        );
      })}
    </div>
  );
}
