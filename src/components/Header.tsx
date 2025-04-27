
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Info, PhoneCall, HelpCircle } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="w-full py-6 backdrop-blur-sm bg-background/80 sticky top-0 z-50 border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-medical-blue to-medical-mint p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-6 w-6 text-white animate-pulse-gentle" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medical-blue to-medical-mint">
              SymptomSparkle
            </h1>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:block">
            <Link 
              to="/emergency"
              className="group"
            >
              <button className="flex items-center space-x-2 bg-medical-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <HelpCircle className="h-4 w-4" />
                <span>Emergency Help</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
