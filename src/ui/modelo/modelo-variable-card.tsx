export const MODEL_RING_COLORS = [
	'#404040',
	'#bed894',
	'#faab48',
	'#81cfdf',
	'#b7a1ca',
	'#296196',
	'#d20000',
	'#ffd3b0',
];

const RING_STEP = 11.5;
const TARGET_SIZE = 100;

type PopoverSide = 'left' | 'center' | 'right';
type PopoverVertical = 'top' | 'bottom';

export interface ModeloVariableCardProps {
    color: string;
    label: string;
    sublabel: string;
    description: string;
    popoverDescription: string;
    popoverBackgroundColor: string;
    popoverSide?: PopoverSide;
    popoverVertical?: PopoverVertical;
    popoverTextColor?: 'black' | 'white';
}

function getRingSize(index: number) {
    return TARGET_SIZE - index * RING_STEP;
}

function getPopoverAlignment(popoverSide: PopoverSide) {
    switch (popoverSide) {
        case 'left':
            return 'left-0';
        case 'right':
            return 'right-0';
        default:
            return 'left-1/2 -translate-x-1/2';
    }
}

function ModeloVariablePopover({
                                   label,
                                   sublabel,
                                   description,
                                   backgroundColor,
                                   textColor = 'black',
                               }: {
    label: string;
    sublabel: string;
    description: string;
    backgroundColor: string;
    textColor?: 'black' | 'white';
}) {
    return (
        <div
            className="relative h-[18.375rem] overflow-hidden grid grid-cols-2 min-w-fit rounded-[2.125rem] shadow-[0_0.75rem_2rem_rgba(0,0,0,0.18)]"
            style={{backgroundColor}}
        >
            <div className=" inset-y-0 left-0 w-[13.25rem] ">
                <div className="absolute -left-[6rem] -top-[8rem] h-[25.875rem] w-[25.875rem]">
                    {MODEL_RING_COLORS.map((ringColor, index) => {
                        const size = getRingSize(index);
                        return (
                            <div
                                key={ringColor}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                    width: `${size}%`,
                                    height: `${size}%`,
                                    backgroundColor: ringColor,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="p-8">
                <p className={`font-heading text-[1.8rem] uppercase leading-[0.88] ${textColor === 'white' ? 'text-white/80' : 'text-black/80'}`}>
                    <span className="block font-light">{label}</span>
                    <span className="block font-bold">{sublabel}</span>
                </p>
                <p className={`font-body-prototype mt-4 text-[1rem] leading-[1.08] ${textColor === 'white' ? 'text-white/80' : 'text-black/80'}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export function ModeloVariableCard({
                                       color,
                                       label,
                                       sublabel,
                                       description,
                                       popoverDescription,
                                       popoverBackgroundColor,
                                       popoverSide = 'center',
                                       popoverVertical = 'top',
                                       popoverTextColor = 'black',
                                   }: ModeloVariableCardProps) {
    return (
        <div
            className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
            tabIndex={0}
        >
            <div className="relative h-[7rem] w-[7rem] sm:h-[8rem] sm:w-[8rem] lg:h-[9.1875rem] lg:w-[9.1875rem]">
                <div
                    className="absolute inset-0 rounded-full"
                    style={{backgroundColor: color}}
                />
                <div
                    className="absolute inset-[1.75rem] rounded-full bg-white transition-[transform,opacity] duration-300 ease-out group-hover:scale-0 group-hover:opacity-0 group-focus-visible:scale-0 group-focus-visible:opacity-0 sm:inset-[2rem] lg:inset-[2.5rem]"/>
            </div>

            <div
                className={`pointer-events-none absolute z-20 hidden w-[37.75rem] opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block ${getPopoverAlignment(popoverSide)} ${popoverVertical === 'bottom' ? 'top-[calc(66%+1.75rem)] -translate-y-2' : 'bottom-[calc(106%+1.75rem)] translate-y-2'}`}
            >
                <ModeloVariablePopover
                    label={label}
                    sublabel={sublabel}
                    description={popoverDescription}
                    backgroundColor={popoverBackgroundColor}
                    textColor={popoverTextColor}
                />
            </div>

            <p className="font-heading mt-2 text-[0.875rem] leading-tight text-black/80 sm:text-[0.9375rem] lg:mt-3 lg:text-[1rem]">
                <span className="font-light uppercase">{label}</span>
                <br/>
                <span className="font-bold uppercase">{sublabel}</span>
            </p>
            <p className="font-body-prototype mt-1 text-[0.8125rem] leading-[1.1] text-black/70 sm:text-[0.875rem] lg:text-[0.9375rem]">
                {description}
            </p>
        </div>
    );
}
