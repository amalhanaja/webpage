export const Logo = ({ className }: { className?: string }) => {
	return (
		<svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"
				 className={className}>
			<path d="M157.63 471H24L166.734 62.3024L233.676 239.357L157.63 471Z" fill="#FFD23F" />
			<path d="M296.526 341.51L184.23 41H321.468L437.928 341.51H296.526Z" fill="#EE4266" />
			<path d="M224.288 341.51H437.928L488 468.391H347.358L330.564 424.984H197.583L224.288 341.51Z" fill="#3BCEAC" />
			<path
				d="M437.928 341.51H296.526L184.23 41H321.468L437.928 341.51ZM437.928 341.51L488 468.391H347.358L330.564 424.984H197.583L224.288 341.51H437.928ZM157.63 471H24L166.734 62.3024L233.676 239.357L157.63 471Z"
				stroke="black" strokeWidth="20" />
		</svg>
	);
};