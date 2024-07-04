import theme from '@/styles/palette';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Pagination } from '../pagination';
import { Text } from '../text/text';

type TableProps<T> = {
  data: T[];
  renderTableHeader: () => JSX.Element;
  renderTableRows: (item: T, index: number) => JSX.Element;
  renderEmptyResult: () => JSX.Element;
  onPaginate?: (pageNumber: number) => void;
};

const StyledTable = styled.table`
  width: 100%;
  background-color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.blue_grey};
  border-radius: 6px;
  border-collapse: separate;
  border-spacing: 0;
`;

const StyledTbody = styled.tbody``;

const DropdownContainer = styled.div`
  margin: 10px 0;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Dropdown = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.blue_grey};
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  border: ${({ theme }) => `1px solid  ${theme.colors.blue_grey}`};
`;

const DropdownOption = styled.option`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
`;

// Applying generic type T to the Table component
export const Table = <T,>({
  data,
  onPaginate,
  renderTableRows,
  renderTableHeader,
  renderEmptyResult,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (onPaginate) {
      onPaginate(pageNumber);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever items per page changes
  };

  return (
    <>
      <DropdownContainer>
        <Text color={theme.text.light_grey}>
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {data.length}{' '}
          items
        </Text>
        <Dropdown
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <DropdownOption value={10}>10</DropdownOption>
          <DropdownOption value={25}>25</DropdownOption>
          <DropdownOption value={50}>50</DropdownOption>
        </Dropdown>
      </DropdownContainer>

      <StyledTable>
        {renderTableHeader()}
        <StyledTbody>
          {currentItems.map((item, index) => renderTableRows(item, index))}
        </StyledTbody>
      </StyledTable>

      {data.length === 0 ? (
        renderEmptyResult()
      ) : (
        <Pagination
          total={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
