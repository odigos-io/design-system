import React, { useEffect, useRef, useState } from "react";
import Open from "@/assets/icons/expand-arrow.svg";
import {
  DropdownHeader,
  DropdownWrapper,
  DropdownBody,
  DropdownItem,
  DropdownListWrapper,
} from "./drop.down.styled";
import { Text } from "../text/text";
import { SearchInput } from "../search.input/search.input";
import { useOnClickOutside } from "@/hooks";

interface DropDownItem {
  id: number;
  label: string;
}
interface DropDownProps {
  data: DropDownItem[];
  onChange: (item: DropDownItem) => void;
  width?: number;
  value?: DropDownItem | null;
}

const SELECTED_ITEM = "Select item";
const CONTAINER_STYLE = {
  width: "90%",
  border: "none",
  background: "transparent",
};
const SEARCH_INPUT_STYLE = { background: "transparent" };

export function DropDown({
  data = [],
  onChange,
  width = 260,
  value,
}: DropDownProps) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(value || null);
  const [isHover, setHover] = useState<any>(false);
  const [searchFilter, setSearchFilter] = useState("");

  const containerRef = useRef<any>(null);

  useEffect(() => {
    value && setSelectedItem(value);
  }, [value]);

  useOnClickOutside(containerRef, () => setOpen(false));

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (item: DropDownItem) => {
    onChange(item);
    setSelectedItem(item);
    setSearchFilter("");
    setOpen(false);
  };

  function getDropdownList() {
    return searchFilter
      ? data?.filter((item: any) =>
          item?.label.toLowerCase().includes(searchFilter.toLowerCase())
        )
      : data;
  }

  return (
    <div style={{ height: 37, width }} ref={containerRef}>
      <DropdownWrapper
        selected={isHover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={toggleDropdown}
      >
        <DropdownHeader>
          {selectedItem ? selectedItem.label : SELECTED_ITEM}
          <Open className={`dropdown-arrow ${isOpen && "open"}`} />
        </DropdownHeader>
      </DropdownWrapper>
      {isOpen && (
        <DropdownBody>
          <SearchInput
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search"
            containerStyle={CONTAINER_STYLE}
            inputStyle={SEARCH_INPUT_STYLE}
            showClear={false}
          />
          <DropdownListWrapper>
            {getDropdownList().map((item) => (
              <DropdownItem
                key={item.id}
                onClick={(e: any) => handleItemClick(item)}
              >
                <Text>{item.label}</Text>
              </DropdownItem>
            ))}
          </DropdownListWrapper>
        </DropdownBody>
      )}
    </div>
  );
}
