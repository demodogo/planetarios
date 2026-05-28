import { ModeloPage } from '@/ui/modelo/modelo-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Modelo de Valor',
};

export default function Page() {
	return <ModeloPage />;
}
