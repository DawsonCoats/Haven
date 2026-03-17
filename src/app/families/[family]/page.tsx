import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMaterialsByFamily, allMaterials } from '../../../data';
import { FamilyTree } from '../../../components/families/FamilyTree';
import { MaterialTable } from '../../../components/materials/MaterialTable';
import { AshbyPlot } from '../../../components/charts';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ family: string }>;
}

const familyConfig = {
  aluminum: {
    title: 'Aluminum Alloys',
    description: 'Complete reference for wrought aluminum alloys, from commercially pure 1xxx to ultra-high-strength 7xxx series.',
    seriesGroups: [
      { slug: '1xxx', label: '1xxx Series', subFamily: '1xxx Series' },
      { slug: '2xxx', label: '2xxx Series', subFamily: '2xxx Series' },
      { slug: '3xxx', label: '3xxx Series', subFamily: '3xxx Series' },
      { slug: '4xxx', label: '4xxx Series', subFamily: '4xxx Series' },
      { slug: '5xxx', label: '5xxx Series', subFamily: '5xxx Series' },
      { slug: '6xxx', label: '6xxx Series', subFamily: '6xxx Series' },
      { slug: '7xxx', label: '7xxx Series', subFamily: '7xxx Series' },
    ],
  },
  steel: {
    title: 'Steel Alloys',
    description: 'Carbon, alloy, and stainless steels covering structural, tooling, corrosion-resistant, and precipitation-hardening applications.',
    seriesGroups: [
      { slug: 'carbon', label: 'Carbon Steel', subFamily: 'Carbon Steel' },
      { slug: 'alloy', label: 'Alloy Steel', subFamily: 'Alloy Steel' },
      { slug: '300-series', label: '300-Series Stainless', subFamily: '300-Series Stainless' },
      { slug: '400-series', label: '400-Series Stainless', subFamily: '400-Series Stainless' },
      { slug: 'ph-stainless', label: 'PH Stainless', subFamily: 'PH Stainless' },
      { slug: 'duplex', label: 'Duplex Stainless', subFamily: 'Duplex Stainless' },
    ],
  },
  titanium: {
    title: 'Titanium Alloys',
    description: 'Commercially pure and alpha-beta titanium alloys for aerospace, medical, and corrosion-resistant applications.',
    seriesGroups: [
      { slug: 'cp', label: 'cp-Ti (Commercially Pure)', subFamily: 'cp-Ti' },
      { slug: 'alpha-beta', label: 'Alpha-Beta Alloys', subFamily: 'Alpha-Beta' },
    ],
  },
  copper: {
    title: 'Copper Alloys',
    description: 'Electrolytic copper, beryllium copper, brass, and bronze covering electrical, forming, and bearing applications.',
    seriesGroups: [
      { slug: 'pure', label: 'Pure Copper', subFamily: 'Pure Copper' },
      { slug: 'beryllium', label: 'Beryllium Copper', subFamily: 'Beryllium Copper' },
      { slug: 'brass', label: 'Brass', subFamily: 'Brass' },
      { slug: 'bronze', label: 'Bronze', subFamily: 'Bronze' },
    ],
  },
} as const;

export function generateStaticParams() {
  return [
    { family: 'aluminum' },
    { family: 'steel' },
    { family: 'titanium' },
    { family: 'copper' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { family } = await params;
  const config = familyConfig[family as keyof typeof familyConfig];
  if (!config) return { title: 'Family Not Found' };
  return { title: config.title, description: config.description };
}

export default async function FamilyPage({ params }: Props) {
  const { family } = await params;
  const config = familyConfig[family as keyof typeof familyConfig];
  if (!config) notFound();

  const familyMaterials = getMaterialsByFamily(family as 'aluminum' | 'steel' | 'titanium' | 'copper');

  const seriesGroups = config.seriesGroups.map((sg) => ({
    slug: sg.slug,
    label: sg.label,
    materials: allMaterials.filter((m) => m.subFamily === sg.subFamily),
  }));

  const isAluminum = family === 'aluminum';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
        <Link href="/" className="hover:text-zinc-300">Home</Link>
        <span>/</span>
        <span className="text-zinc-300 capitalize">{family}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">{config.title}</h1>
        <p className="text-zinc-400 max-w-2xl">{config.description}</p>
        <p className="text-sm text-zinc-600 mt-2">{familyMaterials.length} grades</p>
      </div>

      {/* Series overview */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">
          {isAluminum ? 'Series Overview' : 'Type Overview'}
        </h2>

        {/* Property range summary */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              label: 'Strength Range',
              value: (() => {
                const min = Math.min(...familyMaterials.map((m) => m.mechanical.tensileStrength.min));
                const max = Math.max(...familyMaterials.map((m) => m.mechanical.tensileStrength.max));
                return `${min}–${max} MPa UTS`;
              })(),
            },
            {
              label: 'Density Range',
              value: (() => {
                const min = Math.min(...familyMaterials.map((m) => m.mechanical.density));
                const max = Math.max(...familyMaterials.map((m) => m.mechanical.density));
                return `${min.toFixed(2)}–${max.toFixed(2)} g/cm³`;
              })(),
            },
            {
              label: 'Grades Covered',
              value: `${familyMaterials.length} alloys`,
            },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">{label}</p>
              <p className="text-lg font-semibold text-zinc-200">{value}</p>
            </div>
          ))}
        </div>

        <FamilyTree familySlug={family} seriesGroups={seriesGroups} />
      </div>

      {/* Ashby scatter */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">Strength vs. Weight — {config.title}</h2>
        <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 p-4">
          <AshbyPlot materials={familyMaterials} height={380} />
        </div>
      </div>

      {/* All materials table */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">All {config.title}</h2>
        <MaterialTable materials={familyMaterials} />
      </div>
    </div>
  );
}
