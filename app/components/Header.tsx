"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, ArrowRight } from "lucide-react"

export function Header() {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<header className="relative z-10 w-full bg-background border-b border-border">
			<div className="container flex items-center justify-between h-16 px-4 mx-auto">
				<div className="text-xl font-bold text-primary">JoseT</div>
				<nav className="hidden md:flex space-x-8">
					<a href="#inicio" className="text-muted-foreground hover:text-primary font-bold">
						Inicio
					</a>
					<a href="#experiencia" className="text-muted-foreground hover:text-primary font-bold">
						Experiencia
					</a>
					<a href="#proyectos" className="text-muted-foreground hover:text-primary font-bold">
						Proyectos
					</a>
					<a href="#skills" className="text-muted-foreground hover:text-primary font-bold">
						Skills
					</a>
					<a href="#sobre-mi" className="text-muted-foreground hover:text-primary font-bold">
						Sobre mí
					</a>
				</nav>
				<div className="flex items-center gap-4">
					<button
						onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
						className="p-2 rounded-full hover:bg-accent transition-colors"
						aria-label="Toggle dark mode"
					>
						{resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
					</button>
					<a href="#contact" className="px-6 py-2 text-white rounded-full bg-primary bg-pink-600 hover:bg-pink-700 transition-colors hidden sm:flex items-center gap-2">
						<ArrowRight />
						Contáctame
					</a>
				</div>
			</div>
		</header>
	)
}