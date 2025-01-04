"use client"

import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";

export const ButtonBack = () => {
    const router = useRouter();
    return (
        <Button variant="neutral" onClick={() => router.back()}><ArrowLeft/>BACK</Button>
    )
}