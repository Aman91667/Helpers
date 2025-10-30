import { Link, useLocation } from "react-router-dom";
import { Home, Search, User, HelpCircle } from "lucide-react";
import { ROUTES } from "@/core/config/constants";
import { cn } from "@/core/lib/utils";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: ROUTES.HOME, icon: Home, label: "Home" },
    { to: ROUTES.BOOK_HELPER, icon: Search, label: "Book" },
    { to: ROUTES.HELP, icon: HelpCircle, label: "Help" },
    { to: ROUTES.LOGIN, icon: User, label: "Account" },
  ];

  return (
    <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%]">
      {/* Curved translucent background */}
      <div className="relative bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-900/70 dark:to-gray-800/50 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all duration-300 p-2 rounded-xl",
                  isActive
                    ? "scale-110"
                    : "hover:scale-105 active:scale-95"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-br from-healpers-coral to-healpers-teal shadow-md shadow-healpers-coral/30 text-white"
                      : "bg-white/40 dark:bg-gray-700/40 text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-600/60"
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold transition-colors",
                    isActive
                      ? "text-healpers-teal"
                      : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
