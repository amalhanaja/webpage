'use client'

import useInkCursor from '@/hooks/use-ink-cursor'

const InkCursor = () => {

    const inkCursorComponent = useInkCursor();

    return (
        <div className='pointer-events-none fixed inset-0 z-40'>
            {inkCursorComponent}
        </div>
    )
};
export default InkCursor