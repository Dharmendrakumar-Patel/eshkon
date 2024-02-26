"use client"
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { useAppDispatch, useAppSelector } from '@/store';
import { setThemeState } from '@/store/appSlice';
import { Switch } from '@/components/ui/switch';

function Toggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);
  const { setTheme } = useTheme();
  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    const newTheme = dark ? 'light' : 'dark';
    setDark((prevDark) => !prevDark);
    dispatch(setThemeState(newTheme));
    setTheme(newTheme);
  };

  return (
    <>
      <Switch
        checked={dark}
        onClick={handleDarkMode}
        className="mr-2"
      />
      {dark ? 'Dark Mode' : 'Light Mode'}
    </>
  );
}

export default Toggle;
