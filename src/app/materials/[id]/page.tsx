import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allMaterials, getMaterialById, getRelatedMaterials } from '../../../data';
import { PropertyRow } from '../../../components/materials/PropertyRow';
import { RatingBadge } from '../../../components/materials/RatingBadge';
import { TemperTable } from '../../../components/materials/TemperTable';
import { RelatedMaterials } from '../../../components/materials/RelatedMaterials';
import { ViewToggle } from '../../../components/ui/ViewToggle';
import { propertyDescriptions } from '../../../lib/propertyDescriptions';
import { GitCompare, ArrowLeft, FlaskConical } from 'lucide-react';
import { MaterialRadar } from '../../../components/charts';
import type { Metadata } from 'next';
import type { Material } from '../../../data/types';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allMaterials.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const m = getMaterialById(id);
  if (!m) return { title: 'Material Not Found' };
  return {
    title: m.name,
    description: m.description,
  };
}

function Standards({ standards }: { standards: Material['standards'] }) {
  if (!standards) return null;
  const entries: { label: string; value: string }[] = [];
  if (standards.astm?.length) entries.push({ label: 'ASTM', value: standards.astm.join(', ') });
  if (standards.ams?.length) entries.push({ label: 'AMS', value: standards.ams.join(', ') });
  if (standards.uns) entries.push({ label: 'UNS', value: standards.uns });
  if (standards.iso?.length) entries.push({ label: 'ISO', value: standards.iso.join(', ') });
  if (standards.din?.length) entries.push({ label: 'DIN', value: standards.din.join(', ') });
  if (standards.sae?.length) entries.push({ label: 'SAE', value: standards.sae.join(', ') });
  if (!entries.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {entries.map(({ label, value }) => (
        <span key={label} className="inline-flex items-center gap-1.5 text-xs bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1">
          <span className="text-zinc-500">{label}</span>
          <span className="text-zinc-200 font-mono">{value}</span>
        </span>
      ))}
    </div>
  );
}

