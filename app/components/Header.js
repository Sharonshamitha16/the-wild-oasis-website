import Logo from "./Logo"
import Navigation from "./navigation"

export const Header = () => {
    return (
        <header className="border-b-[blur] border-pirimary-950 px-8 py-5">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <Navigation />
            </div>
        </header>

    )
}
