import alexisCamhiLogo from '@/assets/logos/associates/alexis_camhi_sanitized.png';
import observatorioLogo from '@/assets/logos/associates/observatorio.png';
import enapLogo from '@/assets/logos/clients/enap.svg';
import laTerceraLogo from '@/assets/logos/clients/la_tercera.webp';
import luckyStrikeLogo from '@/assets/logos/clients/lucky_strike.svg';
import televisaLogo from '@/assets/logos/clients/televisa.png';
import planetariosLogo from '@/assets/logos/planetarios/planetarios_black.svg';
import planetariosColorLogo from '@/assets/logos/planetarios/planetarios_colored.svg';

export const CLIENT_LOGOS = [
	{
		title: 'Lucky Strike',
		logo: luckyStrikeLogo,
		classNames: 'h-[7.5rem] w-auto',
	},
	{
		title: 'La Tercera',
		logo: laTerceraLogo,
		classNames: 'h-[4rem] w-auto',
	},

	{
		title: 'Televisa',
		logo: televisaLogo,
		classNames: 'h-[6rem] w-auto',
	},
	{
		title: 'ENAP',
		logo: enapLogo,
		classNames: 'h-[4.5rem] w-auto',
	},
];

export const ASSOCIATE_LOGOS = [
	{
		title: 'Observatorio Conciencia Empresarial',
		logo: observatorioLogo,

		classNames: 'h-auto w-[18rem] max-w-full sm:w-[20rem]',
	},
	{
		title: 'Alexis Camhi',
		logo: alexisCamhiLogo,

		classNames: 'h-auto w-[16rem] max-w-full sm:w-[18rem]',
	},
];

export const PLANETARIOS_LOGOS = {
	planetariosColored: planetariosColorLogo,
	planetariosBlack: planetariosLogo,
};
