"use client"

import {Card} from '@/components/ui/card';
import Image from 'next/image';
import me from '../../../public/me.webp';
import {FlickeringGrid} from '@/components/ui/flickering-grid';
import {useTheme} from 'next-themes';
import {useAnimate, useInView} from "motion/react";
import {useEffect} from "react";

export const ImageProfile = ({alt}: { alt: string }) => {
    const {theme} = useTheme();
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {once: true})
    const performAnimateWhileInView = async () => {
        await animate(scope.current, {scale: 1, opacity: 1}, {type: "spring", stiffness: 100, damping: 15, delay: 0.25});
    }
    useEffect(() => {
        if (!isInView) return
        performAnimateWhileInView()
    }, [isInView])
    return (
        <Card
            ref={scope}
            className="shadow-none col-span-12 flex flex-col gap-4 overflow-clip relative sm:col-span-4"
            initial={{opacity: 0, scale: 0}}
        >
            <FlickeringGrid
                className="absolute left-0 z-0 [mask:radial-gradient(circle_at_center,#fff_2000px,transparent_0)]"
                squareSize={6}
                gridGap={4}
                color={theme === 'light' ? '#44403c' : '#d6d3d1'}
                maxOpacity={0.5}
                flickerChance={0.1}
                height={1600}
                width={1600}
            />
            <Image src={me} alt={alt} className="translate-y-10 h-full w-full object-cover" title={alt}/>
        </Card>
    );
};