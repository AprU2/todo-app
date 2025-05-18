import { useEffect, useRef, useState } from "react";
import i18next from "../../../i18n/i18n";
import i18n from "../../../i18n/i18n";
import "./languages-dropdown-component.scss";

const languages = [
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
];

export const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="language-dropdown-wrapper">
      <div ref={dropdownRef} className="language-dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="language-dropdown__toggle"
        >
          {currentLanguage!.label}
        </button>

        {isOpen && (
          <div className="language-dropdown__menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                disabled={currentLanguage?.label === lang.label}
                onClick={() => {
                  i18next.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="language-dropdown__item"
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
