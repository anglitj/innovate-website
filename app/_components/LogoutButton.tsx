import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";

export default function LogoutButton() {
  return (
    <button className="flex items-center hover:bg-primary-700 transition">
      <ArrowLeftStartOnRectangleIcon className="h-5 w-5 mx-4" />
      <p>Logout</p>
    </button>
  );
}
