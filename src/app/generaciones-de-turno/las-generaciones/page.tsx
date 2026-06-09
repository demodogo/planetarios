import { LasGeneracionesPage } from '@/ui/generaciones/las-generaciones-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Las Generaciones',
};

export default function Page() {
	return <LasGeneracionesPage />;
}
