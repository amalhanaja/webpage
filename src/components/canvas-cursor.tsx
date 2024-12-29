'use client';

import useCanvasCursor from '@/hooks/use-canvas-cursor';

export const CanvasCursor = () => {
	useCanvasCursor();
	return <canvas className='pointer-events-none fixed inset-0 z-50' id='canvas' />;
};