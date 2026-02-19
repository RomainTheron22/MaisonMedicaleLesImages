"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MENU_ITEMS } from "../menuConfig";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const isMobileViewport = () => window.matchMedia("(max-width: 860px)").matches;

    const handleDocumentClick = (event) => {
      const target = event.target;
      const clickOutsideMenu =
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(target) &&
        !burgerRef.current.contains(target);

      if (clickOutsideMenu) {
        setOpenMenus({});
        if (isMobileViewport()) {
          setIsMenuOpen(false);
        }
      }
    };

    const handleResize = () => {
      if (!isMobileViewport()) {
        setIsMenuOpen(false);
      }
      setOpenMenus({});
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 8) {
        setIsScrolled(false);
      } else if (currentY > previousY) {
        setIsScrolled(true);
      } else if (currentY < previousY) {
        setIsScrolled(false);
      }

      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLeafClick = () => {
    setIsMenuOpen(false);
    setOpenMenus({});
  };

  const toggleNestedMenu = (menuKey) => {
    const isMobile = window.matchMedia("(max-width: 860px)").matches;

    setOpenMenus((prev) => {
      const nextValue = !prev[menuKey];
      if (isMobile) {
        return { ...prev, [menuKey]: nextValue };
      }
      return nextValue ? { [menuKey]: true } : {};
    });
  };

  const handleParentClick = (item, menuKey, isOpen, event) => {
    const hasRealHref = Boolean(item.href && item.href !== "#");
    const isMobile = window.matchMedia("(max-width: 860px)").matches;

    if (isMobile) {
      if (hasRealHref && isOpen) {
        handleLeafClick();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      toggleNestedMenu(menuKey);
      return;
    }

    if (!hasRealHref) {
      event.preventDefault();
      event.stopPropagation();
      toggleNestedMenu(menuKey);
      return;
    }

    handleLeafClick();
  };

  const renderMenuItems = (items, parentKey = "menu", level = 0) => (
    <ul className={`menu-level menu-level-${level}`}>
      {items.map((item, index) => {
        const menuKey = `${parentKey}-${index}`;
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const isOpen = Boolean(openMenus[menuKey]);

        if (hasChildren) {
          const href = item.href || "#";
          const isInternalHref = href.startsWith("/");
          return (
            <li
              key={menuKey}
              className={`menu-item has-children ${isOpen ? "is-open" : ""}`}
            >
              {isInternalHref ? (
                <Link
                  href={href}
                  className={`nav-link nav-toggle level-${level}`}
                  onClick={(event) => handleParentClick(item, menuKey, isOpen, event)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-label={`Afficher le sous-menu ${item.label}`}
                >
                  <span>{item.label}</span>
                  {level <= 1 ? <span className="caret" aria-hidden="true"></span> : null}
                </Link>
              ) : (
                <a
                  href={href}
                  className={`nav-link nav-toggle level-${level}`}
                  onClick={(event) => handleParentClick(item, menuKey, isOpen, event)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-label={`Afficher le sous-menu ${item.label}`}
                >
                  <span>{item.label}</span>
                  {level <= 1 ? <span className="caret" aria-hidden="true"></span> : null}
                </a>
              )}

              <div className={`submenu submenu-level-${level + 1}`}>
                {renderMenuItems(item.children, menuKey, level + 1)}
              </div>
            </li>
          );
        }

        const href = item.href || "#";
        const isInternalHref = href.startsWith("/");
        return (
          <li key={menuKey} className="menu-item">
            {isInternalHref ? (
              <Link href={href} className={`nav-link level-${level}`} onClick={handleLeafClick}>
                {item.label}
              </Link>
            ) : (
              <a href={href} className={`nav-link level-${level}`} onClick={handleLeafClick}>
                {item.label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={`topbar ${isScrolled ? "topbar-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Maison Médicale Les Images">
        <span className="brand-line brand-main">Maison Médicale</span>
        <span className="brand-line brand-accent">Les Images</span>
      </Link>

      <button
        ref={burgerRef}
        className="burger"
        aria-label="Afficher le menu"
        aria-expanded={isMenuOpen}
        aria-controls="nav"
        onClick={() => {
          setIsMenuOpen((open) => !open);
          setOpenMenus({});
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="nav"
        ref={navRef}
        className={`nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Navigation principale"
      >
        {renderMenuItems(MENU_ITEMS)}
      </nav>
    </header>
  );
}
