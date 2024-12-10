import SideNavigation from "@/app/_components/SideNavigation";

type ChildrenProp = {
  children: React.ReactNode;
};

export default function Layout({ children }: ChildrenProp) {
  return (
    <div className="grid grid-cols-[10rem_1fr] h-full gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
