'use client'
import { useAppSelector } from "@/store";

function HomePage() {
    const theme = useAppSelector((state) => state.app.theme);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Home {theme}</h1>
		</main>
	)
}

export default HomePage