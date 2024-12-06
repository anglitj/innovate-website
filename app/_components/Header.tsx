import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className=" border-b border-gray-400">
      <div className="flex justify-between items-center pb-3 ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
