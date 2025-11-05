import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions: { [key: string]: number } = {};

export function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        const isProjectDetail = pathname.startsWith('/project/');
        const wasPreviousProjectDetail = prevPathname.current.startsWith('/project/');

        // Save scroll position of previous page (but not for project detail pages)
        if (prevPathname.current && !wasPreviousProjectDetail) {
            scrollPositions[prevPathname.current] = window.scrollY;
        }

        // Always scroll to top for project detail pages
        if (isProjectDetail) {
            window.scrollTo(0, 0);
        } else if (scrollPositions[pathname] !== undefined) {
            // Restore scroll position if returning to a previously visited page
            window.scrollTo(0, scrollPositions[pathname]);
        } else {
            // Scroll to top for new pages
            window.scrollTo(0, 0);
        }

        prevPathname.current = pathname;
    }, [pathname]);

    return null;
}
