import Catalog from '../components/Catalog';
import { Suspense } from 'react';

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const q = params.q || "";
  const category = params.category || "All";

  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
      <Catalog searchTerm={q} category={category} />
    </Suspense>
  );
}
