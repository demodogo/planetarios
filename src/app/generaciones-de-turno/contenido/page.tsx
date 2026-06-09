import { ContenidoPage } from '@/ui/generaciones/contenido-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contenido del Estudio',
};

export default function Page() {
	return <ContenidoPage />;
}
