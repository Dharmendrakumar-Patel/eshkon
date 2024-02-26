'use client'
import React, {useState} from 'react'
import { useAppDispatch } from "@/store";
import { setThemeState } from '@/store/appSlice';
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

function Toggle() {
    const dispatch = useAppDispatch();
    const { setTheme } = useTheme()
    const [dark, setDark] = useState(false)

    const handleDarkMode = () => {
        if (dark) {
            setDark(false)
            dispatch(setThemeState("light"))
            setTheme("light")
        } else {
            setDark(true)
            dispatch(setThemeState("dark"))   
            setTheme("dark")
        }
    }
    
    return (
        <>
            <Switch
                checked={dark}
                onClick={() => handleDarkMode()}
                className='mr-2'
            />
            {dark ? "Dark Mode" : "Light Mode"}
        </>
    )
}

export default Toggle