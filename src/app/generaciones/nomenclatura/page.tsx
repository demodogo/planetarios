import { NomenclaturaPage } from '@/ui/generaciones/nomenclatura-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nomenclatura',
};

export default function Page() {
	return <NomenclaturaPage />;
}
