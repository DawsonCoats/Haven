import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allMaterials, seriesSlugMap } from '../../../../data';
import { MaterialTable } from '../../../../components/materials/MaterialTable';
import { MaterialCard } from '../../../../components/materials/MaterialCard';
import { PropertyBarChart } from '../../../../components/charts';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ family: string; series: string }>;
}

export function generateStaticParams() {
  const params: { family: string; series: string }[] = [];
  const alSeries = ['1xxx', '2xxx', '3xxx', '4xxx', '5xxx', '6xxx', '7xxx'];
  const steelSeries = ['carbon', 'alloy', '300-series', '400-series', 'ph-stainless', 'duplex'];
  const tiSeries = ['cp', 'alpha-beta'];
  const cuSeries = ['pure', 'beryllium', 'brass', 'bronze'];
  alSeries.forEach((s) => params.push({ family: 'aluminum', series: s }));
  steelSeries.forEach((s) => params.push({ family: 'steel', series: s }));
  tiSeries.forEach((s) => params.push({ family: 'titanium', series: s }));
  cuSeries.forEach((s) => params.push({ family: 'copper', series: s }));
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series } = await params;
  const subFamily = seriesSlugMap[series];
  if (!subFamily) return { title: 'Series Not Found' };
  return { title: subFamily };
}

export default async function SeriesPage({ params }: Props) {
  const { family, series } = await params;
  const subFamily = seriesSlugMap[series];
  if (!subFamily) notFound();

  const materials = allMaterials.filter((m) => m.family === family && m.subFamily === subFamily);
  if (!materials.length) notFound();

  const avgUTS = Math.round(
    materials.reduce((s, m) => s + (m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min), 0) / materials.length
  );
  const avgDensity = (materials.reduce((s, m) => s + m.mechanical.density, 0) / materials.length).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
        <Link href="/" className="hover:text-zinc-300">Home</Link>
        <span>/</span>
        <Link href={`/families/${family}`} className="hover:text-zinc-300 capitalize">{family}</Link>
        <span>/</span>
        <span className="text-zinc-300">{subFamily}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <span className="text-xs text-zinc-500 uppercase tracking-wide font-medium capitalize">{family} Alloys</span>
        <h1 className="text-3xl font-bold text-zinc-100 mt-1 mb-2">{subFamily}</h1>
        <div className="flex gap-4 text-sm text-zinc-500">
          <span>{materials.length} grades</span>
          <span>Avg UTS: {avgUTS} MPa</span>
          <span>Avg density: {avgDensity} g/cm³</span>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((m) => (
          <MaterialCard key={m.id} material={m} />
        ))}
      </div>

      {/* Bar chart */}
      {materials.length >= 2 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-200 mb-4">Strength &amp; Ductility Comparison</h2>
          <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 p-4">
            <PropertyBarChart materials={materials} />
          </div>
        </div>
      )}

      {/* Table */}
      <h2 className="text-lg font-semibold text-zinc-200 mb-4">Side-by-Side Comparison</h2>
      <MaterialTable materials={materials} />

      {/* Compare link */}
      {materials.length >= 2 && (
        <div className="mt-6 text-center">
          <Link
            href={`/compare?ids=${materials.slice(0, 4).map((m) => m.id).join(',')}`}
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 border border-blue-800/50 bg-blue-900/20 px-4 py-2 rounded-lg transition-all"
          >
            Compare all {Math.min(materials.length, 4)} grades side-by-side →
          </Link>
        </div>
      )}
    </div>
  );
}
