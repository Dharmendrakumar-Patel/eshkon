'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import { useAppSelector } from "@/store";
import { Badge } from './ui/badge';
import Link from 'next/link';

interface cardData {
    heading: string;
    description: [{
        value: string
    }];
    thumbnail: string;
    backgroundImage: string;
    id: string
}

function CardComp(props: cardData) {
    console.log(props)
    const theme = useAppSelector((state) => state.app.theme);
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl font-sans font-semibold mb-3'>{props.heading}</CardTitle>
                <div className='w-full flex items-center justify-center'>
                    <Image src={'https:'+props.thumbnail} width={175} height={175} alt="demo" />
                </div>
            </CardHeader>
            <CardContent className='h-[55px] overflow-clip mb-5'>
                {
                    props.description.map((text, index) => {
                        return (
                            <>
                                <CardDescription key={index} className='indent-1 mb-2 text-left'>{text.value}</CardDescription>
                            </>
                        )
                    })
                }
            </CardContent>
            <CardFooter className='flex flex-col items-start justify-center'>
                <Link href={`/${props.id}`} className='w-full mb-4'>
                    <Button className='w-full'>
                        View
                    </Button>
                </Link>
                <Badge variant="secondary">{theme !== "light" ? "Dark Theme" : "Light Theme"}</Badge>
            </CardFooter>
        </Card>
    )
}

export default CardComp