
import FilterPopover from "@/components/wardrobe/FilterPopover";
import { Search } from "lucide-react";
import React, { ComponentProps } from "react";

interface SearchBarProps
    extends Omit<ComponentProps<"input">, "value" | "onChange"> {
    value: string;
    onChange: (value: string) => void;
}

export function PageColumnSearchBar({
    value,
    onChange,
    placeholder = "Search...",
    ...props
}: SearchBarProps) {
    return (
        <div className="relative w-full max-w-md ml-3 select-none items-center flex">

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>

            <input
                {...props}
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-label="Search wardrobe"
                className="w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
        </div>
    );
}