export default async function MaterialDetailPage({ params }: Props) {
  const { id } = await params;
  const m = getMaterialById(id);
  if (!m) notFound();

  const related = getRelatedMaterials(m);
  const pd = propertyDescriptions;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
        <Link href="/" className="hover:text-zinc-300">Home</Link>
        <span>/</span>
        <Link href="/materials" className="hover:text-zinc-300">Materials</Link>
        <span>/</span>
        <Link href={`/families/${m.family}`} className="hover:text-zinc-300 capitalize">{m.family}</Link>
        <span>/</span>
        <span className="text-zinc-300">{m.name}</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wide font-medium">{m.subFamily}</span>
                <h1 className="text-3xl font-bold text-zinc-100 mt-1">{m.name}</h1>
              </div>
              <div className="flex items-center gap-2 shrink-0 mt-1">
                <ViewToggle />
                <Link
                  href={`/compare?ids=${m.id}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 transition-all"
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  Compare
                </Link>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed">{m.description}</p>
          </div>

          {/* Key props summary bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'UTS', value: `${m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min} MPa`, sub: `${m.mechanical.tensileStrength.min}–${m.mechanical.tensileStrength.max}` },
              { label: 'Yield', value: `${m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min} MPa`, sub: `${m.mechanical.yieldStrength.min}–${m.mechanical.yieldStrength.max}` },
              { label: 'Density', value: `${m.mechanical.density} g/cm³`, sub: `${m.family}` },
              { label: 'Elastic Mod.', value: `${m.mechanical.elasticModulus} GPa`, sub: 'stiffness' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="rounded-xl bg-zinc-800/50 border border-zinc-700/50 p-3 text-center">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">{label}</p>
                <p className="text-lg font-bold text-zinc-100">{value}</p>
                <p className="text-[10px] text-zinc-600 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          {/* Mechanical Properties */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Mechanical Properties</h2>
            <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 divide-y divide-zinc-700/30 overflow-hidden">
              <PropertyRow label="Density" value={m.mechanical.density} unit="g/cm³"
                description={pd.density?.description} beginnerTip={pd.density?.beginnerTip} highlight />
              <PropertyRow label="Tensile Strength (UTS)" value={m.mechanical.tensileStrength} unit="MPa"
                description={pd.tensileStrength?.description} beginnerTip={pd.tensileStrength?.beginnerTip} />
              <PropertyRow label="Yield Strength" value={m.mechanical.yieldStrength} unit="MPa"
                description={pd.yieldStrength?.description} beginnerTip={pd.yieldStrength?.beginnerTip} highlight />
              <PropertyRow label="Elongation" value={m.mechanical.elongation} unit="%"
                description={pd.elongation?.description} beginnerTip={pd.elongation?.beginnerTip} />
              <PropertyRow label="Elastic Modulus" value={m.mechanical.elasticModulus} unit="GPa"
                description={pd.elasticModulus?.description} beginnerTip={pd.elasticModulus?.beginnerTip} highlight />
              {m.mechanical.shearModulus && (
                <PropertyRow label="Shear Modulus" value={m.mechanical.shearModulus} unit="GPa"
                  description={pd.shearModulus?.description} />
              )}
              {m.mechanical.poissonRatio && (
                <PropertyRow label="Poisson's Ratio" value={m.mechanical.poissonRatio} unit=""
                  description={pd.poissonRatio?.description} beginnerTip={pd.poissonRatio?.beginnerTip} highlight />
              )}
              {m.mechanical.fatigueStrength && (
                <PropertyRow label="Fatigue Strength" value={m.mechanical.fatigueStrength} unit="MPa"
                  description={pd.fatigueStrength?.description} beginnerTip={pd.fatigueStrength?.beginnerTip} />
              )}
            </div>
            {/* Hardness */}
            {(m.mechanical.hardness.brinell || m.mechanical.hardness.rockwellB || m.mechanical.hardness.rockwellC) && (
              <div className="mt-3 rounded-xl bg-zinc-800/20 border border-zinc-700/50 divide-y divide-zinc-700/30 overflow-hidden">
                <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide bg-zinc-800/30">Hardness</div>
                {m.mechanical.hardness.brinell && (
                  <PropertyRow label="Brinell Hardness" value={m.mechanical.hardness.brinell} unit="HB" description={pd.hardness?.description} />
                )}
                {m.mechanical.hardness.rockwellB && (
                  <PropertyRow label="Rockwell B" value={m.mechanical.hardness.rockwellB} unit="HRB" highlight />
                )}
                {m.mechanical.hardness.rockwellC && (
                  <PropertyRow label="Rockwell C" value={m.mechanical.hardness.rockwellC} unit="HRC" />
                )}
              </div>
            )}
          </section>

          {/* Thermal Properties */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Thermal Properties</h2>
            <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 divide-y divide-zinc-700/30 overflow-hidden">
              <PropertyRow label="Thermal Conductivity" value={m.thermal.conductivity} unit="W/m·K"
                description={pd.thermalConductivity?.description} beginnerTip={pd.thermalConductivity?.beginnerTip} highlight />
              <PropertyRow label="Thermal Expansion (CTE)" value={m.thermal.thermalExpansion} unit="µm/m·°C"
                description={pd.thermalExpansion?.description} beginnerTip={pd.thermalExpansion?.beginnerTip} />
              {m.thermal.specificHeat && (
                <PropertyRow label="Specific Heat" value={m.thermal.specificHeat} unit="J/kg·K"
                  description={pd.specificHeat?.description} highlight />
              )}
              {m.thermal.meltingRange && (
                <PropertyRow label="Melting Range" value={m.thermal.meltingRange} unit="°C"
                  description={pd.meltingRange?.description} />
              )}
            </div>
          </section>

          {/* Processability */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Processability</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Weldability', rating: m.processability.weldability, key: 'weldability' },
                { label: 'Machinability', rating: m.processability.machinability, key: 'machinability' },
                { label: 'Formability', rating: m.processability.formability, key: 'formability' },
                ...(m.processability.castability ? [{ label: 'Castability', rating: m.processability.castability, key: 'castability' }] : []),
                { label: 'Corrosion Resistance', rating: m.corrosionResistance, key: 'corrosionResistance' },
              ].map(({ label, rating, key }) => (
                <div key={key} className="flex items-center justify-between rounded-xl bg-zinc-800/30 border border-zinc-700/50 px-4 py-3">
                  <span className="text-sm text-zinc-400">{label}</span>
                  <RatingBadge rating={rating} />
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl bg-zinc-800/30 border border-zinc-700/50 px-4 py-3">
                <span className="text-sm text-zinc-400">Heat Treatable</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${m.processability.heatTreatable ? 'bg-purple-900/50 text-purple-300 border-purple-800' : 'bg-zinc-800 text-zinc-500 border-zinc-700'}`}>
                  {m.processability.heatTreatable ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
            {m.processability.weldNotes && (
              <div className="mt-3 rounded-xl bg-zinc-800/20 border border-zinc-700/50 px-4 py-3">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Weld Notes</p>
                <p className="text-sm text-zinc-300">{m.processability.weldNotes}</p>
              </div>
            )}
          </section>

          {/* Tempers */}
          {m.tempers && m.tempers.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-zinc-200 mb-3">Tempers / Conditions</h2>
              <TemperTable tempers={m.tempers} />
            </section>
          )}

          {/* Standards */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Standards & Designations</h2>
            <Standards standards={m.standards} />
          </section>

          {/* Applications */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Applications & Industries</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Common Applications</h3>
                <ul className="space-y-1.5">
                  {m.commonApplications.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-blue-500 mt-1.5 shrink-0">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {m.industries.map((ind) => (
                    <span key={ind} className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 px-2.5 py-1 rounded-lg">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key characteristics */}
          <div className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">Key Characteristics</h3>
            <ul className="space-y-2">
              {m.keyCharacteristics.map((k) => (
                <li key={k} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-emerald-500 mt-1 shrink-0">✓</span>
                  {k}
                </li>
              ))}
            </ul>
          </div>

          {/* Property profile radar */}
          <div className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">Property Profile</h3>
            <MaterialRadar material={m} />
          </div>

          {/* Relative cost */}
          <div className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">Relative Cost</h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`h-2 flex-1 rounded-full ${n <= m.relativeCost ? 'bg-blue-500' : 'bg-zinc-700'}`}
                />
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">
              {['', 'Most economical', 'Economy', 'Mid-range', 'Premium', 'High-end'][m.relativeCost]} within family
            </p>
          </div>

          {/* Beginner/Expert notes */}
          {m.beginnerNote && (
            <div className="rounded-xl bg-blue-900/20 border border-blue-800/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="w-3.5 h-3.5 text-blue-400" />
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Beginner Note</h3>
              </div>
              <p className="text-sm text-blue-200/80">{m.beginnerNote}</p>
            </div>
          )}
          {m.expertNote && (
            <div className="rounded-xl bg-purple-900/20 border border-purple-800/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="w-3.5 h-3.5 text-purple-400" />
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Expert Note</h3>
              </div>
              <p className="text-sm text-purple-200/80">{m.expertNote}</p>
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
              <RelatedMaterials materials={related} />
            </div>
          )}

          {/* Back link */}
          <Link href="/materials" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}
