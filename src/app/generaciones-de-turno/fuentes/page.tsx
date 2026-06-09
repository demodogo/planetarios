import { FuentesPage } from '@/ui/generaciones/fuentes-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Fuentes',
};

export default function Page() {
	return <FuentesPage />;
}
