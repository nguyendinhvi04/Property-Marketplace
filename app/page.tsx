import Header from './components/Header';
import SidebarFilter from './components/SidebarFilter';
import PropertyList from './components/PropertyList';
import RightSidebar from './components/RightSidebar';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-white bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] pt-8 pb-4">
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto px-2 sm:px-4 gap-y-6 lg:gap-y-0 lg:gap-x-8 justify-between">
        <div className="flex-1 min-w-[180px] max-w-sm mb-2 lg:mb-0"><SidebarFilter /></div>
        <div className="flex-[3] min-w-0 max-w-full px-0"><PropertyList /></div>
        <div className="hidden lg:block flex-1 min-w-[130px] max-w-sm -mr-24"><RightSidebar /></div>
      </div>
    </main>
  );
}
